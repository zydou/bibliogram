function isLatin(text) {
	// remove characters from the text that can be used in any script, such as numbers, basic punctuation, and emojis.
	// the emoji regular expression is from https://stackoverflow.com/a/45138005
	const textWithoutMultilingual = text.replace(/[ .,?!¿¡#@$&%\/0-9\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}-]/ug, "")

	// avoid dividing by zero
	if (textWithoutMultilingual.length == 0) return true

	// regular expression from https://stackoverflow.com/a/26900132 - it's close enough for these heuristics.
	const latinText = textWithoutMultilingual.replace(/[^A-Za-zÀ-ÿ]/g, "")

	// if it's at least 60% latin characters, consider it to be latin.
	return latinText.length > textWithoutMultilingual.length * 0.6
}

module.exports.isLatin = isLatin
