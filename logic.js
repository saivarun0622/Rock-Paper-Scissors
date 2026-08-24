//score variables to update scores.
let userScore = 0;
let computerScore = 0;

//Creating node list(kind of array) to choose the userChoice
const choices = document.querySelectorAll(".choice");

//message variable for displaying the message
let msg = document.querySelector("#msg");

//Computer Choice Selection
const genCompChoice = () =>{
    let availableChoices = ["rock","paper","scissors"];
    let randomIdx = Math.floor(Math.random()*3);
    return availableChoices[randomIdx];
}

//draw scenario
const draw = () =>{
    console.log("It's a Draw");
    msg.innerText = "Draw. Play Again";
    msg.style.backgroundColor = "black";
}

//showing Results
const showWinner = (win,userChoice,compChoice) =>{
    if(win)
    {
        console.log("You Win!!")
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        document.querySelector("#player-score").innerText = userScore;
    }
    else
    {
        console.log("You Lose!!")
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        computerScore++;
        document.querySelector("#computer-score").innerText = computerScore;
    }
}

//result scenario
const result = (userChoice,compChoice) =>{
    let win = true;
    if(userChoice == "rock")
    {
        win = compChoice == "paper"? false : true;
    }
    else if(userChoice == "paper")
    {
        win = compChoice == "scissors"? false : true;
    }
    else
    {
        win = compChoice == "rock"? false : true;
    }
    
    //calling results function
    showWinner(win,userChoice,compChoice);
}

//Playing the game
const playGame = (userChoice) =>{
    let compChoice = genCompChoice();
    if(userChoice === compChoice)
    {
        draw();
    }
    else
    {
        result(userChoice,compChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");

        //starting the game
        playGame(userChoice);
    })
})