/*example for loop (self contained)
set the value: var i=0; 
specify the condition: i<3; 
increment the counter: i++;
This code repeats 4 times. count 0,1,2,3,4*/
for (var i =1; i <4; i ++){
    console.log(i);
}
console.log('Go')
/*The encrementor specifies witch value terminates the loop
 (i is used in common practice, stands for idiom: is a group of code fragments 
    sharing an equivalent semantic role/ idioms. : an expression in the usage of a language
     that is peculiar to itself either in having a meaning that cannot be derived 
     from the conjoined meanings of its elements)
      for loop needs the starting loop counter value as a temporary variable i 
      the exit condition (the maximum value of the loop counter variable i,
         above which the loop no longer runs) 
          how to update the value of i after each loop*/
for (var i =10; i >0; i --){
    console.log(i)
}
console.log('Happy New Year')
//example2
for (var i = 1; i <= 5; i++) {
    console.log(i);
};
console.log('Counting completed!');
//example3
for(var i = 0; i <= 5; i++) {
    console.log("Hello");
  }
//example4
  var i = 3;
  var j = 5;

  if(i == 3 && j < 5) {
    console.log("Hello");
  } else {
    console.log("Goodbye");
  }
//example5
var i = 7;
  var j = 2;

  if(i < 7 || j < 5) {
    console.log("Hello");
  } else {
    console.log("Goodbye");
  }
