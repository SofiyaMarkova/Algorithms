   // Takes in an array that has two sorted subarrays,
//  from [p..q] and [q+1..r], and merges the array
var merge = function(array, p, q, r) {
    // This code has been purposefully obfuscated,
    //  as you'll write it yourself in next challenge.
    var a=[],b=[],c=p,d,e;for(d=0;c<=q;d++,c++){a[d]=array[c];}for(e=0;c<=r;e++,c++){b[e]=array[c];}c=p;for(e=d=0;d<a.length&&e<b.length;){if(a[d]<b[e]){array[c]=a[d];d++;} else {array[c]=b[e]; e++;}c++; }for(;d<a.length;){array[c]=a[d];d++;c++;}for(;e<b.length;){array[c]=b[e];e++;c++;}
};


// Takes in an array and recursively merge sorts it
var mergeSort = function(array, p, r) {
    
    //p: starting index. r: ending index
    //if starting index is less then ending index => not reach end of the array so nothing to compare anymore 
    if(p<r){
        //finding the number of the position midway betweeen starting and ending index
      var x = floor((p+r)/2); 
      
      //first side of array
      mergeSort(array, p, x); //run function mergeSort recursively again by passing array, its starting index, its ending index as the middle index found. 
      
      //second side of array
      mergeSort(array, x +1, r); //run function mergeSort recursively send up passing array, x + 1 to move from middle to next to check, and the ending index because that side of the array checking
      
      //pass to function to merge the array to create the final merged to solve
      merge(array, p, x , r);
      
        
    }
    
};


var array = [14, 7, 3, 12, 9, 11, 6, 2];
mergeSort(array, 0, array.length-1);
println("Array after sorting: " + array);
Program.assertEqual(array, [2, 3, 6, 7, 9, 11, 12, 14]);


var array2 = [2, 3, 1, 7];
mergeSort(array2, 0, array2.length-1);
println("Array after sorting: " + array2);
Program.assertEqual(array2, [1,2,3,7]);
