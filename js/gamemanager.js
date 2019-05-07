class GameManager {
	resetGame = null;
	enemyManager = null;
	heroManager = null;
	statsManager = null;
	achievementManager = null;
	upgradesManager = null;

	constructor() {
		this.resetGame = false;
		this.enemyManager = new EnemyManager(this);
		this.heroManager = new HeroManager(this);
		this.statsManager = new Stats();
		this.upgradesManager = new Upgrades(this);
		this.achievementManager = new Achievements();
	}

	render() {
		let fightHeadBlock = document.querySelector(".heading");
		let monHand = document.createElement("div");
		monHand.classList.add("money-hand");
		monHand.innerHTML = this.statsManager.moneyHand + " gp";
		fightHeadBlock.append(monHand);

		let enemyHealthBar = this.enemyManager.getEnemyHealthBar();
		fightHeadBlock.append(enemyHealthBar);

		let fightBlock = document.querySelector(".fight");
		let fightArena = document.createElement("div");
		fightArena.classList.add("arena");
		
		let enemyPosition = this.enemyManager.getEnemyPositionElement();
		fightArena.append(enemyPosition);

		let companionElements = this.heroManager.getCompanionDomElements();
		companionElements.forEach(function(ele) {
			fightArena.append(ele);
		})

		let heroPosition = this.heroManager.getHeroDomElement();
		fightArena.append(heroPosition);

		fightBlock.append(fightArena);
	}
}

let gm = new GameManager();
gm.render();