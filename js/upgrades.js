class Upgrades {
	allUpgrades = null;
	gmObject = null;

	constructor(gm) {
		//Determine the best way to store the upgrades
		//That will lead to how to modify elements
		this.gmObject = gm;
		this.allUpgrades = JSON.parse(upgradeList).upgrades;
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
			let monHand = document.querySelector(".money-hand");
			monHand.innerHTML = stats.moneyHand;

			upgrade.bought = true;
			let char = upgrade.charAffected;
			let attr = upgrade.thingAffected;
			let effect = upgrade.effect;

			let companionNameArr = document.getElementsByClassName("companion-name");

			switch(char) {
				case "Hero":
					let heroElem = null;
					for (let i = 0; i < companionNameArr.length; i++) {
						if (companionNameArr[i].innerHTML === "Just Another Hero") {
							heroElem = companionNameArr[i];
							break;
						}
					}

					let heroDmgSec = heroElem.nextSibling;

					let hero = this.gmObject.heroManager.playerHero;
					if (attr === "Attack Strength") {
						hero.atkStr += effect;
					}
					else if (attr === "Attack Speed") {
						hero.atkSpd += effect;
					}

					heroDmgSec.innerHTML = hero.atkStr + "dmg/" + hero.atkSpd + "sec";

					break;
				case "Fellow Adventurer":
					let felAdvCard = null;
					for (let i = 0; i < companionNameArr.length; i++) {
						if (companionNameArr[i].innerHTML === "Fellow Adventurer") {
							felAdvCard = companionNameArr[i];
							break;
						}
					}

					let felAdvDmg = felAdvCard.nextSibling;
					let felAdvObj = null;
					let compObjs = this.gmObject.heroManager.companionObjects;
					for (let i = 0; i < compObjs.length; i++) {
						if (compObjs[i].name === "Fellow Adventurer") {
							felAdvObj = compObjs[i];
							break;
						}
					}

					if (attr === "Attack Strength") {
						felAdvObj.atkStr += effect;
					}
					else if (attr === "Attack Speed") {
						felAdvObj.atkSpd += effect;
					}

					felAdvDmg.innerHTML = felAdvObj.atkStr + "dmg/" + felAdvObj.atkSpd + "sec";

					break;
				default:
					break;
			};

			let upgradeCardArr = document.getElementsByClassName("upgrade-card");
			let upgradeCard = null;
			for (let i = 0; i < upgradeCardArr.length; i++) {
				let cardVal = upgradeCardArr[i].childNodes[0].textContent;
				let upsVal = upgrade.name;
				if (cardVal === upsVal) {
					upgradeCard = upgradeCardArr[i];
					break;
				}
			}

			let upParent = upgradeCard.parentNode;
			upParent.removeChild(upgradeCard);
			if (!upParent.hasChildNodes()) {
				upParent.parentNode.removeChild(upParent);
			}
			let statsArea = document.querySelector(".stat-area");
			statsArea.insertBefore(upgradeCard, statsArea.lastChild.nextSibling);

		}
	}
}