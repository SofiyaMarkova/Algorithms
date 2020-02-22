var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

var selectionSort = function(array) {
    var minIndex = 0;
    //start at minIndex
    var minValue = array[0];
    //that is the value at min index
    for ( var i = 0; i < array.length; i++) {
        swap(array, i, indexOfMinimum(array, i));
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
println("Array after sorting:  " + array);

Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);


var array2 = [1, 3,2,  4, 5, 6, 7];
selectionSort(array2);
Program.assertEqual(array2, [1, 2, 3, 4, 5, 6, 7]);


println("Array after sorting:  " + array2);
