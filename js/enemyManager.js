class EnemyManager {
	currentEnemy = null;
	allEnemyTypes = [];
	gmObject = null;

	constructor(gm) {
		this.allEnemyTypes.push("Imposter");
		this.allEnemyTypes.push("Minotaur");
		this.gmObject = gm;
	}

	randomSpawn() {
		let index = Math.floor(Math.random() * this.allEnemyTypes.length);
		let type = this.allEnemyTypes[index];
		let spawn = null;
		switch (type) {
			case "Imposter":
				spawn = new Imposter();
				break;
			case "Minotaur":
				spawn = new Minotaur();
				break;
			default:
				break;
		};
		return spawn;
	}

	enemyCheck() {
		let healthBar = document.querySelector(".health-bar");
		healthBar.setAttribute("value", this.currentEnemy.health);

		let stats = this.gmObject.statsManager;
		stats.deconstructStats();
		stats.constructStats();
		if (this.currentEnemy.health <= 0){
			clearInterval(this.gmObject.heroManager.playerInterval);
			this.destroyEnemy();
			this.updateGameLogic();
			this.respawnEnemy();

			let heroMan = this.gmObject.heroManager;
			heroMan.playerInterval = heroMan.attackEnemy(heroMan.playerHero);
		}
	}

	respawnEnemy() {
		this.currentEnemy = this.randomSpawn();

		let fightHeadBlock = document.querySelector(".heading");
		let enemyHealthBar = this.getEnemyHealthBar();
		fightHeadBlock.append(enemyHealthBar);

		let heroPosition = document.querySelector(".hero-pos");

		let fightArena = document.querySelector(".arena");
		let enemyPosition = this.getEnemyPositionElement();
		fightArena.insertBefore(enemyPosition, heroPosition.nextSibling);

	}

	destroyEnemy() {
		//Destroy enemy on death, determine what to pass to game logic and call update Game Logic accordingly
		//Eventually figure out death animation
		let enemyPosition = document.querySelector(".enemy-pos");
		enemyPosition.parentNode.removeChild(enemyPosition);

		let enemyHealthBar = document.querySelector(".health-bar");
		enemyHealthBar.parentNode.removeChild(enemyHealthBar);

	}

	updateGameLogic() {
		//Figure out how to and what is best practice for passing up variable changes to stats through game class. I assume it will be getter/setters but other classes need to be flushed out more.
		let stats = this.gmObject.statsManager;
		stats.numKilled++;
		stats.moneyHand += this.currentEnemy.coinsDropped;
		stats.moneyEarned += this.currentEnemy.coinsDropped;
		let monHand = document.querySelector(".money-hand");
		monHand.innerHTML = stats.moneyHand + "gp";
		//Should be temp solution to set up game logic. 

	}

	getEnemyPositionElement() {
		let enemyPosition = document.createElement("img");
		enemyPosition.classList.add("enemy-pos");
		if (this.currentEnemy !== null) {
			enemyPosition.src = this.currentEnemy.image;
			enemyPosition.setAttribute("alt", this.currentEnemy.name + "\'s image");
		}
		return enemyPosition;
	}

	getEnemyHealthBar() {
		console.log("enemy health");
		console.log(this.currentEnemy);
		let enemyHealthBar = document.createElement("progress");
		enemyHealthBar.classList.add("health-bar");
		if (this.currentEnemy !== null) {
			console.log("print with name");
			enemyHealthBar.setAttribute("max", this.currentEnemy.health);
			enemyHealthBar.setAttribute("value", this.currentEnemy.health);
			enemyHealthBar.setAttribute("data-label", this.currentEnemy.name);
		}
		else {
			enemyHealthBar.setAttribute("max", 1);
			enemyHealthBar.setAttribute("value", 1);
			enemyHealthBar.setAttribute("data-label", "Enemy's Health");
		}
		return enemyHealthBar;
	}

}