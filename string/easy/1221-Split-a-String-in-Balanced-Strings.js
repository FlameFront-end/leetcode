// https://leetcode.com/problems/split-a-string-in-balanced-strings/description/

/**
 * @param {string} str
 * @return {number}
 */

function balancedStringSplit(str) {
	let balance = 0
	let count = 0

	for (let i = 0; i < str.length; i++) {
		if (str[i] === 'L') {
			balance++
		} else {
			balance--
		}

		if (balance === 0) {
			count++
		}
	}

	return count
}

console.log(balancedStringSplit('RLRRRLLRLL'))
