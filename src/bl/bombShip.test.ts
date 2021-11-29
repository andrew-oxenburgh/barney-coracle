import { bombShip } from './bombShip'
import { createBoard } from './board'
import { PLAYER_ID, Result } from './game.model'
import * as R from 'ramda'

describe('bombShip', () => {
   test('1 x 1', () => {
      let inp = createBoard(1, 1)
      let expected = R.clone(inp)

      expected[0][0].players[0].bombedByMe = true

      let actual = bombShip(PLAYER_ID.A, { rank: 1, file: 1 }, inp)

      expect(actual.board).toStrictEqual(expected)
      expect(actual.result).toStrictEqual(Result.MISS)
   })

   test('2 x 2', () => {
      let inp = createBoard(2, 2)

      let expected = R.clone(inp)
      expected[0][0].players[0].bombedByMe = true
      expected[1][1].players[0].bombedByMe = true

      let stage = bombShip(PLAYER_ID.A, { rank: 1, file: 1 }, inp)
      let actual = bombShip(PLAYER_ID.A, { rank: 2, file: 2 }, stage.board)

      expect(expected).toStrictEqual(actual.board)
      expect(Result.MISS).toStrictEqual(actual.result)
   })
})
