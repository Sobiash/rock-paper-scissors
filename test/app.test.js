const { game, getComputerChoice } = require("../app");

describe("game", () => {
	describe("get random choices for Computer", () => {
		it("should return random choice", () => {
			const choices = ["rock", "paper", "scissors"];
			const choiceFound = [];
			let valid = false;

			for (let i = 0; i <= choices.length; i++) {
				const choice = getComputerChoice();
				if (choices.indexOf(choice) > -1 && choiceFound.indexOf(choice) === -1)
					choiceFound.push(choice);
				if (choiceFound.length <= choices.length) {
					valid = true;
				}
			}
			expect(valid).toEqual(true);
		});

		it("should return random choice", () => {
			expect(typeof game).toBe("function");
		});
	});

	describe("is a function", () => {
		it("should be a function", () => {
			expect(typeof game).toBe("function");
		});
	});

	describe("draw conditions for game", () => {
		it("should return 'draw' on 'paper', 'paper'", () => {
			const playGame = game("paper", "paper");
			expect(playGame).toEqual("draw");
		});
		it("should return 'draw' on 'rock', 'rock'", () => {
			const playGame = game("rock", "rock");
			expect(playGame).toEqual("draw");
		});
		it("should return 'draw' on 'scissors', 'scissors'", () => {
			const playGame = game("scissors", "scissors");
			expect(playGame).toEqual("draw");
		});
	});

	describe("winning conditions for user", () => {
		it("should make win user on 'rock', 'scissors'", () => {
			const playGame = game("rock", "scissors");
			expect(playGame).toEqual(1);
		});
		it("should make win user on 'paper', 'rock'", () => {
			const playGame = game("paper", "rock");
			expect(playGame).toEqual(1);
		});
		it("should make win user on 'paper', 'rock'", () => {
			const playGame = game("scissors", "paper");
			expect(playGame).toEqual(1);
		});
	});

	describe("winning conditions for computer", () => {
		it("should make win computer on 'rock', 'paper'", () => {
			const playGame = game("rock", "paper");
			expect(playGame).toEqual(2);
		});
		it("should make win computer on 'paper', 'scissors'", () => {
			const playGame = game("paper", "scissors");
			expect(playGame).toEqual(2);
		});
		it("should make win computer on 'scissors', 'rock'", () => {
			const playGame = game("scissors", "rock");
			expect(playGame).toEqual(2);
		});
	});
});
