//Using a my_Dictionary function to create a dictionary containg key-value-pairs(KVPs)

function my_Dictionary() {
    var Xmen = {
        Name: "Ororo Munroe", //the key is Name and its value is Ororo Munroe
        Alias: "Storm",
        Powers: "Weather Witch",
        Phrase: "A War of Rain to Quench the Flames!"
    };
    document.getElementById("Dictionary").innerHTML = Xmen.Phrase; //this is calling for the value for the key Phrase
}

function my_Dictionary1() {
    var AlhpaFlight = {
        Name: "Logan",
        Alias: "Weapon X",
        Powers: "Regenerative/Self-Healing",
        Phrase: "Watch it! Bub!" //the key is Phrase and its value is Watch it! Bub!
    };
    delete AlhpaFlight.Phrase; //this is an example of a delete statement that will display undefined as its value
    document.getElementById("Dictionary1").innerHTML = AlhpaFlight.Phrase;
}