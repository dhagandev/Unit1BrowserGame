const MILLI = 1000;

class Hero extends Character {
	atkStr = 0;
	atkSpd = 0;
	heroAtkInterval = null;

	constructor(name, image, atkStr, atkSpd) {
		super(name, image);
		this.atkStr = atkStr;
		this.atkSpd = atkSpd;
	}

	createHeroCard() {
		let companionSection = document.querySelector(".companions");
		let companionCard = document.createElement("div");
		companionCard.classList.add("companion-card");

		let companionGrid = document.createElement("section");
		companionGrid.classList.add("companion-grid");

		let companionName = document.createElement("div");
		companionName.classList.add("companion-name");
		companionName.innerHTML = this.name;

		let companionDamage = document.createElement("div");
		companionDamage.classList.add("companion-damage");
		companionDamage.innerHTML = this.atkStr + "dmg/" + this.atkSpd + "sec";

		let companionImg = document.createElement("img");
		companionImg.classList.add("companion-img");
		companionImg.src = this.image;
		companionImg.setAttribute("alt", this.name + "\'s image");

		companionGrid.append(companionName);
		companionGrid.append(companionDamage);
		companionCard.append(companionGrid);
		companionCard.append(companionImg);
		companionSection.append(companionCard);
	}
}