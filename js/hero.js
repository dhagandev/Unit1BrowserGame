import * from 'character.js';

class Hero extends Character {
	let atkStr = 0;
	let atkSpd = 0;

	constructor(name, image, atkStr, atkSpd) {
		super(name, image);
		this.atkStr = atkStr;
		this.atkSpd = atkSpd;
	}

	attack() {
		//Determine the amount of damage to caused, pass to game play class to pass to enemy
	}
}