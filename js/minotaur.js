class Minotaur extends Enemy {
	constructor() {
		let health = 35;
		let coinsDropped = 0;
		super("Minotaur", "./images/minotaur.js", health, coinsDropped);
		coinsDropped = super.getCoins(9, 14);
		super.coinsDropped = coinsDropped;
	}
}