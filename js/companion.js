class Companion extends Hero {
	quantity = 0;
	costToBuy = 0;
	companionAtkInterval = null;
	gmObject = null;

	constructor(name, image, atkStr, atkSpd, quantity, costToBuy) {
		super(name, image, atkStr, atkSpd);
		this.quantity = quantity;
		this.costToBuy = costToBuy;
	}

	createCompanionCard() {
		let companionSection = document.querySelector(".companions");
		let companionCard = document.createElement("div");
		companionCard.classList.add("companion-card");

		let companionGrid = document.createElement("section");
		companionGrid.classList.add("companion-grid");

		let companionName = document.createElement("div");
		companionName.classList.add("companion-name");
		companionName.innerHTML = this.name;

		let companionQuantity = document.createElement("div");
		companionQuantity.classList.add("companion-quantity");
		companionQuantity.innerHTML = this.quantity;

		let companionDamage = document.createElement("div");
		companionDamage.classList.add("companion-damage");
		companionDamage.innerHTML = this.atkStr + "dmg/" + this.atkSpd + "sec";

		let companionImg = document.createElement("img");
		companionImg.classList.add("companion-img");
		companionImg.src = this.image;
		companionImg.setAttribute("alt", this.name + "\'s image");

		companionGrid.append(companionName);
		companionGrid.append(companionDamage);
		companionGrid.append(companionQuantity);

		companionGrid.addEventListener('click', () => {
			this.buyScreen(companionGrid);
		});

		companionCard.append(companionGrid);
		companionCard.append(companionImg);
		companionSection.append(companionCard);
	}

	buyScreen(grid) {
		let gridSave = grid;
		let gridParent = grid.parentNode;
		gridParent.removeChild(grid);

		//create buttons that call cost to buy functions and display how much it will cost
		let buyGrid = document.createElement("div");
		buyGrid.classList.add("buy-grid");

		let buy1Button = document.createElement("div");
		buy1Button.classList.add("buy1");
		buy1Button.classList.add("btn");
		buy1Button.innerHTML = "Buy 1";
		buy1Button.addEventListener('click', () => {
			this.costToBuy1(gridSave, buyGrid);
		});
		buyGrid.append(buy1Button);

		let buy10Button = document.createElement("div");
		buy10Button.classList.add("buy10");
		buy10Button.classList.add("btn");
		buy10Button.innerHTML = "Buy 10";
		buy10Button.addEventListener('click', () => {
			this.costToBuy10(gridSave, buyGrid);
		});
		buyGrid.append(buy10Button);

		let buy100Button = document.createElement("div");
		buy100Button.classList.add("buy100");
		buy100Button.classList.add("btn");
		buy100Button.innerHTML = "Buy 100";
		buy100Button.addEventListener('click', () => {
			this.costToBuy100(gridSave, buyGrid);
		});
		buyGrid.append(buy100Button);

		let buyMaxButton = document.createElement("div");
		buyMaxButton.classList.add("buy-max");
		buyMaxButton.classList.add("btn");
		buyMaxButton.innerHTML = "Buy Max";
		buyMaxButton.addEventListener('click', () => {
			this.costToBuyMax(gridSave, buyGrid);
		});
		buyGrid.append(buyMaxButton);

		gridParent.append(buyGrid);

	}

	costToBuy1(gridSave, buyGrid) {
		let totalPrice = 1 * this.costToBuy;
		let statsMan = this.gmObject.statsManager;
		if (totalPrice <= statsMan.moneyHand) {
			this.quantity += 1;
			statsMan.moneyHand -= totalPrice;
			let monHand = document.querySelector(".money-hand");
			monHand.innerHTML = statsMan.moneyHand;

			let parent = buyGrid.parentNode;
			parent.removeChild(buyGrid);
			parent.insertBefore(gridSave, parent.firstChild);

			let dmgDiv = gridSave.children[1];
			let quanDiv = gridSave.children[2];

			quanDiv.innerHTML = this.quantity;
			dmgDiv.innerHTML = (this.atkStr * this.quantity) + "dmg/" + this.atkSpd + "sec";

			// let companionQuantity = document.querySelector(".companion-quantity");
			// companionQuantity.innerHTML = this.quantity;
			// let companionDmg = document.querySelector(".companion-damage");
			// let newDmg = this.atkStr * this.quantity;
			// companionDmg.innerHTML = newDmg + "dmg/" + this.atkSpd + "sec";
		}
	}

	costToBuy10(gridSave, buyGrid) {
		let totalPrice = 10 * this.costToBuy;
		let statsMan = this.gmObject.statsManager;
		if (totalPrice <= statsMan.moneyHand) {
			this.quantity += 10;
			statsMan.moneyHand -= totalPrice;
			let monHand = document.querySelector(".money-hand");
			monHand.innerHTML = statsMan.moneyHand;

			let parent = buyGrid.parentNode;
			parent.removeChild(buyGrid);
			parent.insertBefore(gridSave, parent.firstChild);

			let dmgDiv = gridSave.children[1];
			let quanDiv = gridSave.children[2];

			quanDiv.innerHTML = this.quantity;
			dmgDiv.innerHTML = (this.atkStr * this.quantity) + "dmg/" + this.atkSpd + "sec";
		}
	}

	costToBuy100(gridSave, buyGrid) {
		let totalPrice = 100 * this.costToBuy;
		let statsMan = this.gmObject.statsManager;
		if (totalPrice <= statsMan.moneyHand) {
			this.quantity += 100;
			statsMan.moneyHand -= totalPrice;
			let monHand = document.querySelector(".money-hand");
			monHand.innerHTML = statsMan.moneyHand;

			let parent = buyGrid.parentNode;
			parent.removeChild(buyGrid);
			parent.insertBefore(gridSave, parent.firstChild);

			let companionQuantity = document.querySelector(".companion-quantity");
			companionQuantity.innerHTML = this.quantity;
			let companionDmg = document.querySelector(".companion-damage");
			companionDmg.innerHTML = (this.atkStr * this.quantity) + "dmg/" + this.atkSpd + "sec";

			let dmgDiv = gridSave.children[1];
			let quanDiv = gridSave.children[2];

			quanDiv.innerHTML = this.quantity;
			dmgDiv.innerHTML = (this.atkStr * this.quantity) + "dmg/" + this.atkSpd + "sec";
		}
	}

	costToBuyMax(gridSave, buyGrid) {
		let statsMan = this.gmObject.statsManager;
		let max = Math.floor(statsMan.moneyHand / this.costToBuy);
		let totalPrice = max * this.costToBuy;
		if (totalPrice <= statsMan.moneyHand) {
			this.quantity += max;
			statsMan.moneyHand -= totalPrice;
			let monHand = document.querySelector(".money-hand");
			monHand.innerHTML = statsMan.moneyHand;

			let parent = buyGrid.parentNode;
			parent.removeChild(buyGrid);
			parent.insertBefore(gridSave, parent.firstChild);

			let dmgDiv = gridSave.children[1];
			let quanDiv = gridSave.children[2];

			quanDiv.innerHTML = this.quantity;
			dmgDiv.innerHTML = (this.atkStr * this.quantity) + "dmg/" + this.atkSpd + "sec";
		}
	}
}