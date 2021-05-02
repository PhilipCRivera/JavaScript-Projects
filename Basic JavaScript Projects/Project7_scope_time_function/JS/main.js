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

function get_Date() { //this if statement will display "How are you today?" if it meets the right requirments
    if (new Date().getHours()< 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function Age_Function() { //this else statment will help determine if you are old enought to vote
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Badges_Function() { //This is an else statement
    Badges = document.getElementById("Badges").value;
    if (Badges >= 8) { // if you have 8 badges or more it will display the message below
        Elite = "You are ready to face the Elite Four!";
    }
    else { //if we dont meet the if requirement than the else statement will display the message below
        Elite = "You are not ready to face the Elite FOur!";
    }
    document.getElementById("How_many_gym_badges_do_you_have?").innerHTML = Elite;
}

function Time_function() { //This Time_function() will use the computers clock to tell you whether its morning, afternoon, or evening time
    var Time = new Date().getHours();
    var Reply;
    if(Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}