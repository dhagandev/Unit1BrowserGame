class GameManager {
	resetGame = null;
	enemyManager = null;
	heroManager = null;
	statsManager = null;
	achievementManager = null;
	upgradesManager = null;

	clickAtk = 0;

	constructor() {
		this.resetGame = false;
		this.enemyManager = new EnemyManager(this);
		this.heroManager = new HeroManager(this);
		this.statsManager = new Stats();
		this.upgradesManager = new Upgrades(this);
		this.achievementManager = new Achievements();
		this.clickAtk = 5;
	}

	/* Set up basic sectional elements on the page */

	setUpCompElem(){
		console.log("create comp");
		let ginfo = document.querySelector(".game-info");

		let compElem = document.createElement("section");
		compElem.classList.add("companions");
		ginfo.append(compElem);
		console.log(ginfo);
	}

	setUpUpElem() {
		console.log("create upgrade");
		let ginfo = document.querySelector(".game-info");

		let upElem = document.createElement("section");
		upElem.classList.add("upgrades");
		ginfo.append(upElem);
	}

	setUpStatElem() {
		console.log("create stats");
		let ginfo = document.querySelector(".game-info");

		let statElem = document.createElement("section");
		statElem.classList.add("stats");
		ginfo.append(statElem);
	}

	setUpStats() {
		let statElem = document.querySelector(".stats")

		let statAreaElem = document.createElement("div");
		statAreaElem.classList.add("stat-area");

		let pStatAreaElem = document.createElement("div");
		pStatAreaElem.classList.add("player-stats");
		pStatAreaElem.innerHTML = "Your Stats";

		statAreaElem.append(pStatAreaElem);
		statElem.append(statAreaElem);
	}

	setUpHeader() {
		console.log("create head");
		let ginfo = document.querySelector(".game-info");

		let headBlock = document.createElement("div");
		headBlock.classList.add("heading");

		let title = document.createElement("div");
		title.classList.add("title");
		title.innerHTML = "J.A.C";
		//Max phone width
		if (document.body.clientWidth >= 768) {
			title.innerHTML = "Just Another Clicker";
		}

		headBlock.append(title);

		let monHand = document.createElement("div");
		monHand.classList.add("money-hand");
		monHand.innerHTML = this.statsManager.moneyHand + "gp";
		headBlock.append(monHand);

		ginfo.append(headBlock);
	}

	setUpFight() {
		console.log("create fight");
		let ginfo = document.querySelector(".game-info");
		let fight = document.createElement("div");
		fight.classList.add("fight");

		ginfo.append(fight);
	}

	setUpArena() {
		let fightBlock = document.querySelector(".fight");
		let fightArena = document.createElement("div");
		fightArena.classList.add("arena");

		fightArena.addEventListener('click', () => {
			let enemy = this.enemyManager.currentEnemy;
			if (enemy !== null) {
				this.genDmgBox(this.clickAtk, "clicker");
				this.enemyManager.currentEnemy.health -= this.clickAtk;
				this.statsManager.dmgDealt += this.clickAtk;
				this.enemyManager.enemyCheck();
			}
		});

		fightBlock.append(fightArena);
	}

	setUpFighters() {
		let fightArena = document.querySelector(".arena");
		let heroPosition = this.heroManager.getHeroDomElement();
		fightArena.append(heroPosition);

		let enemyPosition = this.enemyManager.getEnemyPositionElement();
		fightArena.insertBefore(enemyPosition, heroPosition.nextSibling);

		let companionElements = this.heroManager.getCompanionDomElements();
		companionElements.forEach(function(ele) {
			fightArena.insertBefore(ele, enemyPosition.nextSibling);
		})
	}

	setUpEnemyHealth() {
		let fightHeadBlock = document.querySelector(".heading");
		let enemyHealthBar = this.enemyManager.getEnemyHealthBar();
		fightHeadBlock.append(enemyHealthBar);	
	}

	//Choose order in which to render everything based on window size
	render() {
		if (document.body.clientWidth < 768) {
			this.setUpHeader();
			this.setUpEnemyHealth();
			this.setUpFight();
			this.setUpCompElem();
			this.setUpUpElem();
			this.setUpStatElem();
		}
		else if (document.body.clientWidth < 1024) {
			this.setUpHeader();
			this.setUpEnemyHealth();
			this.setUpCompElem();
			this.setUpUpElem();
			this.setUpFight();
			this.setUpStatElem();
		}
		else {
			let ginfo = document.querySelector(".game-info");
			let wrapper = document.createElement("div");
			wrapper.classList.add("wrapper");

			this.setUpHeader();
			this.setUpEnemyHealth();
			this.setUpCompElem();
			this.setUpUpElem();
			this.setUpStatElem();

			let companions = document.querySelector(".companions");
			companions.parentNode.removeChild(companions);
			wrapper.append(companions);

			let upgrades = document.querySelector(".upgrades");
			upgrades.parentNode.removeChild(upgrades);
			wrapper.append(upgrades);

			let stats = document.querySelector(".stats");
			stats.parentNode.removeChild(stats);
			wrapper.append(stats);

			ginfo.append(wrapper);
			
			this.setUpFight();
		}

	}

	//Creates a damage box to give feedback on damage being done to an enemy
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

	//Plays the game
	play() {
		this.enemyManager.currentEnemy = this.enemyManager.randomSpawn();
		this.setUpArena();
		this.setUpFighters();
		this.setUpStats();
		this.heroManager.playerHero.createHeroCard();
		this.heroManager.playerInterval = this.heroManager.attackEnemy(this.heroManager.playerHero);
		this.heroManager.getBuyCompanionCards();
		this.upgradesManager.createUpgradeCard();
		let healthBar = document.querySelector(".health-bar");
		healthBar.setAttribute("data-label", this.enemyManager.currentEnemy.name);
	}
}

let land = new Landing();
let gm = new GameManager();
land.gmObj = gm;

land.titleScreen();