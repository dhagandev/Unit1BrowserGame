class GameManager {
	let resetGame = null;
	let heroObject = null;
	let companionObjects = null;
	let enemyManager = null;

	constructor {
		this.resetGame = false;
		let heroAtkStr = 1;
		let heroAtkSpd = 0.5;
		this.heroObject = new Hero("Just Another Hero", null, heroAtkStr, heroAtkSpd);
		this.companionObjects = [];
	}
}