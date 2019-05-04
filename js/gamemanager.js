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
		this.playerHero = new Hero("Just Another Hero", "./images/adventurer-idle-2-00.png", heroAtkStr, heroAtkSpd);
		this.playerHero.createHeroCard();
		this.companionObjects = [];
		this.companionObjects = [new FellowAdventurer()];
		this.companionObjects[0].createCompanionCard();
		this.enemyManager = new EnemyManager(this);
		this.statsManager = new Stats();
		this.upgradesManager = new Upgrades();
		this.achievementManager = new Achievements();
	}

	render() {
		let fightHeadBlock = document.querySelector(".heading");
		let monHand = document.createElement("div");
		monHand.classList.add("money-hand");
		monHand.innerHTML = this.statsManager.moneyHand + " gp";
		fightHeadBlock.append(monHand);

		let fightBlock = document.querySelector(".fight");
		let fightArena = document.createElement("div");
		fightArena.classList.add("arena");
		
		let enemyPosition = document.createElement("img");
		enemyPosition.classList.add("enemy-pos");
		enemyPosition.src = this.enemyManager.currentEnemy.image;
		enemyPosition.setAttribute("alt", this.enemyManager.currentEnemy.name + "\'s image");

		fightArena.append(enemyPosition);
		fightBlock.append(fightArena);
	}
}

let gm = new GameManager();
gm.render();