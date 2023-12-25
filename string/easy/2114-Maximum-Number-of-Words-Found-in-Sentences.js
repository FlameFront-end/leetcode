// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/description/

/**
 * @param {string[]} sentences
 * @return {number}
 */
const mostWordsFound = sentences => {
	let maxLen = 0

	sentences.map(item => {
		const wordCount = item.split(' ').length
		wordCount > maxLen ? (maxLen = wordCount) : false
	})

	return maxLen
}

console.log(
	mostWordsFound([
		'alice and bob love leetcode',
		'i think so too',
		'this is great thanks very much'
	])
)
