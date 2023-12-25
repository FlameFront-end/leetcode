/**
 * @param {string} sentence
 * @return {boolean}
 */
const checkIfPangram = sentence => {
	let englishAlphabet = 'abcdefghijklmnopqrstuvwxyz'

	for (let i = 0; i < sentence.length; i++) {
		const char = sentence[i]
		englishAlphabet = englishAlphabet.replace(char, '')
		if (englishAlphabet.length === 0) {
			return true
		}
	}

	return false
}

console.log(checkIfPangram('leetcode'))
