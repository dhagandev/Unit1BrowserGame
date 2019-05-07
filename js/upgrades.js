class Upgrades {
	allUpgrades = null;
	gmObject = null;

	constructor(gm) {
		//Determine the best way to store the upgrades
		//That will lead to how to modify elements
		this.gmObject = gm;
		this.allUpgrades = JSON.parse(upgradeList).upgrades;
		console.log(this.allUpgrades);
		this.createUpgradeCard();
	}

	createUpgradeCard() {
		let upgradesSection = document.querySelector(".upgrades");
		for (let i = 0; i < this.allUpgrades.length; i++) {
			let upgradeObj = this.allUpgrades[i];
			let upgradeCard = document.createElement("div");
			upgradeCard.classList.add("upgrade-card");

			let upgradeName = document.createElement("div");
			upgradeName.classList.add("upgrade-name");
			upgradeName.innerHTML = upgradeObj.name;

			let upgradeCost = document.createElement("div");
			upgradeCost.classList.add("upgrade-cost");
			upgradeCost.innerHTML = upgradeObj.cost;

			let upgradeDescription = document.createElement("div");
			upgradeDescription.classList.add("upgrade-description");
			upgradeDescription.innerHTML = upgradeObj.descrip;

			let upgradeButton = document.createElement("div");
			upgradeButton.classList.add("buy-upgrade");
			upgradeButton.innerHTML = "Buy";
			upgradeButton.addEventListener('click', () => {
				this.applyUpgrade(upgradeObj);
				console.log(upgradeObj.name);
			});

			upgradeCard.append(upgradeName);
			upgradeCard.append(upgradeCost);
			upgradeCard.append(upgradeDescription);
			upgradeCard.append(upgradeButton);

			upgradesSection.append(upgradeCard);
		}
	}

	applyUpgrade(upgrade) {
		let stats = this.gmObject.statsManager;
		if (stats.moneyHand - upgrade.cost >= 0 && !upgrade.bought) {
			stats.moneyHand -= upgrade.cost;
			upgrade.bought = true;
			let char = upgrade.charAffected;
			let attr = upgrade.thingAffected;
			let effect = upgrade.effect;

			switch(char) {
				case "Hero":
					let hero = this.gmObject.heroManager.playerHero;
					if (attr === "Attack Strength") {
						hero.atkStr += effect;
					}
					else if (attr === "Attack Speed") {
						hero.atkSpd += effect;
					}
					break;
				
				default:
					break;
			};
		}
	}
}