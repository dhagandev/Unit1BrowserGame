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
		monHand.innerHTML = this.statsManager.moneyHand + "gp";
		fightHeadBlock.append(monHand);

		let enemyHealthBar = this.enemyManager.getEnemyHealthBar();
		fightHeadBlock.append(enemyHealthBar);

		let fightBlock = document.querySelector(".fight");
		let fightArena = document.createElement("div");
		fightArena.classList.add("arena");
		
		let heroPosition = this.heroManager.getHeroDomElement();
		fightArena.append(heroPosition);

		let enemyPosition = this.enemyManager.getEnemyPositionElement();
		fightArena.insertBefore(enemyPosition, heroPosition.nextSibling);

		let companionElements = this.heroManager.getCompanionDomElements();
		companionElements.forEach(function(ele) {
			fightArena.insertBefore(ele, enemyPosition.nextSibling);
		})


		fightBlock.append(fightArena);
	}

	genDmgBox(damage, source) {
		let fightArena = document.querySelector(".arena");
		let dmgBox = document.createElement("div");
		dmgBox.classList.add("dmg-box");
		dmgBox.classList.add(source);
		dmgBox.classList.add("animated");
		dmgBox.classList.add("fadeOut");
		dmgBox.innerHTML = "-" + damage;
		dmgBox.addEventListener('animationend', () => {
			dmgBox.parentNode.removeChild(dmgBox);
		})

		fightArena.append(dmgBox);
	}
}

let gm = new GameManager();
gm.render();