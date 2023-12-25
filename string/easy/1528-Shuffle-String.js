// https://leetcode.com/problems/shuffle-string/description/

/**
 * @param {string} str
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = (str, indices) => {
	const result = Array(str.length)

	for (let i = 0; i < str.length; i++) {
		result[indices[i]] = str[i]
	}

	return result.join('')
}

console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]))
