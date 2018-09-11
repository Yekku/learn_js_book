/*
		var scoops = 10;
		while (scoops > 0) {
		document.write("Another scoop!<br>");
		scoops = scoops - 1;
		}
		if (scoops >= 5) {
		alert("Eat faster, the ice cream is going to melt!");
		} else if (scoops < 3) {
		alert("Ice cream is running low!");
		}
		document.write("Life without ice cream isn't the same");
	*/

	/*
		var name = "Joe";
		var i = 0;
		while (i < 2) {
		document.write("Happy Birthday to you.<br>");
		i = i + 1;
		}
		document.write("Happy Birthday dear " + name + ",<br>");
		document.write("Happy Birthday to you.<br>");
	*/

	/*
		var message = "Howdy" + " " + "partner";
		console.log(message);
	*/

	/*
		var word = "bottles";
		var count = 99;
		while (count > 0) {
				console.log(count + " " + "word" + " of beer on the wall");
				console.log(count + " " + "word" + " of beer,");
				console.log("Take one down, pass it around,");
				count = count - 1;
			if (count > 0) {
				console.log(count + " " + word + " of beer on the wall.");
			} else {
				console.log("No more " + word + " of beer on the wall.");
			}
		}
	*/


	/*
	// Test for jokes
		var joke = "JavaScript walked into a bar....";
		var toldJoke = false;
		var $punchline = "Better watch out for those semi-colons.";
		var entage = 20;
		var result;
		if (toldJoke == true) {
		Alert($punchline);
		} else {
		alert(joke);
		}
	*/
// 	function bark(name, weight) {
// if (weight > 20) {
// console.log(name + " says WOOF WOOF");
// } else {
// console.log(name + " says woof woof");
// }
// }
// bark("rover", 23);
// bark("spot", 13);
// bark("spike", 53);
// bark("lady", 17);

// bark("juno", 20);
// bark("scottie", -1);
// bark("dino", 0, 0);
// bark("fido", "20");
// bark("lady", 10);
// bark("bruno", 21);

// function whatShallIWear(temp) {
// 	if (temp < 60) {
// 		console.log("Wear a jacket");
// 	} else if (temp < 70) {
// 		console.log("Wear a sweater");
// 	} else {
// 		console.log("Wear t-shirt");
// 	}
// }
// whatShallIWear(50);
// whatShallIWear(80);
// whatShallIWear(60);

// function doIt(param) {
// param = 2;
// }
// var test = 1;
// doIt(test);
// console.log(test);

// function bake(degrees) {
// var message;
// if (degrees > 500) {
// message = "I'm not a nuclear reactor!";
// } else if (degrees < 100) {
// message = "I'm not a refrigerator!";
// } else {
// message = "That's a very comfortable temperature for me.";
// setMode("bake");
// setTemp(degrees);
// }
// return message;
// }
// var status = bake(350);

// var balance = 10500;
// var cameraOn = true;
// function steal(balance, amount) {
// cameraOn = false;
// if (amount < balance) {
// balance = balance - amount;
// }
// return amount;
// cameraOn = true;
// }
// var amount = steal(balance, 1250);
// alert("Criminal: you stole " + amount + "!");


function makePhrase() {
	var words1 = ["super", "baby", "future", "shop", "online"];
	var words2 = ["windows", "mac", "iphone", "samsung", "nokia"];
	var words3 = ["job", "work", "vocations", "sumer", "see"];

	var rand1 = Math.floor(Math.random() * words1.length);
	var rand2 = Math.floor(Math.random() * words2.length);
	var rand3 = Math.floor(Math.random() * words3.length);

	var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];

	alert(phrase);
}
makePhrase();
makePhrase();
makePhrase();
makePhrase();
makePhrase();











