import * as R from 'ramda'

import { Game, PLAYER_ID, Position } from "./game.model";

export function addShip(player: PLAYER_ID, pos: Position, game: Game): Game {
   game[0][0].players[0].occupiedByMe = true
   return game
}
