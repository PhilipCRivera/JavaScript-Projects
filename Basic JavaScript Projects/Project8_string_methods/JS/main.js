function full_Sentence() { //this is a concat() method that will connect these strongs together
    var part_1 = "There are few ";
    var part_2 = "who deny in what ";
    var part_3 = "I do, I am the best! For my talents ";
    var part_4 = " are renown far and wide!";
    var Whole_sentence = part_1.concat(part_2,part_3,part_4);
    document.getElementById("Concatenate").innerHTML= Whole_sentence;
}

function slice_Method() { //this slice() method will display the letters at the 18 through 22 mark
    var Sentence = "It must have been love, but it's over now!";
    var Section = Sentence.slice(18,22);
    document.getElementById("Slice").innerHTML = Section;
}

function toUpperCase_Method() { //this will turn all the letters into Upper case letters bbn <M?>,m?>
    var str = "we didn't start the fire!";
    var string = str.toUpperCase();
    document.write(string);
}

function search_Method() { //this will find the word yellow and display its position 
    var str = "Will the owner of a yellow Corvette report to the main lobby, thank you!";
    var n = str.search("yellow");
    document.getElementById("search").innerHTML = n;
}

function string_Method() { // this will display 1987
    var X = 1987;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precission_Method() {
    var X = 3567.08236518;
    document.getElementById("Precission").innerHTML = X.toPrecision(10);
}

function toFixed_Method() { //toFixed_Method will display num as 867.531
    var num = 867.5309;
    var n = num.toFixed(3);
    document.getElementById("fixed").innerHTML = n; 
}

function valueOf_Method() { // the valueOf_Method will display the string 
    var str = "Howdy Y'all!";
    var res = str.valueOf();
    document.getElementById("value").innerHTML = res;
}