import { createGame } from "./createGame";

describe("createGame", () => {
  test("1 x 1", () => {
    let expected = [[{ rank: "a", file: 1, playerA: {}, playerB: {} }]];
    let actual = createGame(1, 1);

    expect(actual).toStrictEqual(expected);
  });
  test("2 x 1", () => {
    let expected = [
      [
        { rank: "a", file: 1, playerA: {}, playerB: {} },
        { rank: "b", file: 1, playerA: {}, playerB: {} },
      ],
    ];
    let actual = createGame(2, 1);

    expect(actual).toStrictEqual(expected);
  });

  test("2 x 2", () => {
    let expected = [
      [
        { rank: "a", file: 1, playerA: {}, playerB: {} },
        { rank: "b", file: 1, playerA: {}, playerB: {} },
      ],
      [
        { rank: "a", file: 2, playerA: {}, playerB: {} },
        { rank: "b", file: 2, playerA: {}, playerB: {} },
      ],
    ];
    let actual = createGame(2, 2);

    expect(actual).toStrictEqual(expected);
  });

  test("2 x 3", () => {
    let expected = [
      [
        { rank: "a", file: 1, playerA: {}, playerB: {} },
        { rank: "b", file: 1, playerA: {}, playerB: {} },
      ],
      [
        { rank: "a", file: 2, playerA: {}, playerB: {} },
        { rank: "b", file: 2, playerA: {}, playerB: {} },
      ],
      [
        { rank: "a", file: 3, playerA: {}, playerB: {} },
        { rank: "b", file: 3, playerA: {}, playerB: {} },
      ],
    ];
    let actual = createGame(2, 3);

    expect(actual).toStrictEqual(expected);
  });
});
