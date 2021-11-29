import * as R from 'ramda'

import { Cell, Board, PLAYER_ID } from './game.model'

function createCell(rankNum: number, fileNum: number): Cell {
   return {
      rank: rankNum,
      file: fileNum,
      players: [
         {
            occupiedByMe: false,
            occupiedByThem: false,
            bombedByMe: false,
            bombedByThem: false,
         },
         {
            occupiedByMe: false,
            occupiedByThem: false,
            bombedByMe: false,
            bombedByThem: false,
         },
      ],
   }
}

export function createBoard(rankNum: number, fileNum: number): Board {
   return R.range(1, fileNum + 1).map((fileCursor) => {
      return R.range(1, rankNum + 1).map((rankCursor) => {
         return createCell(rankCursor, fileCursor)
      })
   })
}

export function drawBoard(board: Board, player: PLAYER_ID, field: string) {
   return R.map((rnk) => {
      return (
         R.map((fl) => {
            return fl.players[player][field] ? 'X' : '.'
         }, rnk).join('') + '\n'
      )
   }, board).join('')
}

export default {
   createBoard,
   drawBoard,
}
