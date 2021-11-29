import { configureStore, createSlice } from '@reduxjs/toolkit'

import { createBoard } from './board'
import { PLAYER_ID } from './game.model'

const counterSlice = createSlice({
   name: 'counter',
   initialState: {
      value: 0,
      board: createBoard(4, 4),
   },
   reducers: {
      addShip: (state, props) => {
         const {
            player,
            position: { rank, file },
         } = props.payload
         state.board[rank][file].players[player].occupiedByMe = true
      },
   },
})

export const { addShip } = counterSlice.actions

const store = configureStore({
   reducer: counterSlice.reducer,
})

// store.subscribe(() => console.log(JSON.stringify(store.getState(), null, 4)))

test('engine', () => {
   store.dispatch(
      addShip({ player: PLAYER_ID.A, position: { rank: 1, file: 1 } })
   )
   let actual = store.getState().board[1][1].players[PLAYER_ID.A].occupiedByMe
   expect(actual).toBe(true)
})
