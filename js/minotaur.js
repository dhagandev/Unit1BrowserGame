class Minotaur extends Enemy {
	constructor() {
		let health = 35;
		let coinsDropped = 0;
		super("Minotaur", "./images/minotaur.png", health, coinsDropped);
		coinsDropped = super.getCoins(10, 16);
		super.coinsDropped = coinsDropped;
	}
}