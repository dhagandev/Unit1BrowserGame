class Companion extends Hero {
	quantity = 0;
	costToBuy = 0;

	constructor(name, image, atkStr, atkSpd, quantity, costToBuy) {
		super(name, image, atkStr, atkSpd);
		this.quantity = quantity;
		this.costToBuy = costToBuy;
	}

	createCompanionCard() {
		let companionSection = document.querySelector(".companions");
		let companionCard = document.createElement("div");
		companionCard.classList.add("companion-card");

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
		switch (this.name) {
			case "Fellow Adventurer":
				companionImg.classList.add("fellowAdv");
				break;
			default:
				break;
		};
		companionImg.src = this.image;
		companionImg.setAttribute("alt", this.name + "\'s image");

		companionCard.append(companionName);
		companionCard.append(companionDamage);
		companionCard.append(companionQuantity);
		companionCard.append(companionImg);
		companionSection.append(companionCard);
	}

	attack() {
		//Override to be quantity x attack str
	}

	costToBuy1() {
		//How can I get money from gameplay > stats tp see if I can afford it
		let totalPrice = 1 * this.costToBuy;
		quantity += 1
	}

	costToBuy10() {
		//How can I get money from gameplay > stats tp see if I can afford it
		let totalPrice = 10 * this.costToBuy;
		quantity += 10;
	}

	costToBuy100() {
		//How can I get money from gameplay > stats tp see if I can afford it
		let totalPrice = 100 * this.costToBuy;
		quantity += 100;
	}

	costToBuyMax() {
		//How can I get money from gameplay > stats to determine max
		let max = 0;
		let totalPrice = max * this.costToBuy;
		quantity += max;
	}
}