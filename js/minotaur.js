import * from 'enemy.js'

class Minotaur extends Enemy {
	constructor() {
		let health = 35;
		let coinsDropped = super.getCoins(9, 14);
		super("Minotaur", null, health, coinsDropped);
	}
}