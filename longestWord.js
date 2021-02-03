/* Return the length of the longest word in the provided sentence.
Your response should be a number.
*/
function findLongestWord(str) {
	str = str.split(" ");
	var wordArray = [];

	for (var i = 0; i < str.length; i++) {
 		wordArray[i] = str[i].length;
	}  //end of for loop

	wordArray.sort(function(a,b) {
		return a - b;
	});
	// return wordArray[wordArray.length - 1];
	console.log(wordArray[wordArray.length - 1]);
}

findLongestWord("What if we try a super-long word such as otorhinolaryngology");