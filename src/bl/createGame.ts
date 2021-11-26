import * as R from 'ramda'

import { Cell, Game } from './game.model'

function createCell(rankNum: number, fileNum: number): Cell {
   return {
      rank: rankNum,
      file: fileNum,
      players: [
         {
            occupiedByMe: false,
            occupiedByThem: false,
            bombedByMe: false,
            bombedByThem: false
         },
         {
            occupiedByMe: false,
            occupiedByThem: false,
            bombedByMe: false,
            bombedByThem: false
         }
      ]
   }
}

export function createGame(rankNum: number, fileNum: number): Game {
   return R.range(1, fileNum + 1).map((fileCursor) => {
      return R.range(1, rankNum + 1).map((rankCursor) => {
         return createCell(rankCursor, fileCursor)
      })
   })
}

export default {
   createGame,
}
