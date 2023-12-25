// https://leetcode.com/problems/sorting-the-sentence/description/

/**
 * @param {string} str
 * @return {string}
 */
const sortSentence = str => {
	const words = str.split(' ')

	const wordIndexPairs = words.map(word => {
		return {
			word: word.slice(0, -1),
			index: parseInt(word.slice(-1))
		}
	})

	wordIndexPairs.sort((a, b) => {
		return a.index - b.index
	})

	const sortedWords = wordIndexPairs.map(pair => {
		return pair.word
	})

	return sortedWords.join(' ')
}

console.log(sortSentence('Myself2 Me1 I4 and3')) // Вывод: "Me Myself and I"
