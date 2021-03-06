class Enemy extends Character {
	health = null;
	coinsDropped = null;

	constructor(name, image, health, coinsDropped) {
		super(name, image);
		this.health = health;
		this.coinsDropped = coinsDropped;
	}

	getCoins(min, max) {
		return Math.round(Math.random() * (max - min) + min);
	}
}