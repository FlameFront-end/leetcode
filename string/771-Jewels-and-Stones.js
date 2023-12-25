// https://leetcode.com/problems/jewels-and-stones/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = (jewels, stones) => {
	const jewelsArr = jewels.split('')

	let res = 0

	for (let i = 0; i < jewelsArr.length; i++) {
		res += stones.split(jewelsArr[i]).length - 1
	}

	return res
}

console.log(numJewelsInStones('aA', 'aAAbbbb'))
