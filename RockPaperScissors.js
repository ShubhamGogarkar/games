const playerScore = document.querySelector(".playerScore");
const compScore = document.querySelector(".compScore");
const Choice = document.querySelectorAll(".choice");
const msg = document.querySelector(".message");
let playerPoints = 0;
let computerPoints = 0;
const playerrock = document.querySelectorAll(".playerchoicerock");
const playerpaper = document.querySelectorAll(".playerchoicepaper");
const playerscissors = document.querySelectorAll(".playerchoicescissors");
const comprock = document.querySelectorAll(".compchoicerock");
const comppaper = document.querySelectorAll(".compchoicepaper");
const compscissors = document.querySelectorAll(".compchoicescissors");
const allimgtext = document.querySelectorAll(".allimgtext");

hideAll();




function hideAll() {
  [...playerrock, ...playerpaper, ...playerscissors,
   ...comprock, ...comppaper, ...compscissors]
  .forEach(el => el.style.display = "none");
}

function showPlayer(choice) {
  hideAll();
  if (choice === "rock") playerrock.forEach(el => el.style.display = "");
  if (choice === "paper") playerpaper.forEach(el => el.style.display = "");
  if (choice === "scissors") playerscissors.forEach(el => el.style.display = "");
}

function showComputer(choice) {
    
  if (choice === "rock") comprock.forEach(el => el.style.display = "");
  if (choice === "paper") comppaper.forEach(el => el.style.display = "");
  if (choice === "scissors") compscissors.forEach(el => el.style.display = "");
}


// function getRandomColor() {
//     let val1= Math.floor(Math.random()*256);
//     let val2 = Math.floor(Math.random()*256);
// let val3 = Math.floor(Math.random()*256);
// return `rgb(${val1}, ${val2}, ${val3})`;
// }
// setInterval(()=>{document.querySelector("body").style.backgroundColor=getRandomColor()},1000);
// setInterval(()=>{document.querySelector("nav").style.backgroundColor=getRandomColor()},1000);
// setInterval(()=>{document.querySelector(".choiceandscore").style.backgroundColor=getRandomColor()},1000);
// setInterval(()=>{document.querySelector(".message").style.backgroundColor=getRandomColor()},1000);




const randomChoice = () => {
    const compchoices = ["rock", "paper", "scissors"];

    let temp = compchoices[Math.floor(Math.random() * 3)];
    return temp;
};

const game = (playerChoice, computerChoice) => {

    showPlayer(playerChoice);
showComputer(computerChoice);


    if (playerChoice === computerChoice) {
        msg.textContent = "It's a tie!";
        msg.style.backgroundColor = "";




    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerPoints++;
        playerScore.textContent = playerPoints;
        msg.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "#21f62c4f";
     
        
    } else {
        computerPoints++;
        compScore.textContent = computerPoints;
        msg.textContent = `Computer wins! ${computerChoice} beats ${playerChoice}`;
        msg.style.backgroundColor = "rgba(242, 35, 8, 0.29)";
 
        
    }
};

document.querySelectorAll(".choice").forEach((choice) => {
    choice.addEventListener("click", () => {
   
        let playerChoice = choice.id;
        let computerChoice = randomChoice();
        game(playerChoice, computerChoice);
        
    });
});




