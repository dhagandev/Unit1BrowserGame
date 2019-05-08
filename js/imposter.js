class Imposter extends Enemy {
	constructor() {
		let health = 15;
		let coinsDropped = 0;
		super("Imp-oster", "./images/imposter.png", health, coinsDropped);
		coinsDropped = super.getCoins(34, 37);
		super.coinsDropped = coinsDropped;
	}
}