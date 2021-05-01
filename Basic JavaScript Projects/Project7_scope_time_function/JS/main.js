//Local and Global Variables
var X = 15; // because the variable is outside of the function, it can be read by both functions and returning "50" and "110"
function Add_numbers_1() { //this is an example of a global variable
    document.write(35 + X +"<br>");
}
function Add_numbers_2() {
    document.write(X + 95);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1() { //this is an example of a local variable
    var x = 12;//because the variable is inside the functiion it is only returning "84"
    document.write(72 + x +"<br");
}
function Add_numbers_2() { //this function cannot show a return because the variable x is undefined 
    document.write(x + 28);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() {
    var y = 50;
    console.log(35 + y);
}
function Add_numbers_4() {
    console.log(y + 55); //this console.loge() method will us debug what is wrong with it within the console by using Chrome Dev Tools
}
Add_numbers_1();
Add_numbers_2();