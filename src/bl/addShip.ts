import { Board, PLAYER_ID, Position } from './game.model'

export function addShip(player: PLAYER_ID, pos: Position, board: Board): Board {
   board[pos.rank - 1][pos.file - 1].players[player].occupiedByMe = true
   return board
}
