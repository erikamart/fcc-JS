/*
Return true if the string in the first element of the array contains all of the letters 
of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the 
second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not 
contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are 
present in "Alien".
*/

function mutation(arr) {
	// create a new variable with each index of the array converted to lowerCase
	var second = arr[1].toLowerCase();
	var first = arr[0].toLowerCase();
	// create a variable that is defaulted to true
	var answer = true;
	// loop through each char of the 2nd string in the array
	for (i = 0; i < second.length; i++) {
		// test each char of the 2nd string against each char of the 1st string
		// .indexOf returns -1 if the value is not found
		// compare if the method result is equal to -1 to return false 
		if (first.indexOf(second[i]) === -1) {
		//if method result is -1 then default is changed from true to false and printed
		answer = false;
		}
	}
	// if method result is anything else but -1 then default of true is printed
	console.log(answer);
	//return answer;
}
mutation(["voodoo", "no"]);

/*
mutation(["hello", "hey"]) should return false.
mutation(["hello", "Hello"]) should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
mutation(["Mary", "Army"]) should return true.
mutation(["Mary", "Aarmy"]) should return true.
mutation(["Alien", "line"]) should return true.
mutation(["floor", "for"]) should return true.
mutation(["hello", "neo"]) should return false.
mutation(["voodoo", "no"]) should return false. 
*/