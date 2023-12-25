// https://leetcode.com/problems/reverse-words-in-a-string-iii/

/**
 * @param {string} str
 * @return {string}
 */
const reverseWords = str => {
	const strArr = str.split(' ')
	const strArrReverse = strArr.map(item => {
		return item.split('').reverse().join('')
	})

	return strArrReverse.join(' ')
}

console.log(reverseWords("Let's take LeetCode contest"))
