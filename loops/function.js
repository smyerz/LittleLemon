/*function decloration (does not execute the code)
 DRY:DoNotRepeatYourself
 no defined perameters (function definition)*/
function anyFunctionName(){ }
/*fixed values inside the body of the function
(setting a and b as variables)
var have limitations set values do not change*/
    var a =10;
    var b =20; 
    var c =a+b; 
    console.log(c);

/*set peramiters by passing value to the function making it 
more flexable (cleaner code)
setting a and b as perameters
values passed to the function are called arguments*/
function functionName(a,b){
    console.log(c);
    //call or invoke the function:
functionName(2,2);
functionName(4,4);
/*variables asssigned to values come in the form of (function argumemts)
plug in any numbers, these are like var names 
allowing to set changable values for each function call*/
}
