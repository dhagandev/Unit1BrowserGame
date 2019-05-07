class Stats {
	dmgDealt = null;
	moneyHand = null;
	moneyEarned = null;
	numKilled = null;
	upgradesBought = null;
	achievementsEarned = null;

	constructor () {
		this.dmgDealt = 0;
		this.moneyHand = 0;
		this.moneyEarned = 0;
		this.numKilled = 0;
		this.upgradesBought = [];
		this.achievementsEarned = [];
		this.constructStats();
	}

	constructStats() {
		let pstats = document.querySelector(".player-stats");

		let statsArea = document.querySelector(".stat-area");
		let dmg = document.createElement("div");
		dmg.classList.add("dmg");
		dmg.innerHTML = "Damage Dealt: " + this.dmgDealt;
		statsArea.insertBefore(dmg, pstats.nextSibling);

		let mone = document.createElement("div");
		mone.classList.add("mone");
		mone.innerHTML = "Total Earned: " + this.moneyEarned + " gp";
		statsArea.insertBefore(mone, dmg.nextSibling);

		let numK = document.createElement("div");
		numK.classList.add("numK");
		numK.innerHTML = "Killed: " + this.numKilled;
		statsArea.insertBefore(numK, mone.nextSibling);

		let setUpUpgradeStats = document.createElement("div");
		setUpUpgradeStats.classList.add("upgrade-stats");
		setUpUpgradeStats.innerHTML = "Your Upgrades";
		statsArea.insertBefore(setUpUpgradeStats, numK.nextSibling);
		// let upgradeArea = document.createElement("div");
		// upgradeArea.classList.add("upgrade-stats");
		// statsArea.append(upgradeArea)
	}

	deconstructStats() {
		let dmg = document.querySelector(".dmg");
		dmg.parentNode.removeChild(dmg);

		let mone = document.querySelector(".mone");
		mone.parentNode.removeChild(mone);
		
		let numK = document.querySelector(".numK");
		numK.parentNode.removeChild(numK);

		let setUpUpgradeStats = document.querySelector(".upgrade-stats");
		setUpUpgradeStats.parentNode.removeChild(setUpUpgradeStats);
	}
}
