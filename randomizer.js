/*  Objective

    Rock Paper Scissors Game:
        User would select from 3 options: Rock, Paper, or Scissors
        Computer would randomly select from 3 options: Rock, Paper, or Scissors

    Calculate who wins:
        Win Condition:
            Rock wins vs Scissors
            Paper wins vs Rock
            Scissors wins vs Paper
    
    Display Score:
        Each round, increase score of winner

    Create a timer:
        user can select from timer options: 30 or 60 seconds per game
        once user select a time, start the game (enable all buttons)
        display timer at the top of the screen counting down
        when timer is done, disable all buttons
        before user selects a time, all buttons should be disabled
    js:
    calculate winner

    when user selects option, computer randomizes option
*/

function RPSfunction(RPS) {                                           // call/get the value assigned to the button and display it
    document.getElementById("playerselected").value = RPS;
    var computerResponse = Math.floor(Math.random() * (3) + 1);       // this gives a random result from 1-3 and eliminate 0 as possibility
    var compSel = document.getElementById("computerselected");
    var rEslt = document.getElementById("result");
    var plyrScre = document.getElementById("playerscore");
    var cmpScre = document.getElementById("computerscore");
    if (computerResponse == 1) {
        compSel.value = "ROCK";
        if (compSel.value == RPS) {                                   // both ROCK = draw
            rEslt.value = "DRAW";
        } else if (RPS == "PAPER") {                                  // computer is ROCK, and player is PAPER
            rEslt.value = "WIN"
            plyrScre.value++
        } else {                                                      // computer is ROCK, and player is SCISSOR
            rEslt.value = "LOSE"
            cmpScre.value++
        }
    } else if (computerResponse == 2) {
        compSel.value = "PAPER";
        if (compSel.value == RPS) {                                   // both PAPER = draw
            rEslt.value = "DRAW";
        } else if (RPS == "SCISSOR") {                                // computer is PAPER, and player is SCISSOR
            rEslt.value = "WIN"
            plyrScre.value++
        } else {                                                      // computer is PAPER, and player is ROCK
            rEslt.value = "LOSE"
            cmpScre.value++
        }
    } else {
        compSel.value = "SCISSOR";
        if (compSel.value == RPS) {                                   // both SCISSOR = draw
            rEslt.value = "DRAW";
        } else if (RPS == "ROCK") {                                   // computer is SCISSOR, and player is ROCK
            rEslt.value = "WIN"
            plyrScre.value++
        } else {                                                      // computer is SCISSOR, and player is PAPER
            rEslt.value = "LOSE"
            cmpScre.value++
        }
    }
}

function Timerfunction(timeSelected) {
    var timeLeft = parseInt(timeSelected);
    var elem = document.getElementById('timerdisplay');
    var timerId = setInterval(countdown, 1000);
    document.getElementById("playerselected").value = "";
    document.getElementById("computerselected").value = "";
    document.getElementById("result").value = "";
    document.getElementById("playerscore").value = "";
    document.getElementById("computerscore").value = "";

    function countdown() {
        if (timeLeft == 0) {
            clearTimeout(timerId);
            elem.value = "Game Over"
            document.getElementById("rock").disabled = true;         // disables RPS buttons
            document.getElementById("paper").disabled = true;
            document.getElementById("scissor").disabled = true;
        } else {                                                     // enable RPS buttons
            elem.value = "" + timeLeft + ' seconds remaining';
            document.getElementById("rock").disabled = false;
            document.getElementById("paper").disabled = false;
            document.getElementById("scissor").disabled = false;
            document.getElementById("30sec").disabled = true;
            document.getElementById("60sec").disabled = true;
            timeLeft--;
        }
    }
}

/*  Steps:

    create 30 sec and 60 sec timer onclick button function and display the timer to "timerdisplay"
    assign "playerselected" to display the button selected (Rock, Paper, or Scissor)
    assign "computerselected" to display random selection by computer (Rock, Paper, or Scissor) the moment "playerselected" displays a selection
    based on the selection, determine the winner
    if player win, display WIN to "winloseresult"; if player lose, display LOSE to "winloseresult"
    based on the winner, add to score to either "playerscore" or "computerscore"                                                                   - .value += arithmetic


    when everything works, create an enabling/disabling function to 30 sec and 60 sec timer to enable buttons while timer is active and disable once it reaches 00:00 (SS:MS)
    when pressed again, reset all display and start the game all over again
*/


/*  Simulation:
    press 30 sec or 60 sec timer to enable RPS buttons and start the timer
    press RPS and display both player and computer selection
    determine the winner and add score to the winner
    press another RPS and display both player and computer selection
    game ends when timer stops


    Input: button click on 30

    Timer Screen:
    Display:
    Output:

    Input: 
    User Screen:
    Dislay:
    Output:

    Computer Screen:
    Display:
    Output:
    
    Score:
    Display:
    Output: 

    function userInput(userInputParameter = 30s or 60s) 
        then 30s and 60s button disable
        then rock, paper, scissors button enable
        start countdown from userInputParameter
        display remaining time on the clock screen

        clear all display when pressed

        if timer reaches == 0
            disable RPS buttons
            enable 30s and 60s buttons
*/