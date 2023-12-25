// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/

/**
 * @param {string[]} operations
 * @return {number}
 */
const finalValueAfterOperations = operations => {
	let x = 0

	const plusCount = operations.filter(
		item => (item === 'X++') | (item === '++X')
	).length
	const minusCount = operations.filter(
		item => (item === 'X--') | (item === '--X')
	).length

	return x + plusCount - minusCount
}

console.log(finalValueAfterOperations(['--X', 'X++', 'X++']))
