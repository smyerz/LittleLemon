//switch statement
var place = 'first';

switch(place) {
    case 'first':
        console.log('gold!');
        break;
    case 'second':
        console.log('silver');
        break;
    case 'third':
        console.log('bronze');
        break;
    default:
        console.log("sorry, you'll get it next time!")
}
/*for loop (self contained)
set the value: var i=0; 
specify the condition: i<3; 
increment the counter: i++;
This code repeats 4 times. count 0,1,2,3,4*/
for (var i =1; i <3; i ++){
    console.log(i);
}
console.log('Go')
//The encrementor specifies with value terminates the loop
for (var i =10; i >0; i --){
    console.log(i)
}
console.log('Happy New Year')
/*while loop
(not self contained)
*/
while (i <4){
    console.log(i);
    i =i+1;
}
/*counter value set before the loop and clearly defined
specify the exit condition 
in the parentheses 
of the loop declaration
*/ 
var counter =3

while (counter >0) {
    console.log(counter);
    counter = counter -1;
}
console.log('Happy New Year')
//years example
var year = 2018;
while (year < 2023) {
    console.log(year);
    year++;
};