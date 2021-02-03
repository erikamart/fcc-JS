/*Repeat a given string str (first argument) num times (second argument). 
Return an empty string if num is not a positive number.*/

function repeatStringNumTimes(str, num) {
	str = str.split(" ");
	var strArray = [];
	for(i = 0; i < num; i++) {

		strArray[i] = str;

		if(num < 0) {
			strArray = "";
			console.log(strArray);
			//return strArray;
		}
	}
	console.log(strArray.join(""));
	// return strArray.join("");
}

repeatStringNumTimes("*", 3);

/*
repeatStringNumTimes("*", 3) should return "***".
repeatStringNumTimes("abc", 3) should return "abcabcabc".
repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
repeatStringNumTimes("abc", 1) should return "abc".
repeatStringNumTimes("*", 8) should return "********".
repeatStringNumTimes("abc", -2) should return "". 
*/

/*
//FCC SOLUTION
function repeatStringNumTimes(str, num) {
  var accumulatedStr = '';

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }
  return accumulatedStr;
}
repeatStringNumTimes("abc", 3);
*/