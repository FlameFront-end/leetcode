// https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/description/

/**
 * @param {string} n
 * @return {number}
 */
const minPartitions = n => {
	let res = 0

	for (let i = 0; i < n.length; i++) {
		const charNumber = Number(n[i])
		if (charNumber > res) {
			res = charNumber
		}
	}

	return res
}

console.log(minPartitions('32'))
