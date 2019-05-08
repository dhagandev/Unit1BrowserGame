class HeroManager {
	playerHero = null;
	playerInterval = null;
	companionTypes = null;
	companionObjects = null;
	companionIntervals = null;
	gmObject = null;

	constructor(gm) {
		this.gmObject = gm;

		let heroAtkStr = 1;
		let heroAtkSpd = 0.5;
		this.playerHero = new Hero("Just Another Hero", "./images/adventurer-idle-2-00.png", heroAtkStr, heroAtkSpd);
		
		this.playerHero.createHeroCard();
		this.playerInterval = this.attackEnemy(this.playerHero);
		
		this.companionTypes = ["Fellow Adventurer"];
		this.companionIntervals = [];
		this.companionObjects = [];

		this.getBuyCompanionCards();
	}

	setUpCompanions() {
		this.companionObjects.forEach((ele) => {
			ele.createCompanionCard();
			let companionInterval = this.attackEnemy(ele);
			this.companionIntervals.push(companionInterval);
		});
	}

	attackEnemy(attacker) {
		return setInterval(() => {
			let atk = attacker.atkStr;
			if (attacker instanceof Companion) {
				atk *= attacker.quantity;
			}
			this.gmObject.enemyManager.currentEnemy.health -= atk;
			this.gmObject.statsManager.dmgDealt += atk;
			this.gmObject.enemyManager.enemyCheck();
		}, attacker.atkSpd * 1000);
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

	getBuyCompanionCards() {
		let companionSection = document.querySelector(".companions");
		for (let i = 0; i < this.companionTypes.length; i++) {

			let tempObj = null;
			switch(this.companionTypes[i]){
				case "Fellow Adventurer":
					tempObj = new FellowAdventurer();
					break;
				default:
					break;
			}

			let buyCard = document.createElement("div");
			buyCard.classList.add("buy-card");

			let buyName = document.createElement("div");
			buyName.classList.add("buy-name");
			buyName.innerHTML = "Buy a " + this.companionTypes[i];

			let buyCost = document.createElement("div");
			buyCost.classList.add("buy-cost");
			let totalCost = tempObj.costToBuy * 3;
			buyCost.innerHTML = totalCost + " gp";

			buyCard.append(buyName);
			buyCard.append(buyCost);

			buyCard.addEventListener('click', () => {
				this.createCompanion(tempObj, totalCost);
			});

			companionSection.append(buyCard);

		}
	}

	createCompanion(type, cost) {
		let stats = this.gmObject.statsManager;
		if (stats.moneyHand - cost >= 0) {
			stats.moneyHand -= cost;
			let monHand = document.querySelector(".money-hand");
			monHand.innerHTML = stats.moneyHand;

			let buyCard = document.querySelector(".buy-card");
			buyCard.parentNode.removeChild(buyCard);
			type.gmObject = this.gmObject;
			this.companionObjects.push(type);
			this.setUpCompanions();

			let fightArena = document.querySelector(".arena");
			let companionElements = this.getCompanionDomElements();
			companionElements.forEach(function(ele) {
				fightArena.append(ele);
			})
		}
	}
}