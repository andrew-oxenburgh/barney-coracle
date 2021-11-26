import * as R from "ramda";

type Rank = string;
type File = number;

interface PlayerCellView {
  occupiedByMe: false;
  occupiedByThem: false;
  bombedByMe: false;
  bombedByThem: false;
}

interface Cell {
  rank: Rank;
  file: File;
  playerA: PlayerCellView | {};
  playerB: PlayerCellView | {};
}

interface Game {
  game: Cell[][];
}

const game = [
  [
    {
      rank: "a",
      file: 1,
      playerA: {},
      playerB: {},
    },
  ],
];

enum PLAYER_ID {
  A = "A",
  B = "B",
}

export default {
  createGame,
};

function createCell(rankNum: number, fileNum: number): Cell {
  return {
    rank: String.fromCharCode(97 + rankNum - 1) as string,
    file: fileNum,
    playerA: {},
    playerB: {},
  };
}

export function createGame(rankNum: number, fileNum: number) {
  const ret = R.range(1, fileNum + 1).map((fileCursor) => {
    return R.range(1, rankNum + 1).map((rankCursor) => {
      return createCell(rankCursor, fileCursor);
    });
  });
  return ret;
}
