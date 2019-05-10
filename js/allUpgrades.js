//Designed to easily add new upgrades

let upgradeList = `{
	"upgrades": [
		{
			"name": "Wooden Sword",
			"flavorText": "Here, take this with you!",
			"cost": 20,
			"descrip": "+1 Attack Strength to your hero.",
			"charAffected": "Hero",
			"thingAffected": "Attack Strength",
			"effect": 1,
			"bought": false
		},
		{
			"name": "Basket o Onions",
			"flavorText": "Your breath can kill. Literally.",
			"cost": 50,
			"descrip": "+2 Attack Strength to your hero.",
			"charAffected": "Hero",
			"thingAffected": "Attack Strength",
			"effect": 2,
			"bought": false
		},
		{
			"name": "Bard's Song",
			"flavorText": "The shrill of the bard encourages you to run faster, even if it is just to get away.",
			"cost": 30,
			"descrip": "-0.25 seconds from Attack Speed of your fellow adventurer.",
			"charAffected": "Fellow Adventurer",
			"thingAffected": "Attack Speed",
			"effect": -0.25,
			"bought": false
		}
	]
}`