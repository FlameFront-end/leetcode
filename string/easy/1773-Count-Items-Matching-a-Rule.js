// https://leetcode.com/problems/count-items-matching-a-rule/description/
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
const countMatches = (items, ruleKey, ruleValue) => {
	const keyIndexMap = {
		type: 0,
		color: 1,
		name: 2
	}

	const ruleIndex = keyIndexMap[ruleKey]

	let res = 0

	items.map(item => {
		if (item[ruleIndex] === ruleValue) {
			res++
		}
	})

	return res
}

console.log(
	countMatches(
		[
			['phone', 'blue', 'pixel'],
			['computer', 'silver', 'lenovo'],
			['phone', 'gold', 'iphone']
		],
		'color',
		'silver'
	)
)
