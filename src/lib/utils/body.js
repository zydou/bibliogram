const constants = require("../constants")
const {Parser} = require("./parser/parser")

function selectExtractor(text) {
	if (text.includes("window._sharedData = ")) {
		return extractSharedData(text)
	} else if (text.includes("PolarisQueryPreloaderCache")) {
		return extractPreloader(text)
	} else {
		throw constants.symbols.extractor_results.NO_SHARED_DATA
	}
}

/**
 * @param {string} text
 * @returns {{status: symbol, value: any}}
 */
function extractSharedData(text) {
	const parser = new Parser(text)
	const index = parser.seek("window._sharedData = ", {moveToMatch: true, useEnd: true})
	if (index === -1) {
		// Maybe the profile is age restricted?
		const age = getRestrictedAge(text)
		if (age !== null) { // Correct.
			throw constants.symbols.extractor_results.AGE_RESTRICTED
		}
		throw constants.symbols.extractor_results.NO_SHARED_DATA
	}
	parser.store()
	const end = parser.seek(";</script>")
	parser.restore()
	const sharedDataString = parser.slice(end - parser.cursor)
	const sharedData = JSON.parse(sharedDataString)
	console.log(sharedData)
	// check for alternate form of age restrictions
	if (sharedData.entry_data && sharedData.entry_data.HttpGatedContentPage) {
		// ideally extracting the age should be done here, but for the web ui it doesn't matter
		throw constants.symbols.extractor_results.AGE_RESTRICTED
	}
	return sharedData.entry_data.ProfilePage[0].graphql.user
}

/**
 * @param {string} text
 * @returns {any}
 */
function extractPreloader(text) {
	const entries = []
	const parser = new Parser(text)
	while (parser.seek('{"require":[["PolarisQueryPreloaderCache"', {moveToMatch: true, useEnd: true}) !== -1) {
		if (parser.seek('{"complete":', {moveToMatch: true, useEnd: false}) !== -1) {
			let details = parser.get({split: ',"status_code":'}) + "}}"
			let data = JSON.parse(details)
			entries.push(data)
		}
	}
	// entries now has the things
	const profileInfoResponse = entries.find(x => x.request.url === "/api/v1/users/web_profile_info/")
	if (!profileInfoResponse) {
		throw new Error("No profile info in the preloader.")
	}
	return JSON.parse(profileInfoResponse.result.response).data.user
}

/**
 * @param {string} text
 */
function getRestrictedAge(text) {
	const parser = new Parser(text)
	let index = parser.seek("<h2>Restricted profile</h2>", {moveToMatch: true, useEnd: true})
	if (index === -1) return null
	index = parser.seek("<p>", {moveToMatch: true, useEnd: true})
	if (index === -1) return null
	const explanation = parser.get({split: "</p>"}).trim()
	const match = explanation.match(/You must be (\d+?) years? old or over to see this profile/)
	if (!match) return null
	return +match[1] // the age
}

module.exports.selectExtractor = selectExtractor
module.exports.extractSharedData = extractSharedData
module.exports.extractPreloader = extractPreloader
