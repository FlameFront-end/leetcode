// https://leetcode.com/problems/truncate-sentence/

/**
 * @param {string} str
 * @param {number} k
 * @return {string}
 */

const truncateSentence = function (str, k) {
	return str.split(' ').slice(0, k).join(' ')
}

console.log(truncateSentence('Hello how are you Contestant', 4))
