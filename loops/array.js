/*array literal syntax: 
a square bracket [a collection of items goes inside] java assigns each a
number starting with 0 (zero-index)
example: sequence of variables*/
var carriage0 ="wheat";
var carriage1 ="barley";
var carriage2 ="salt";
var carriage3 ="potato";
var carriage4 ="rocks";
//output wheat
console.log(carriage0);
/*example: assign collection to train1 var*/
var train1 =["wheat",'barley',"salt","potato","salt","rocks"];
//output wheat
console.log(train1[0])
/*arrays are zero-index, grouped, in a sequence and can be accessed.
function decloration build and call
functions that can accept an array and iterate through it
(arr) is a parameter*/
function functionName(arr) {
    /*this is a for loop to loop over an array.
    In this example the loops start count is 0 
    because arrays start with zero
    one to one mapping of the value of var i (same index possition)
    the exit condition is when i is equal to or greater than
    than array.length, when returned false.
    arr.length counts from 1 and list items index from 0
    as long as i is less than array.length it will loop
    when i is equal to or greater than arr.length the loop exits
    example: adding a for loop to listArrayItems() function
    FOR LOOP NEEDS 
    the starting loop counter value as a temporary variable i 
    the exit condition 
    the maximum value of the loop counter variable i, 
        (above which the loop no longer runs) 
    how to update the value of i after each loop*/
    for (var i =0; i <array.length; i ++){
        /*console logging the array item index of the current value of i 
        without a number in front*/
        console.log(arr[i])
    }
}
    /*Less than ( < ) — returns true if the value on the left
    is less than the value on the right, otherwise it returns false. 
    Greater than ( > ) — returns true if the value on the left is 
    greater than the value on the right, otherwise it returns false.*/
function listArrayItems(arr) {
    for (var i = 0; i <arr.length; i ++) {
        /*console logging the array item index of the current value of i 
        with a number in front*/
        console.log(i, arr[i])
    }
}
//array counting from 0
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);

//count from 1 instead of 0
var colors2 = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
function listArrayItems2(arr) {
    for (var i = 0; i <arr.length; i ++) {
        console.log(i +1, arr[i])
    }
}
listArrayItems2(colors2);
//count by 100
var colors3 = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
function listArrayItems3(arr) {
    for (var i = 0; i <arr.length; i ++) {
        console.log(i *100, arr[i])
    }
}
listArrayItems3(colors3);
//by 1000 with a string of words
var colors4 = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
function listArrayItems4(arr){
    for (var i =0; i <arr.length; i ++) {
        if (arr[i] == 'red'){
            console.log(i *1000, "string of words!")
        } else {
            console.log(i*1000, arr[i])
        }
    }
}
listArrayItems4(colors4)
//
function letterFinder (word, match){
    for (var i =0; i <word.length; i ++){
        if (word[i] ==match){
            console.log('found the',match,'at', i)
        } else {
        console.log('---no match found at', i)
        }
    }
}
letterFinder("test", "t")


