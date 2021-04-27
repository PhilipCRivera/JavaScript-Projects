function My_First_Function() {
var str ="Don't you just love the color orange?" ; // the variable str will display this text
var result = str.fontcolor("orange");// the font color will be orange
document.getElementById("Orange_Text").innerHTML= result;// the result will dispaly Don't you just love the color orange in orange font
}

function myFunction() {
  var x = document.getElementById("Felipe").id;// this will display Felipe as the id
  document.getElementById("demo").innerHTML = x;// the value of demo will equal what x is 
}
 function myFunction2() {
     var sentence = "Long, long ago the Four Kingdoms lived in harmony,";// this variable is a string
     sentence += "until the Fire Nation came!";// this uses the operator += to continue the string
     document.getElementById("Concatenate").innerHTML = sentence;// this states that the element id Concatenate will display the sentence variable
 }

 function myFunction3() {           // this function will tell us the date and time
var Date = document.getElementById().id;
document.getElementById("time").innerHTML = Date;
}
