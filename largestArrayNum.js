/* Return an array consisting of the largest number from each provided sub-array. 
The provided array will contain exactly 4 sub-arrays. Result = [[5], [27], [39], [1001]]
*/
function largestOfFour(arr) {
	//arr.length = 4 iterations in the loop
	for(var i = 0; i < arr.length; i++){
	arr[i].sort(function(a,b) {
	// sort from largest to smallest.  largest at index 0
	return b - a;
	});
	// resave arr with only index 0 of inner array
	arr[i] = arr[i][0];
	}  	
 	console.log(arr);
  //return arr;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/*
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) 
	should return an array.
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) 
	should return [27,5,39,1001].
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) 
	should return [9, 35, 97, 1000000]. 
*/