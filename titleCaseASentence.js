function titleCase(str) {
	// lowercase all string letters and split into an array of words
	str = str.toLowerCase().split(" ");

	// for loop to iterate through the array based on it's index length
	for (i = 0; i < str.length; i++) {
		// iterate through each index of array,
		// upperCase the index 0 char of the current string,
		// extract chars starting at index 1 to the end of the string and concat it
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	} //end of for loop
	
	// return str and join the array back into a sentence with spaces between words
	console.log(str.join(" "));
	//return str.join(" ");
}

titleCase("I'm a little tea pot");