
// Iteration 1: Names and Input
let hacker1 = "Alice";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Bob";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
	console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
	console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
	console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
// 3.1 Print driver's name in capital letters, separated by space
let driverNameCaps = "";
for (let i = 0; i < hacker1.length; i++) {
	driverNameCaps += hacker1[i].toUpperCase();
	if (i < hacker1.length - 1) driverNameCaps += " ";
}
console.log(driverNameCaps);

// 3.2 Print navigator's name in reverse order
let navigatorNameReverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
	navigatorNameReverse += hacker2[i];
}
console.log(navigatorNameReverse);

// 3.3 Lexicographic order
if (hacker1.localeCompare(hacker2) < 0) {
	console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
	console.log("Yo, the navigator goes first, definitely.");
} else {
	console.log("What?! You both have the same name?");
}
