import { Board, PLAYER_ID, Position, Result } from "./game.model";

export function bombShip(
   player: PLAYER_ID,
   pos: Position,
   board: Board
): { board: Board; result: Result } {
   let result = board[pos.rank - 1][pos.file - 1].players[player].occupiedByThem
      ? Result.HIT
      : Result.MISS
   board[pos.rank - 1][pos.file - 1].players[player].bombedByMe = true
   return {
      board: board,
      result,
   }
}
