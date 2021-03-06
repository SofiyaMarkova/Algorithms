var indexOfMinimum = function(array, startIndex) {
    // Set initial values for minValue and minIndex,
    // based on the leftmost entry in the subarray:  
    var minValue = array[startIndex];
    var minIndex = startIndex;

    // Loop over items starting with startIndex, 
    // updating minValue and minIndex as needed:
    
    for(var i  = minIndex+1 ; i<array.length ; i++){
        //start ; go until (i increments so go up and until all array went through) ; increase by
     
     if( array[i] < minValue ){
         
         minIndex = i;
         minValue = array[i];
         
     }
     
        
    }
    
    return minIndex;   
    
    
}; 

var array = [18, 6, 66, 44, 9, 22, 14];   
var index = indexOfMinimum(array, 2);

//  For the test array [18, 6, 66, 44, 9, 22, 14], 
//  the value 9 is the smallest of [..66, 44, 9, 22, 14]
//  Since 9 is at index 4 in the original array, 
//  "index" has value 4
println("The index of the minimum value of the subarray starting at index 2 is " + index + "."  );
Program.assertEqual(index, 4);

Program.assertEqual(indexOfMinimum(array, 0), 1);
//start at index 0 to make subarray from 0 to end. and the smallest in that case is 6 which is AT INDEX 1
Program.assertEqual(indexOfMinimum(array, 5), 6);
//start at index 5 to make subarray from 5 index to end. smallest in that case of those two is 14 which in the full array has index 6
