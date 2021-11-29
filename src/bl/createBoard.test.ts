import { createBoard } from './createBoard'

const emptyCell = {
   occupiedByMe: false,
   occupiedByThem: false,
   bombedByMe: false,
   bombedByThem: false,
}

describe('createGame', () => {
   test('1 x 1', () => {
      let expected = [[{ rank: 1, file: 1, players: [emptyCell, emptyCell] }]]
      let actual = createBoard(1, 1)

      expect(actual).toStrictEqual(expected)
   })
   test('2 x 1', () => {
      let expected = [
         [
            { rank: 1, file: 1, players: [emptyCell, emptyCell] },
            { rank: 2, file: 1, players: [emptyCell, emptyCell] },
         ],
      ]
      let actual = createBoard(2, 1)

      expect(actual).toStrictEqual(expected)
   })

   test('2 x 2', () => {
      let expected = [
         [
            { rank: 1, file: 1, players: [emptyCell, emptyCell] },
            { rank: 2, file: 1, players: [emptyCell, emptyCell] },
         ],
         [
            { rank: 1, file: 2, players: [emptyCell, emptyCell] },
            { rank: 2, file: 2, players: [emptyCell, emptyCell] },
         ],
      ]
      let actual = createBoard(2, 2)

      expect(actual).toStrictEqual(expected)
   })

   test('2 x 3', () => {
      let expected = [
         [
            { rank: 1, file: 1, players: [emptyCell, emptyCell] },
            { rank: 2, file: 1, players: [emptyCell, emptyCell] },
         ],
         [
            { rank: 1, file: 2, players: [emptyCell, emptyCell] },
            { rank: 2, file: 2, players: [emptyCell, emptyCell] },
         ],
         [
            { rank: 1, file: 3, players: [emptyCell, emptyCell] },
            { rank: 2, file: 3, players: [emptyCell, emptyCell] },
         ],
      ]
      let actual = createBoard(2, 3)

      expect(actual).toStrictEqual(expected)
   })
})
