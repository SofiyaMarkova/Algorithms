/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
   var guesses = 1;
   
    
    while (max>=min) {
        
        
        
        guess = Math.floor((max + min) /2);
        
        if (array[guess] === targetValue) {
            
            println(guess);
            
             println(guesses);
            
            /*need in here final answer print because here goes when find the right number searchign for*/
            
            return guess;
        }
        else if (array[guess]<targetValue) {
            min = guess+1;
        }
        else {max = guess-1;}
        
       guesses = guesses + 1;
        
    println(guess);
    
  
}

	return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 73);
println("Found prime at index " + result);

Program.assertEqual(doSearch(primes, 73), 20);
Program.assertEqual(doSearch(primes, 97), 24);
Program.assertEqual(doSearch(primes, 11), 4);
