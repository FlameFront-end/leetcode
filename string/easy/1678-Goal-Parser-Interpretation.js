// https://leetcode.com/problems/goal-parser-interpretation/description/

/**
 * @param {string} command
 * @return {string}
 */
const interpret = command => {
	const o = '()'
	const al = '(al)'

	return command.replaceAll(o, 'o').replaceAll(al, 'al')
}

console.log(interpret('G()(al)'))
