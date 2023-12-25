// https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/description/

/**
 * @param {string} str
 * @return {string[]}
 */
const cellsInRange = str => {
	const firstChar = str.charCodeAt(0)
	const lastChar = str.charCodeAt(3)
	const firstNum = str.charCodeAt(1)
	const lastNum = str.charCodeAt(4)

	const result = []

	for (i = 0; i <= lastChar - firstChar; i++) {
		for (j = 0; j <= lastNum - firstNum; j++) {
			result.push(
				`${String.fromCharCode(firstChar + i)}${String.fromCharCode(
					firstNum + j
				)}`
			)
		}
	}

	return result
}

console.log(cellsInRange('A1:F1')) // Output: ["A1","B1","C1","D1","E1","F1"]
