class Imposter extends Enemy {
	constructor() {
		let health = 15;
		let coinsDropped = 0;
		console.log("Imposter integrated.");
		super("Imp-oster", null, health, coinsDropped);
		coinsDropped = super.getCoins(4, 7);
		super.coinsDropped = coinsDropped;
	}
}