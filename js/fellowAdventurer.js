import * from 'companion.js'

class FellowAdventurer extends Companion {
	constructor() {
		let atkStr = 1;
		let atkSpd = 2;
		let cost = 20
		let quantity = 0;
		super("Fellow Adventurer", null, atkStr, atkSpd, quantity, cost);
	}
}