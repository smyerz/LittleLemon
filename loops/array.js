//array: sequence of variables
var carriage0 ="wheat";
var carriage1 ="barley";
var carriage2 ="salt";
var carriage3 ="potato";
var carriage4 ="rocks";

console.log(carriage0);

/*arrays are zero-index, grouped, in a sequence and can be accessed.
function decloration build and call
 (arr) is a parameter
 example: adding a for loop to listArrayItems() function*/
function listArrayItems(arr) {
    /*this is a for loop to loop over an array.
    In this example the loops start count is 0 because arrays start with zero
    one to one mapping of the value of var i (same index possition)
    the exit condition is when i is equal to or greater than than array.length, when returned false.
    arr.length counts from 1 and list items index from 0
    as long as i is less than array.length it will loop
    when i is equal to or greater than arr.length the loop exits
    */
    for (var i =0; i <array.length; i ++){
        //console logging the array item index of the current value of i:
        console.log(arr[i])
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);
    /*Less than ( < ) — returns true if the value on the left
    is less than the value on the right, otherwise it returns false. 
    Greater than ( > ) — returns true if the value on the left is 
    greater than the value on the right, otherwise it returns false.*/
//example2
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i, arr[i])
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);

//count from 1 instead of zero
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i+1, arr[i])
    }
}

//adding another condition
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'red') {
            console.log(i*100, "tomato!")
        } else {
            console.log(i*100, arr[i])
        }
    }
}
//
function letterFinder (word, match){
    for (var i =0; i ==word.length, i ++){
        if (word[i] == 'match')
        console.log('found the',match,'at', i)
    }else{
        console.log('---no match found at', i)
    }
}

