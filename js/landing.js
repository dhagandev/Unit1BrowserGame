class Landing {
	explainCompanion() {
		let companions = document.querySelector(".companions");

		let companionExplanation = document.createElement("div");
		companionExplanation.classList.add("explain");

		let title = "The Companion Zone";
		let explanation = "In this area of the game you will see your hero and companions. You can have multiple companions, but only one hero. <br/><br/>To buy more companions, click on the area around the companion name. There you will see the option to buy 1, 10, 100, or the max amount of that companion that you can afford at that time. <br/><br/>To return to the companion's stats without buying anything, simply click on the companion's icon!";

		companionExplanation.innerHTML = "<p>" + title + "</p>" + explanation;

		companions.append(companionExplanation);
	}

	explainUpgrade() {
		let upgrade = document.querySelector(".upgrades");

		let upgradeExplanation = document.createElement("div");
		upgradeExplanation.classList.add("explain");

		let title = "The Upgrade Zone";
		let explanation = "Here is where you will buy an and every upgrade you need! Upgrades can apply to your hero or companions. They can be a useful investment as they compound on each other.";

		upgradeExplanation.innerHTML = "<p>" + title + "</p>" + explanation;

		upgrade.append(upgradeExplanation);
	}

	explainStats() {
		let stats = document.querySelector(".stats");

		let statsExplanation = document.createElement("div");
		statsExplanation.classList.add("explain");

		let title = "The Stats Zone";
		let explanation = "All your stats are stored here! From the amount of damage you've done to the upgrades you've bought, you can find it all here.";

		statsExplanation.innerHTML = "<p>" + title + "</p>" + explanation;

		stats.append(statsExplanation);
	}

	explainFight() {
		let fight = document.querySelector(".fight");

		let fightExplanation = document.createElement("div");
		fightExplanation.classList.add("explain");
		fightExplanation.classList.add("fight-explain");

		let title = "The Fight Arena";
		let explanation = "This is where your epic battles will occur! Watch your hero and companions face down fierce monsters and collect coin for their troubles. Is your hero and their party struggling? Why not help them out you benevolent god and click on the arena!";

		fightExplanation.innerHTML = "<p>" + title + "</p>" + explanation;

		let fightWrap = document.createElement("div");
		fightWrap.classList.add("fight-wrap");
		fightWrap.append(fightExplanation);

		fight.append(fightWrap);
	}
}