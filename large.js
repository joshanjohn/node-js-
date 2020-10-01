var read = require('readline-sync')
var a = read.question('enter first number:')
var b = read.question('enter second number:')
console.log(a , b) 

if (a>b){
    console.log('larger is '+a)
}else if(b>a){
    console.log('larger is '+b)
}else if(a===b){
    console.log(a+'='+b)
}else{
    console.log('invalid')
}

/*using switch
var text;
var fruits = document.getElementById("myInput").value;

switch(fruits) {
  case "Banana":
    text = "Banana is good!";
    break;
  case "Orange":
    text = "I am not a fan of orange.";
    break;
  case "Apple":
    text = "How you like them apples?";
    break;
  default:
    text = "I have never heard of that fruit...";
}
*/
