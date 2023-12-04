// Creating Randome Number from 0 to 6
let randomNumber1 = Math.floor(Math.random() * 6),
randomNumber2 = Math.floor(Math.random() * 6);
// console.log(randomNumber1);

// Creating a image array
let diceImgs = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

// Getting Elements
let heading = document.querySelector('.heading'),
diceImg1 = document.querySelector('.diceImg1'), 
diceImg2 = document.querySelector('.diceImg2');

// Intialing the randome images
diceImg1.src = `images/${diceImgs[randomNumber1]}`;
diceImg2.src = `images/${diceImgs[randomNumber2]}`;

// Compairing numbers
if(randomNumber1 == randomNumber2){
    heading.innerHTML = "Refresh Me !";
    // console.log("Refresh Me.")
}
else if(randomNumber1 > randomNumber2){
    heading.innerHTML = `&#127884 Player 1 Wins !`;
    // console.log("Player1 Wins");
}
else{
    heading.innerHTML = `Player 2 Wins ! &#127884`;
    // console.log("Player2 Wins");
}