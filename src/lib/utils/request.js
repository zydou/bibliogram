const NodeFetch = require("./request_backends/node-fetch")
const Got = require("./request_backends/got")
const SavedRequestManager = require("./saved_requests/manager")

const constants = require("../constants")

const userAgent = "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0"

const headers = {
	"User-Agent": userAgent,
	"X-IG-App-ID": 936619743392459 // needed for profile iweb to work
}

const backendStatusLineMap = new Map([
	["node-fetch", "NF "],
	["got", "GOT"],
	["saved", "SAV"]
])

/**
 * @returns {import("./request_backends/reference")}
 */
function request(url, options = {}, settings = {}) {
	if (settings.statusLine === undefined) settings.statusLine = "OUT"
	if (settings.log === undefined) settings.log = true
	if (settings.log) console.log(`      -> [${settings.statusLine}-${backendStatusLineMap.get(constants.request_backend)}] ${url}`) // todo: make more like pinski?
	const save = !!settings.save

	if (constants.request_backend === "node-fetch") {
		return new NodeFetch(url, Object.assign({
			headers,
			redirect: "manual"
		}, options))
	} else if (constants.request_backend === "got") {
		return new Got(url, Object.assign({
			headers,
			followRedirect: false,
			throwHttpErrors: false
		}, options))
	} else if (constants.request_backend === "saved") {
		return new SavedRequestManager(url).request()
	} else {
		throw new Error("Invalid value for setting `request_backend`.")
	}
}

module.exports.request = request
