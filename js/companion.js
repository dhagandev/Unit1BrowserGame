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

	//Creates the DOM element for companion cards, including the event clicker to switch between the info screen and buy screen
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

	//Creates the buy screen section where the user can buy more companions; also sets up the companion image to return to the info screen.
	buyScreen(grid) {
		let gridSave = grid;
		let gridParent = grid.parentNode;
		gridParent.removeChild(grid);
		let buyGrid = document.createElement("div");
		buyGrid.classList.add("buy-grid");

		let companionImg = gridParent.firstChild;
		companionImg.addEventListener('click', function() {
			if (buyGrid.parentNode === gridParent) {
				gridParent.removeChild(buyGrid);
				gridParent.insertBefore(gridSave, gridParent.firstChild);
			}
		});

		let statsMan = this.gmObject.statsManager;
		let max = Math.floor(statsMan.moneyHand / this.costToBuy);
		let totalPrice = max * this.costToBuy;

		let buy1Button = document.createElement("div");
		buy1Button.classList.add("buy1");
		buy1Button.classList.add("b-btn");
		buy1Button.innerHTML = "+1 = " + (1 * this.costToBuy);
		buy1Button.addEventListener('click', () => {
			this.costToBuy1(gridSave, buyGrid);
		});
		buyGrid.append(buy1Button);

		let buy10Button = document.createElement("div");
		buy10Button.classList.add("buy10");
		buy10Button.classList.add("b-btn");
		buy10Button.innerHTML = "+10 = " + (10 * this.costToBuy);
		buy10Button.addEventListener('click', () => {
			this.costToBuy10(gridSave, buyGrid);
		});
		buyGrid.append(buy10Button);

		let buy100Button = document.createElement("div");
		buy100Button.classList.add("buy100");
		buy100Button.classList.add("b-btn");
		buy100Button.innerHTML = "+100 = " + (100 * this.costToBuy);
		buy100Button.addEventListener('click', () => {
			this.costToBuy100(gridSave, buyGrid);
		});
		buyGrid.append(buy100Button);

		let buyMaxButton = document.createElement("div");
		buyMaxButton.classList.add("buy-max");
		buyMaxButton.classList.add("b-btn");
		buyMaxButton.innerHTML = "+" + max + " = " + totalPrice;
		buyMaxButton.addEventListener('click', () => {
			this.costToBuyMax(gridSave, buyGrid);
		});
		buyGrid.append(buyMaxButton);

		gridParent.append(buyGrid);

	}

	/* Next few functions are how to buy multiple companions. All except max could be consolidated to one function at a later point.*/

	costToBuy1(gridSave, buyGrid) {
		let totalPrice = 1 * this.costToBuy;
		let statsMan = this.gmObject.statsManager;
		if (totalPrice <= statsMan.moneyHand) {
			this.quantity += 1;
			statsMan.moneyHand -= totalPrice;
			let monHand = document.querySelector(".money-hand");
			monHand.innerHTML = statsMan.moneyHand + "gp";

			let parent = buyGrid.parentNode;
			parent.removeChild(buyGrid);
			parent.insertBefore(gridSave, parent.firstChild);

			let dmgDiv = gridSave.children[1];
			let quanDiv = gridSave.children[2];

			quanDiv.innerHTML = this.quantity;
			dmgDiv.innerHTML = (this.atkStr * this.quantity) + "dmg/" + this.atkSpd + "sec";
		}
	}

	costToBuy10(gridSave, buyGrid) {
		let totalPrice = 10 * this.costToBuy;
		let statsMan = this.gmObject.statsManager;
		if (totalPrice <= statsMan.moneyHand) {
			this.quantity += 10;
			statsMan.moneyHand -= totalPrice;
			let monHand = document.querySelector(".money-hand");
			monHand.innerHTML = statsMan.moneyHand + "gp";

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
			monHand.innerHTML = statsMan.moneyHand  + "gp";

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

	//Has to calculate the most companions you can afford and how much that would cost before creating the button and reporting that information
	costToBuyMax(gridSave, buyGrid) {
		let statsMan = this.gmObject.statsManager;
		let max = Math.floor(statsMan.moneyHand / this.costToBuy);
		let totalPrice = max * this.costToBuy;
		if (totalPrice <= statsMan.moneyHand) {
			this.quantity += max;
			statsMan.moneyHand -= totalPrice;
			let monHand = document.querySelector(".money-hand");
			monHand.innerHTML = statsMan.moneyHand + "gp";

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