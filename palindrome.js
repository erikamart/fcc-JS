/* A palindrome is a series of characters that are the same forwards and backwards 
without special characters, symbols, or blank spaces.  This function is to test if
words or sentences are palindromes. */
 
function palindrome(str) {

  	// Create variable of regExp to remove unwanted characters: /[pattern]/flag;
  	// \W matches any non-word char. Underscore matches _
  	// g is global match & finds all matches rather than stopping after first match.
  	var regEx = /[\W_]/g;
  	// set new str to lowercase & replace matched characters from regEx with a blank.
 	var caseRegEx = str.toLowerCase().replace(regEx, '');

 	// split caseRegEx characters into an array
 	// take split array and reverse it
 	// take reversed array and join it back into a string of characters
	var newString = caseRegEx.split("").reverse().join("");

	// Return true if string is a palindrome; otherwise return false
	if (caseRegEx == newString) {
		return true;
		//console.log(true);
	} else {
		return false;
		//console.log(false);
	}
  
} // end of function palindrome

// test by replacing the string below
palindrome("eye");