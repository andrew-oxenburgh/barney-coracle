import * as R from 'ramda'

import { Cell, Game } from './game.model'

function createCell(rankNum: number, fileNum: number): Cell {
   return {
      rank: String.fromCharCode(97 + rankNum - 1) as string,
      file: fileNum,
      playerA: {},
      playerB: {},
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
