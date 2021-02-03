/* Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods 
instead. */

function confirmEnding(str, target) {
	// split the string into an array with space delimiter
	str = str.split(" ");
	// specify the last index of the array
	// chain on the substr method and make it negative to make the position count from the end of the...
	// ...string and be as long as the target char length is.
	strEnd = str[str.length-1].substr(-target.length);
	// compare if the extracted string end is equal to the target and return true or false
	if (strEnd === target) {
		return true;
		//console.log(true);
	} else {
		return false;
		//console.log(false);
	}
}

confirmEnding("Open sesame", "same");

/* 
confirmEnding("Bastian", "n") should return true.
confirmEnding("Connor", "n") should return false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
confirmEnding("He has to give me a new name", "name") should return true.
confirmEnding("Open sesame", "same") should return true.
confirmEnding("Open sesame", "pen") should return false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
Do not use the built-in method .endsWith() to solve the challenge.
*/

/*	
// substring() and substr() differences

	// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18
	// A p p l e ,   B a n a  n  a  ,     K  i  w  i

// similar to slice but cannot accept negative indexes
// if 2nd parameter is omitted then the rest of the string will be sliced out
var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);
console.log(res); // Banana

var str = "Apple, Banana, Kiwi";
var res = str.substring(7);
console.log(res); // Banana, Kiwi

// similar to slice except the 2nd paramater is the length of the exact part
// if 1st parameter is negative then the position counts from the end of the string
// if 2nd parameter is omitted then the rest of the string will be sliced out
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);
console.log(res); // Banana

var str = "Apple, Banana, Kiwi";
var res = str.substr(-7);
console.log(res); // a, Kiwi

*/