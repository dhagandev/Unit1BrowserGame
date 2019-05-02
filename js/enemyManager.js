import * from 'imposter.js'
import * from 'minotaur.js'

class EnemyManager {
	let currentEnemy = null;
	let allEnemyTypes = [];

	constructor() {
		this.allEnemyTypes.push("Imposter");
		this.allEnemyTypes.push("Minotaur");
		this.currentEnemy = randomSpawn();
	}

	randomSpawn() {
		let index = Math.getRandomInt(this.allEnemyTypes.length);
		let type = allEnemyTypes[index];
		let spawn = null;
		switch (type) {
			case "Imposter":
				spawn = new Imposter();
			case "Minotaur":
				spawn = new Minotaur();
				break;
			case default:
				break;
		};
	}

	destroyEnemy() {
		//Destroy enemy on death, determine what to pass to game logic and call update Game Logic accordingly
	}

	updateGameLogic() {
		//Figure out how to and what is best practice for passing up variable changes to stats through game class. I assume it will be getter/setters but other classes need to be flushed out more.
	}

}