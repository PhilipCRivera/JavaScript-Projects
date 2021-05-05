function Call_Loop() { //this while loop will count and display the numbers 1 to 19
    var Digit = "";
    var Y = 1;
    while (Y <20) {
        Digit +="<br>" + Y;
        Y++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function String() { //this function will return the number of characters in the string
    var str = "Hello my baby, hello my darling, hello my ragtime doll!";
    var n = str.length;
    document.getElementById("string").innerHTML = n;
}

var Instruments = ["Guitar", "Flute", "Drums", "Piano", "Bass", "Violin", "Trumpet"];
var Content = "";
var X;
function for_Loop() {
    for (X = 0; X < Instruments.length; X++) {
        Content += Instruments[X] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() { //this array function shows how we can assign one variable with different outcomes without have to assign each a new variable
    var Storm_Powers = [];
    Storm_Powers [0] = "lightning Bolts";
    Storm_Powers [1] = "typhoons";
    Storm_Powers [2] = "blizzards";
    Storm_Powers [3] = "tidal waves";
    document.getElementById("Array").innerHTML = "In this picture, Storm is using her mutant ability to create " + Storm_Powers[3] + "!";
}

function constant_function() {
    const Video_Game_Console = {type:"The Switch", brand:"Nintendo", color:" black with blue and red controllers"};
    Video_Game_Console.color = "pink";
    Video_Game_Console.price = "600";
    document.getElementById("Constant").innerHTML = "The color of the " + Video_Game_Console.type + " was " + Video_Game_Console.color;
}

var  X = 82;
document.write(X); // This is an example of a Let Keyword where the output of this code would be: 82, 33 ,82
{
    let X = 33; 
    document.write("<br>" + X);
}
document.write("<br>" + X);

// But if we wrote it as follows:

var  X = 82;
document.write(X);
{
    var X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X); // the Output would be: 82, 33, 33
// this is because the var keyword cannot have block scope(access limited to inside the block), while the let keyword can.

// Here is an example of creating an object with properties and a method in JavaScript

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "Red ",
    description : function() {
        return "This car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

let clothing = {
    type: "Hoodie ",
    designer: "Fashion Nova ",
    color: "Rainbow ",
    size: "large ",
    description : function() {
        return " My favorite piece of clothing is my " + this.size + this.color + this.type + "from " + this.designer;
    }
};
document.getElementById("Clothing_Object").innerHTML = clothing.description();

// a loop with a break statement

var text = "";
var i;
  for (i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
    }
document.getElementById("break").innerHTML = text;


