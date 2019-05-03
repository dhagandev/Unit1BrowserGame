class EnemyManager {
	currentEnemy = null;
	allEnemyTypes = [];

	constructor() {
		this.allEnemyTypes.push("Imposter");
		this.allEnemyTypes.push("Minotaur");
		this.currentEnemy = this.randomSpawn();
		console.log("====");
		console.log(this.currentEnemy);
		console.log(this.allEnemyTypes);
		console.log("====");
	}

	randomSpawn() {
		let index = Math.floor(Math.random() * Math.floor(this.allEnemyTypes.length));
		let type = this.allEnemyTypes[index];
		let spawn = null;
		switch (type) {
			case "Imposter":
				spawn = new Imposter();
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
	}

	updateGameLogic() {
		//Figure out how to and what is best practice for passing up variable changes to stats through game class. I assume it will be getter/setters but other classes need to be flushed out more.
	}

}