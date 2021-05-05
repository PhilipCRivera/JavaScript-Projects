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