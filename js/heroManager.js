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
		
		this.companionTypes = ["Fellow Adventurer"];
		this.companionIntervals = [];
		this.companionObjects = [];
	}

	setUpCompanions() {
		this.companionObjects.forEach((ele) => {
			ele.createCompanionCard();
			let companionInterval = this.attackEnemy(ele);
			this.companionIntervals.push(companionInterval);
		});
	}

	//Creates the intervals at which the hero/companion will do damage to the enemy
	attackEnemy(attacker) {
		return setInterval(() => {
			let atk = attacker.atkStr;
			let source = "hero";
			if (attacker instanceof Companion) {
				atk *= attacker.quantity;
				source = "companion";
			}
			this.gmObject.genDmgBox(atk, source);
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

	//Create the buy companion cards - user must buy the companion before the companion is a part of their party
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
			buyCost.innerHTML = totalCost + "gp";

			buyCard.append(buyName);
			buyCard.append(buyCost);

			buyCard.addEventListener('click', () => {
				this.createCompanion(tempObj, totalCost);
			});

			companionSection.append(buyCard);

		}
	}

	//Removes the buy card and creates the companion card
	createCompanion(type, cost) {
		let stats = this.gmObject.statsManager;
		if (stats.moneyHand - cost >= 0) {
			stats.moneyHand -= cost;
			let monHand = document.querySelector(".money-hand");
			monHand.innerHTML = stats.moneyHand + "gp";

			let buyCard = document.querySelector(".buy-card");
			buyCard.parentNode.removeChild(buyCard);
			type.gmObject = this.gmObject;
			this.companionObjects.push(type);
			this.setUpCompanions();

			let heroPosition = document.querySelector(".hero-pos");
			let fightArena = document.querySelector(".arena");
			let companionElements = this.getCompanionDomElements();
			companionElements.forEach(function(ele) {
				fightArena.insertBefore(ele, heroPosition.nextSibling);
			})
		}
	}
}