import * as R from "ramda";

interface PlayerCellView {
  occupiedByMe: boolean;
  occupiedByThem: false;
  bombedByMe: false;
  bombedByThem: false;
}

interface Cell {
  rank: number;
  file: string;
  playerA: PlayerCellView;
  playerB: PlayerCellView;
}

interface Game {
  game: Cell[][];
}

type Rank = string;
type File = number;

const game = [
  [
    {
      rank: "a",
      file: 1,
      playerA: {},
      playerB: {}
    }
  ]
];

enum PLAYER_ID {
  A = "A",
  B = "B"
}

export default {
  createGame
};

function createCell(rankNum: number, fileNum: number) {
  return {
    rank: String.fromCharCode(97 + rankNum - 1),
    file: fileNum,
    playerA: {},
    playerB: {}
  };
}

export function createGame(rankNum: number, fileNum: number) {
  const ret = R.range(1, fileNum + 1).map(fileCursor => {
    return R.range(1, rankNum + 1).map(rankCursor => {
      return createCell(rankCursor, fileCursor);
    });
  });
  return ret;
}
