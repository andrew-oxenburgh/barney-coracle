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

export interface Board {
   game: Cell[][]
}

export enum PLAYER_ID {
   A = 0,
   B = 1,
}

export enum Result {
   HIT,
   MISS,
}
