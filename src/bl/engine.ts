import { createSlice } from '@reduxjs/toolkit'
import { createBoard } from './board'

export const boardSlice = createSlice({
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

export default {
   boardSlice,
}
