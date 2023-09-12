import { BowlingGame, createBowlingGame } from "./BowlingGame";

describe("BowlingGame", () => {
  let game: BowlingGame;

  beforeEach(() => {
    game = createBowlingGame();
  });

  it("should be able to throw a ball", () => {
    game.roll(0);
    expect(game).toBeDefined();
  });

  it("should calculate score with all zero", () => {
    rollMany(game, 20, 0);
    expect(game.score()).toBe(0);
  });

  it("should calculate score with all ones", () => {
    rollMany(game, 20, 1);
    expect(game.score()).toBe(20);
  });

  it("should calculate score with a spare", () => {
    rollSpare(game);
    game.roll(3);
    rollMany(game, 17, 0);
    expect(game.score()).toBe(16);
  });

  it("should calculate score with a strike", () => {
    rollStrike(game);
    game.roll(2);
    game.roll(2);
    rollMany(game, 16, 0);
    expect(game.score()).toBe(18);
  });

  it("should calculate score for a perfect game", () => {
    rollMany(game, 12, 10);
    expect(game.score()).toBe(300);
  });
});

function rollStrike(game: BowlingGame) {
  return game.roll(10);
}

function rollSpare(game: BowlingGame) {
  return game.roll(5).roll(5);
}

function rollMany(game: BowlingGame, rolls: number, pins: number) {
  for (let i = 0; i < rolls; i++) {
    game.roll(pins);
  }
}
