class Hero extends Character {
	atkStr = 0;
	atkSpd = 0;

	constructor(name, image, atkStr, atkSpd) {
		super(name, image);
		this.atkStr = atkStr;
		this.atkSpd = atkSpd;
		console.log("Hero integrated.");
	}

	attack() {
		//Determine the amount of damage to caused, pass to game play class to pass to enemy
	}
}