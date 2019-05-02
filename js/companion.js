import * from 'hero.js'

class Companion extends Hero {
	let quantity = 0;
	let costToBuy = 0;

	constructor(name, image, atkStr, atkSpd, quantity, costToBuy) {
		super(name, image, atkStr, atkSpd);
		this.quantity = quantity;
		this.costToBuy = costToBuy;
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