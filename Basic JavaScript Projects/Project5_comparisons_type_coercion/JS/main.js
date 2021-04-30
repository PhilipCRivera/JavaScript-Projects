document.write("10" + 5); //this type coercion will take 5 and add it to the string 10 displaying 105

document.write("Bulbasaur, I choose You!"); // this type of Operator will display the string

document.write(72 + 28); // this type of Operator will display the output number- 

function my_Function() {
    document.getElementById("Test").innerHTML = isNaN('this is a string!');
}

document.write(2E310); //this will display infinity

document.write(-3E310); // this will display -infinity

document.write(200>199); //this statement is true

document.write(200<199); //this statement is false

console.log(235<65);// this is displaying a false in the console within my browser

document.write(25==25);// this comparison is true

document.write(25==45);//this comparison is false

x = 55
y = 55
document.write(x===y); //this is true bc the data and value are the same

x = 15
y = "fifteen"
document.write(x===y);// this is false because they're two different value types

x = 12
y = "red"
document.write(x===y); //this is false because the data and value are both diffrent types

x = 27
y = 72
document.write(x===y);

document.write(12>10 && 10>2); //AND opperator displaying true

document.write(12>15 && 15>7); // AND operator displaying false

document.write(17>21 || 21>3);//OR opperator displaying true

document.write(15>33 || 33>45); //OR operator displaying false

function not_function() {
    document.getElementById("NOT").innerHTML = !(72>100);// this will display a true because 72 is not greater than 100
}

function not_Function() {
    document.getElementById("NOT").innerHTML = !(33>25);//this will display a false because 33 is greater than 25
}