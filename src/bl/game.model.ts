export type Rank = string
export type File = number

export interface PlayerCellView {
   occupiedByMe: false
   occupiedByThem: false
   bombedByMe: false
   bombedByThem: false
}

export interface Cell {
   rank: Rank
   file: File
   playerA: PlayerCellView | {}
   playerB: PlayerCellView | {}
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
   A = 'A',
   B = 'B',
}
