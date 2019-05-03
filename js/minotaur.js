class Minotaur extends Enemy {
	constructor() {
		let health = 35;
		let coinsDropped = 0;
		console.log("Minotaur integrated.");
		super("Minotaur", null, health, coinsDropped);
		coinsDropped = super.getCoins(9, 14);
		super.coinsDropped = coinsDropped;
	}
}