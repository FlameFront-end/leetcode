// https://leetcode.com/problems/find-words-containing-character/description/

/**
 * @param {string[]} words
 * @param {string} x
 * @return {number[]}
 */

const findWordsContaining = (words, x) => {
	let res = []

	words.map((item, index) => {
		if (item.includes(x)) {
			res.push(index)
		}
	})

	return res
}

console.log(findWordsContaining(['leet', 'code'], 'e'))
