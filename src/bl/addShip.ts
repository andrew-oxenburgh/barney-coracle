import { Game, PLAYER_ID, Position } from './game.model'

export function addShip(player: PLAYER_ID, pos: Position, game: Game): Game {
   game[pos.rank - 1][pos.file - 1].players[player].occupiedByMe = true
   return game
}
