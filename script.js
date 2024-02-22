let userScore = document.getElementById("userScore");
let compScore = document.getElementById("comScore");
let msg = document.getElementById("msg");

const choices = document.querySelectorAll("button");

const comChoice = () =>{
    const ch = ['rock','paper','scissors'];
    const random = Math.floor(Math.random()*3);
    return ch[random];
};

let uScore = 0;
let cScore =0;

const uWin = (sel) => {
    uScore++;
    updateScore(uScore,cScore);
    msg.innerText=`The Computer selected ${sel}.You Win!!!`;
    msg.style.backgroundColor="green"
    msg.style.color="white"
}

const cWin = (sel) =>{
    cScore++;
    updateScore(uScore,cScore);
    msg.innerText=`The Computer selected ${sel}.You Lose!!!`;
    msg.style.backgroundColor="red"
    msg.style.color="white"
}

const updateScore = (uSc,cSc) =>{
    userScore.innerText = uSc;
    compScore.innerText = cSc;
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        const compChoice = comChoice();
        console.log(userChoice,compChoice);

        if(userChoice == compChoice){
            msg.innerText="This was a draw!!!";
            msg.style.backgroundColor="grey"
        }
        else{
            let userWin=true;
            if(userChoice == "rock"){
                userWin = compChoice=="paper"?false:true;
                userWin==true?uWin("scissors"):cWin(compChoice);
                
            } else if(userChoice == "paper"){
                userWin = compChoice=="scissors"?false:true;
                userWin==true?uWin("rock"):cWin(compChoice);
            } else {
                userWin = compChoice=="rock"?false:true;
                userWin==true?uWin("paper"):cWin(compChoice);
    }
}
})
})