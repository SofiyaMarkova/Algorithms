//just to display
var displayArray = function(array) {
    textFont(createFont("monospace"), 12);
    println(array);
    
};

//swap function. saves the less, changes to the other, move the less into next
var swap = function(array, firstIndex, secondIndex) {
    /*temp to save*/
    var temp = array[firstIndex];
    /*swap so firstIndex is now secondIndex*/
    array[firstIndex] = array[secondIndex];
    /*secondIndex set to what was in temp so "switched places"*/
    array[secondIndex] = temp;
};

//checks for which element is less value and in which position
var indexOfMinimum = function(array, startIndex) {
/*to start set them*/
    var minValue = array[startIndex];
    var minIndex = startIndex;

/*searching for minValue so keep the index of min value to use*/
    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

//function to do actual sort. keep going and using swap function and indexOfMinimum to keep looking
var selectionSort = function(array) {
    var minIndex = 0;
    //start at minIndex
    var minValue = array[0];
    //that is the value at min index
    for ( var i = 0; i < array.length; i++) {
        swap(array, i, indexOfMinimum(array, i));
        displayArray(array);

    }
};


//trying different arrays
var array = [8, 7 , 6, 1, 4, 5];
displayArray(array);
selectionSort(array);


var array2 = [10, 2, 5, 6, 7, 2];
displayArray(array2);
selectionSort(array2);

var array3 = [5, 6, 2, 6, 1, 0];
displayArray(array3);
selectionSort(array3);

var array4 = [1, 2];
displayArray(array4);
selectionSort(array4);
