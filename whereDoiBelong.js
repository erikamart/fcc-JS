
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var array = arr;
  arr.sort(function(a,b) {
  	return a - b;
  });

  for (i = 0; i < array.length; i++) {
  	if (array[i] >= num) {
  		var arrayIndex = array.indexOf(array[i]);
  		console.log(arrayIndex);
  	} else {
  		
  	}
  }

  /*var arrayNew = arr.map(function(arrCurrent, index){
  	console.log("  iteration #: " + index);
  	console.log("  element for iteration: " + arrCurrent);

  	if(arrCurrent >= num) {
  		console.log("index is: " index);
  		// break;
  	}
  	
  	return 'X';

  });*/

}

getIndexToIns([2, 5, 10], 15);

/*Tests
getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
getIndexToIns([40, 60], 50) should return 1.
getIndexToIns([3, 10, 5], 3) should return 0.
getIndexToIns([5, 3, 20, 3], 5) should return 2.
getIndexToIns([2, 20, 10], 19) should return 2.
getIndexToIns([2, 5, 10], 15) should return 3. */