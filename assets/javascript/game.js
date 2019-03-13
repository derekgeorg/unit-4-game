//Variables that set the initial state of our CrystalsCollector game.

// var blueCrystalValue
// var greenCrystalValue
// var redCrystalValue
// var yellowCrystalValue
// var compMin = 19
// var compMax = 120
// var crystalValueMin = 1
// var crystalValueMax = 12
var wins = 0;
var losses = 0;
var computerScore = 0;
var yourScore = 0;
//Here we generate a random number for computerScore
$(document).ready(function () {


    //Each game
    function setUp() {
        //Randomly select a "computerScore" between 19-120.
        computerScore = Math.floor(Math.random() * 120) + 19;
        console.log(computerScore);
        //Display random "computerScore" under Computer Score card.
        $("#computerScore").text(computerScore);
        console.log($("#computerScore"))
        //Randomly assign a value between 1-12 to each crystal: #blueCrystal, #greenCrystal, #redCrystal, #yellowCrystal
        $("#blueCrystal").val(Math.floor(Math.random() * 12) + 1);
        console.log($("#blueCrystal").val())
        $("#greenCrystal").val(Math.floor(Math.random() * 12) + 1);
        console.log($("#greenCrystal").val())
        $("#redCrystal").val(Math.floor(Math.random() * 12) + 1);
        console.log($("#redCrystal").val())
        $("#yellowCrystal").val(Math.floor(Math.random() * 12) + 1);
        console.log($("#yellowCrystal").val())
        yourScore = 0;
    }
    setUp();

    //.onClick of each crystal, take value and add to "yourScore" total
    $("img").on("click", function () {
        // yourScore = yourScore + ;
        yourScore = yourScore + $(this).val();
        $("#yourScore").text(yourScore);
        console.log(yourScore);
        //reset after win++ or losses++
        if (yourScore === computerScore) {
            wins++;
            $("#winsCount").text(wins);
            setUp();
        }
        else if (yourScore > computerScore) {
            losses++;
            $("#lossesCount").text(losses);
            setUp();
        }
        //upon reset change "yourCounter" === 0 and generate a new computerScore.
    });
});