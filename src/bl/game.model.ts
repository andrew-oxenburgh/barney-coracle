export type Rank = number
export type File = number

export interface PlayerCellView {
   occupiedByMe: false
   occupiedByThem: false
   bombedByMe: false
   bombedByThem: false
}

export interface Position {
   rank: Rank
   file: File
}

export interface Cell {
   rank: Rank
   file: File
   players: [PlayerCellView | {}, PlayerCellView | {}]
}

export interface Game {
   game: Cell[][]
}

export const game = [
   [
      {
         rank: 'a',
         file: 1,
         playerA: {},
         playerB: {},
      },
   ],
]

export enum PLAYER_ID {
   A = 0,
   B = 1,
}
