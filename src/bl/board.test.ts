import { createBoard, drawBoard } from './board'
import { PLAYER_ID } from './game.model'

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

describe('output board', () => {
   test('basic - 1 x 1', () => {
      const board = createBoard(1, 1)
      const drawing = drawBoard(board, PLAYER_ID.A, 'occupiedByMe')
      expect(drawing).toStrictEqual('.\n')
   })
   test('basic - 2 x 2', () => {
      const board = createBoard(2, 2)
      const drawing = drawBoard(board, PLAYER_ID.A, 'occupiedByMe')
      expect(drawing).toStrictEqual('..\n..\n')
   })
   test('set - 2 x 2', () => {
      const board = createBoard(2, 2)
      board[0][0].players[PLAYER_ID.A].occupiedByMe = true
      board[1][1].players[PLAYER_ID.A].occupiedByMe = true

      const drawing1 = drawBoard(board, PLAYER_ID.A, 'occupiedByMe')
      expect(drawing1).toStrictEqual('X.\n.X\n')
      const drawing2 = drawBoard(board, PLAYER_ID.A, 'occupiedByThem')
      expect(drawing2).toStrictEqual('..\n..\n')
   })
})
