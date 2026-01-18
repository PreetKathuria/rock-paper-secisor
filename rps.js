let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scisor = document.querySelector(".scisor");
let yours = document.querySelector(".yours");
let comp = document.querySelector(".comp");
let restart = document.querySelector(".restart");
let winner = document.querySelector(".winner");
let signs = document.querySelector(".signs");
let playerchoice = document.querySelector(".playerchoice");
let computerchoice = document.querySelector(".computerchoice");

let you = 0;
let com = 0;
let move = 0;

const gamingstyle = ["rock","scisor","paper","paper","rock","scisor","rock","scisor","rock","papaer"];

const rockclicked = () => {

    let compmove = gamingstyle[move];
    
    if(compmove === "scisor") {
        you++;
        console.log("player 1 point");
        yours.innerText = `${you}`;
        yours.style.color = "red";
        move++;
        playerchoice.innerText = "Rock";
        computerchoice.innerText = "scisor";
        displaywinner();
        return;
    } else if (compmove === "paper") {
        com++;
        console.log("computer 1 point");
        comp.innerText = `${com}`;
        comp.style.color = "red";
        move++;
        playerchoice.innerText = "Rock";
        computerchoice.innerText = "paper";
        displaywinner();
        return;
    } else {
        console.log("draw");
        move++;
        computerchoice.innerText = "Rock";
        playerchoice.innerText = "Rock";
        displaywinner();
        return;
    }
}

const paperclicked = () => {
    
    let compmove = gamingstyle[move];
    
    if(compmove === "rock") {
        you++;
        console.log("player 1 point");
        yours.innerText = `${you}`;
        yours.style.color = "red";
        move++;
        computerchoice.innerText = "Rock";
        playerchoice.innerText = "Paper";
        displaywinner();
        return;
    } else if (compmove === "scisor") {
        com++;
        console.log("computer 1 point");
        comp.innerText = `${com}`;
        comp.style.color = "red";
        move++;
        computerchoice.innerText = "Scisor";
        playerchoice.innerText = "Paper";
        displaywinner();
        return;
    } else {
        console.log("draw");
        move++;
        computerchoice.innerText = "Paper";
        playerchoice.innerText = "Paper";
        displaywinner();
        return;
    }
}

const scisorclicked = () => {
    
    let compmove = gamingstyle[move];
    
    if(compmove === "paper") {
        you++;
        console.log("player 1 point");
        yours.innerText = `${you}`;
        yours.style.color = "red";
        move++;
        playerchoice.innerText = "Scisor";
        computerchoice.innerText = "Paper";
        displaywinner();
        return;
    } else if (compmove === "rock") {
        com++;
        console.log("computer 1 point");
        comp.innerText = `${com}`;
        comp.style.color = "red";
        move++;
        playerchoice.innerText = "Scisor";
        computerchoice.innerText = "Rock";
        displaywinner();
        return;
    } else {
        console.log("draw");
        move++;
        playerchoice.innerText = "Scisor";
        computerchoice.innerText = "Scisor";
        displaywinner();
        return;
    }
}

const displaywinner  = () => {
    if(you > com && move === 10) {
        winner.innerText = "You Winned 🥳😍";
        winner.style.backgroundColor = "black";
        winner.style.color = "red";
        winner.style.zIndex = "5";
        signs.style.zIndex = "-5";
        
    } else if(com > you && move === 10) {
        winner.innerText = "Computer Winned 🥳😍😅";
        winner.style.backgroundColor = "black";
        winner.style.color = "red";
        winner.style.zIndex = "5";
        signs.style.zIndex = "-5";
    }
    rock.disabled = true;
    paper.disabled = true;
    scisor.disabled = true;
}

const restarting = () => {
    you = 0;
    com = 0;
    move = 0;
    yours.innerText = 0;
    comp.innerText = 0;
    yours.style.color = "#595957";
    comp.style.color = "#595957";
    winner.style.innerText = "";
    winner.style.backgroundColor = "";
    winner.style.color = "";
    rock.disabled = false;
    paper.disabled = false;
    scisor.disabled = false;
    winner.innerText = "";
    winner.style.backgroundColor = "";
    winner.style.color = "";
    winner.style.zIndex = "-5";
    signs.style.zIndex = "5";
    console.log("re-start");
    playerchoice.innerText = "";
    computerchoice.innerText = "";
}

restart.addEventListener("click",restarting);

rock.addEventListener("click",rockclicked);
paper.addEventListener("click",paperclicked);
scisor.addEventListener("click",scisorclicked);