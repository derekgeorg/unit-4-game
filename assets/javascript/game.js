//Variables that set the initial state of our CrystalsCollector game.
var computerScore
var yourScore
var wins
var losses
var blueCrystalValue
var greenCrystalValue
var redCrystalValue
var yellowCrystalValue
var min = 19
var max = 120
var valueMin = 1
var valueMax = 12

//The gameSetup method is called when the page first loads.
object.onload = function() {
    var compNumber = Math.floor(Math.random() * 120) + 19;
    console.log(compNumber);
}
    //Here we generate a random number for computerScore

//Each game
    //Randomly select a "computerScore" between 19-120.
    //Display random "computerScore" under Computer Score card.
    //Randomly assign a value between 1-12 to each crystal: #blueCrystal, #greenCrystal, #redCrystal, #yellowCrystal

//.onClick of each crystal, take value and add to "yourCounter" total

//if "yourCounter" = "computerScore"; alert: you win! wins++
//else "yourCounter" > "computerScore"; alert: you lose. losses++

//reset after win++ or losses++
//upon reset change "yourCounter" === 0 and generate a new computerScore.