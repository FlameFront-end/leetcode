// https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/

/**
 * @param {string[]} words
 * @param {string} str
 * @return {boolean}
 */
const isAcronym = (words, str) => {
	if (words.length !== str.length) return false

	let oneChars = ''
	words.map(item => {
		oneChars += item[0]
	})

	return oneChars === str
}

console.log(isAcronym(['alice', 'bob', 'charlie'], 'abc'))
