//Ternary Operators Constructures

function Ride_Function() { //This Ride_Function will let you know if you have the right height requirement for this ride
    var Height, Can_Ride;
    Height = document.getElementById("Height") .value;
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}

function Voter_Function() { //this Voter_Function will let you know if you're old enough to vote
    var age, Can_Vote;
    age = document.getElementById("age") .value;
    Can_Vote = (age < 18) ? "You are too young to vote": "You are old enough to vote";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote.";
}

 function Vehicle(Make, Model, Year, Color) {// the function Vehicle will show the make, model, year, and color
     this.Vehicle_Make = Make; //a constructor function that uses the "this" keyword
     this.Vehicle_Model = Model;
     this.Vehicle_Year = Year;
     this.Vehicle_Color = Color;
 }
 var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");// a constructor function that uses the "new" keyword
 var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White");
 var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
 function myFunction() {
    document.getElementById("New_and_This").innerHTML = "Erik drives a " + Erik.Vehicle_Color + // this will shos Erik's make, model, year and color os his car
    "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
 }

function count_Function() { //this count_Function will have a start point of 9 and will add 1 to that start point
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}