import { configureStore } from '@reduxjs/toolkit'
import { boardSlice } from './engine'
import { PLAYER_ID } from './game.model'

export const { addShip } = boardSlice.actions

describe('engine', () => {
   test('addShip', () => {
      const store = configureStore({
         reducer: boardSlice.reducer,
      })

      store.dispatch(
         addShip({ player: PLAYER_ID.A, position: { rank: 1, file: 1 } })
      )
      let actual =
         store.getState().board[1][1].players[PLAYER_ID.A].occupiedByMe
      expect(actual).toBe(true)
   })
})
