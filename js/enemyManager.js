class EnemyManager {
	currentEnemy = null;
	allEnemyTypes = [];
	gmObject = null;

	constructor(gm) {
		this.allEnemyTypes.push("Imposter");
		this.allEnemyTypes.push("Minotaur");
		this.currentEnemy = this.randomSpawn();
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

	destroyEnemy() {
		//Destroy enemy on death, determine what to pass to game logic and call update Game Logic accordingly
		this.currentEnemy.image = ""; //Eventually figure out death animation
		this.updateGameLogic();
	}

	updateGameLogic() {
		//Figure out how to and what is best practice for passing up variable changes to stats through game class. I assume it will be getter/setters but other classes need to be flushed out more.
		let stats = this.gmObject.statsManager;
		stats.numKilled++;
		stats.moneyHand += this.currentEnemy.coinsDropped;
		stats.moneyEarned += this.currentEnemy.coinsDropped;
		//Should be temp solution to set up game logic. 

	}

	getEnemyPositionElement() {
		let enemyPosition = document.createElement("img");
		enemyPosition.classList.add("enemy-pos");
		enemyPosition.src = this.currentEnemy.image;
		enemyPosition.setAttribute("alt", this.currentEnemy.name + "\'s image");
		return enemyPosition;
	}

	getEnemyHealthBar() {
		let enemyHealthBar = document.createElement("progress");
		enemyHealthBar.classList.add("health-bar");
		enemyHealthBar.setAttribute("max", this.currentEnemy.health);
		enemyHealthBar.setAttribute("value", this.currentEnemy.health);
		return enemyHealthBar;
	}

}