


// function confirmEnding(str, target) {
// 	// split the string into an array with space delimiter
// 	str = str.split(" ");
// 	// specify the last index of the array
// 	// chain on the substr method and make it negative to make the position count from the end of the...
// 	// ...string and be as long as the target char length is.
// 	strEnd = str[str.length-1].substr(-target.length);
// 	// compare if the extracted string end is equal to the target and return true or false
// 	if (strEnd === target) {
// 		return true;
// 		//console.log(true);
// 	} else {
// 		return false;
// 		//console.log(false);
// 	}
// }
// confirmEnding("Open sesame", "same");



// /* Return an array consisting of the largest number from each provided sub-array. 
// The provided array will contain exactly 4 sub-arrays. Result = [[5], [27], [39], [1001]]
// */
// function largestOfFour(arr) {
// 	//arr.length = 4 iterations in the loop
// 	for(i = 0; i < arr.length; i++){
// 	arr[i].sort(function(a,b) {
// 	// sort from largest to smallest.  largest at index 0
// 	return b - a;
// 	});
// 	// resave arr with only index 0 of inner array
// 	arr[i] = arr[i][0];
// 	}  	
//  	console.log(arr);
//   //return arr;
// }
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);




// function titleCase(str) {
// 	// lowercase all string letters and split into an array of words
// 	str = str.toLowerCase().split(" ");

// 	// for loop to iterate through the array based on it's index length
// 	for (i = 0; i < str.length; i++) {
// 		// iterate through each index of array,
// 		// upperCase the index 0 character of the current string
// 		// extract from index 1 to the end of the string and concat it 
// 		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
// 	} //end of for loop
	
// 	// return str and join the array back into a sentence with spaces between words
// 	console.log(str.join(" "));
//   //return str.join(" ");
// }
// titleCase("I'm a little tea pot");


	//var caseRegEx = str.toLowerCase().replace(regEx, '');

// function findLongestWord(str) {
// 	str = str.split(" ");
// 	var wordArray = [];

// 	for (var i = 0; i < str.length; i++) {
//  	wordArray[i] = str[i].length;
// 	}  //end of for loop

// 	wordArray.sort(function(a,b) {
	// 	return a - b;
// });
// 	console.log(wordArray[wordArray.length - 1]);
// }

// findLongestWord("The quick brown fox jumped over the lazy dog");




// var str = "moNk";
// var splitArray = [];

// splitArray = str.split("");
// console.log(splitArray);

// var revArray = splitArray.reverse();
// console.log(revArray);

// var joinArray = revArray.join("");
// console.log(joinArray);

//console.log(`\n\n ${splitArray} \n`);



// function palindrome(str) {
//   	// Create variable of regExp to remove unwanted characters: /[pattern]/flag;
//   	// \W matches any non-word char. Underscore matches _
//   	// g is global match & finds all matches rather than stopping after first match.
//   	var regEx = /[\W_]/g;
//   	// set new str to lowercase & replace matched characters from regEx with a blank.
//  	var caseRegEx = str.toLowerCase().replace(regEx, '');
//  	// split caseRegEx characters into an array
//  	// take split array and reverse it
//  	// take reversed array and join it back into a string of characters
// 	var newString = caseRegEx.split("").reverse().join("");
// 	// Return true if string is a palindrome; otherwise return false
// 	if (caseRegEx == newString) {
// 		console.log(true);
// 	} else {
// 		console.log(false);
// 	}
// } // end of function palindrome
// palindrome("eye");



// function myReplace(str, before, after) {
// //Create a regular expression object
//   var re = new RegExp(before,"gi");
// //Check whether the first letter is uppercase or not
//   if(/[^A-Za-z0-9]/g.test(before[0])){
//   //Change the word to be de-capitalized
//     after = after.charAt(0).toLowerCase()+after.slice(1);
//      }
//      //Replace the original word with new one
//   var  newStr =  str.replace(re,after);

//  console.log(newStr);
// }

// // test here
// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

//   /\D+/ will match abc from 123abc
//   /\S*/ matches a single char other than white space. EX: the 'foo' in 'foo bar'