function addition_Function() { //This is the how to write an addition operation in JavaScript
    var addition = 34 + 35;
    document.getElementById("Math").innerHTML = "34 + 35 = " + addition;
}

function subtraction_Function() { //This is how to write a subtraction operation in JavaScript
    var subtraction = 200 - 100;
    document.getElementById("Nums").innerHTML = "200 - 100 = " + subtraction;
}

function multiplication_Function() { //This is how to write a multiplication operation in JavaScript
    var multiplication = 15 * 12;
    document.getElementById("sum").innerHTML = " 15 x 12 =" + multiplication;
}

function division_Function() { //This is how to write a division operation in JavaScript
    var division = 49 / 7;
    document.getElementById("Numero").innerHTML = "49 / 7 =" + division;
}

function more_Math() { //This is how to write a multiple operation in JavaScript
    var simple_math = ( 12 + 12) * 6 / 3-12;
    document.getElementById("pemdas").innerHTML = " 12 plus 12, multiplied by 6, divided by 3 and then subtracted by 12 equals " + simple_math;
}
function modulus_Operator() {//This is how you find the remainder in JavaScript
    var remainder = 25 % 6;
    document.getElementById("remain").innerHTML = "When you divide 25 by 6 you have a remainder of: " + remainder;
}

function negation_Operator() { //this negation operator will return the opposite of x
    var x = 34;
    document.getElementById("negate").innerHTML = -x;
}

var y = 10; //an increment operator that will increase y by 1
y++;
document.write(y) ;
    
var a = 12; //an decrement operator that will descrea a by 1
a--;
document.write(a) ;

window.alert(Math.random() * 100); //this will select a random number between 0 and 100 and display it as a window alert

