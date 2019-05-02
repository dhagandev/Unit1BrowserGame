import * from 'enemy.js'

class Imposter extends Enemy {
	constructor() {
		let health = 15;
		let coinsDropped = super.getCoins(4, 7);
		super("Imp-oster", null, health, coinsDropped);
	}
}