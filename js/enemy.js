import * from 'character.js'

class Enemy extends Character {
	let health = null;
	let coinsDropped = null;

	constructor(name, image, health, coinsDropped) {
		super(name, image);
		this.health = health;
		this.coinsDropped = coinsDropped;
	}

	getCoins(min, max) {
		return Math.random() * (max - min) + min;
	}
}