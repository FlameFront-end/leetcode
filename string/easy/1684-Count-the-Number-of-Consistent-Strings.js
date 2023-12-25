// https://leetcode.com/problems/count-the-number-of-consistent-strings/description/

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
const countConsistentStrings = (allowed, words) => {
	const re = new RegExp(`^[${allowed}]+$`)
	let count = 0

	words.forEach(word => {
		if (word.match(re)) count++
	})

	return count
}

console.log(countConsistentStrings('ab', ['ad', 'bd', 'aaab', 'baa', 'badab']))
