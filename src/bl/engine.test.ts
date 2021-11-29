import { createSlice, configureStore } from '@reduxjs/toolkit'

import { createBoard } from './createBoard'
import { addShip as _addShip } from './addShip'
import * as M from './game.model'

const counterSlice = createSlice({
   name: 'counter',
   initialState: {
      value: 0,
      board: createBoard(4, 4),
   },
   reducers: {
      addShip: (state) => {
         state.board[0][1].players[1].occupiedByMe = true
      },
      decremented: (state) => {
         state.value -= 1
      },
      incremented: (state) => {
         state.value += 1
      },
   },
})

export const { incremented, decremented, addShip } = counterSlice.actions

const store = configureStore({
   reducer: counterSlice.reducer,
})

// Can still subscribe to the store
store.subscribe(() => console.log(JSON.stringify(store.getState(), null, 4)))

// Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented())
// {value: 1}
// store.dispatch(incremented())
// {value: 2}
// store.dispatch(decremented())
// {value: 1}

test('engine', () => {
   // store.dispatch(decremented())
   store.dispatch(addShip())
})
