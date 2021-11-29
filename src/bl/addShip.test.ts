import { addShip } from './addShip'
import { createBoard } from './board'
import { PLAYER_ID } from './game.model'
import * as R from 'ramda'

describe('addShip', () => {
   test('1 x 1', () => {
      let inp = createBoard(1, 1)

      let expected = R.clone(inp)
      expected[0][0].players[0].occupiedByMe = true

      let actual = addShip(PLAYER_ID.A, { rank: 1, file: 1 }, inp)

      expect(actual).toStrictEqual(expected)
   })

   test('2 x 2', () => {
      let inp = createBoard(2, 2)

      let expected = R.clone(inp)
      expected[0][0].players[0].occupiedByMe = true
      expected[1][1].players[0].occupiedByMe = true

      let stage = addShip(PLAYER_ID.A, { rank: 1, file: 1 }, inp)
      let actual = addShip(PLAYER_ID.A, { rank: 2, file: 2 }, stage)

      expect(actual).toStrictEqual(expected)
   })
})
