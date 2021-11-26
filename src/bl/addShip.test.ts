import { addShip } from "./addShip";
import { createGame } from "./createGame";
import { PLAYER_ID } from "./game.model";

const emptyCell = {
   occupiedByMe: false,
   occupiedByThem: false,
   bombedByMe: false,
   bombedByThem: false
};


describe("addShip", () => {
   test("very small", () => {
      let inp = createGame(1, 1);

      let expected = [[{
         rank: 1, file: 1, players: [{
            occupiedByMe: true,
            occupiedByThem: false,
            bombedByMe: false,
            bombedByThem: false
         }, emptyCell]
      }]];

      let actual = addShip(PLAYER_ID.A, { rank: 1, file: 1 }, inp);

      expect(actual).toStrictEqual(expected);
   });
});
