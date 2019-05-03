class GameManager {
	resetGame = null;
	heroObject = null;
	companionObjects = null;
	enemyManager = null;
	statsManager = null;
	achievementManager = null;
	upgradesManager = null;
	playerHero = null;

	constructor() {
		this.resetGame = false;
		let heroAtkStr = 1;
		let heroAtkSpd = 0.5;
		this.playerHero = new Hero("Just Another Hero", null, heroAtkStr, heroAtkSpd);
		this.companionObjects = [];
		this.enemyManager = new EnemyManager(this);
		this.statsManager = new Stats();
		this.upgradesManager = new Upgrades();
		this.achievementManager = new Achievements();
	}
}

let gm = new GameManager();