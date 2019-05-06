class HeroManager {
	playerHero = null;
	playerInterval = null;
	companionObjects = null;
	companionIntervals = null;
	gmObject = null;

	constructor(gm) {
		this.gmObject = gm;

		let heroAtkStr = 1;
		let heroAtkSpd = 0.5;
		this.playerHero = new Hero("Just Another Hero", "./images/adventurer-idle-2-00.png", heroAtkStr, heroAtkSpd);
		this.playerHero.createHeroCard();
		console.log(this.gmObject);
		this.playerInterval = this.attackEnemy(this.playerHero);

		this.companionObjects = [/*new FellowAdventurer()*/];
		this.companionObjects.forEach(function(ele) {
			ele.createCompanionCard();
		});
	}

	attackEnemy(attacker) {
		return setInterval(() => {
			console.log("Before e health " + this.gmObject.enemyManager.currentEnemy.health);
			this.gmObject.enemyManager.currentEnemy.health -= attacker.atkStr;
			console.log("After e health " + this.gmObject.enemyManager.currentEnemy.health);
		}, this.playerHero.atkSpd * 1000);
	}

	getHeroDomElement() {
		let heroPosition = document.createElement("img");
		heroPosition.classList.add("hero-pos");
		heroPosition.src = this.playerHero.image;
		return heroPosition;
	}

	getCompanionDomElements() {
		let allElements = [];
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
			allElements.push(companionPosition);
		}
		return allElements;
	}
}