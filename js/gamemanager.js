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
		this.companionObjects.forEach(function(ele) {
			ele.createCompanionCard();
		});
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

		let enemyHealthBar = document.createElement("progress");
		enemyHealthBar.classList.add("health-bar");
		enemyHealthBar.setAttribute("max", this.enemyManager.currentEnemy.health);
		enemyHealthBar.setAttribute("value", this.enemyManager.currentEnemy.health);
		fightHeadBlock.append(enemyHealthBar);

		let fightBlock = document.querySelector(".fight");
		let fightArena = document.createElement("div");
		fightArena.classList.add("arena");
		
		let enemyPosition = document.createElement("img");
		enemyPosition.classList.add("enemy-pos");
		enemyPosition.src = this.enemyManager.currentEnemy.image;
		enemyPosition.setAttribute("alt", this.enemyManager.currentEnemy.name + "\'s image");
		fightArena.append(enemyPosition);

		for (let i = 0; i < this.companionObjects.length; i++) {
			let companionPosition = document.createElement("img");
			companionPosition.classList.add("companion-pos");
			let compName = this.companionObjects[i].name;
			switch (compName) {
				case "Fellow Adventurer":
					companionPosition.classList.add("fellowAdv");
					break;
				default:
					break;
			};
			companionPosition.src = this.companionObjects[i].image;
			fightArena.append(companionPosition);
		}

		let heroPosition = document.createElement("img");
		heroPosition.classList.add("hero-pos");
		heroPosition.src = this.playerHero.image;
		fightArena.append(heroPosition);

		fightBlock.append(fightArena);
	}
}

let gm = new GameManager();
gm.render();