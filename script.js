console.log("Bingo");

var answerArray = [];
var keyboard = document.getElementById('keyboard');
var letters = document.getElementsByClassName('letter');
var ul = document.getElementsByTagName('ul')[0];
var showLetters = document.getElementsByClassName('show');
var heart = document.getElementsByTagName('img');
var reset = false;
var buttons = document.getElementsByTagName("button")[0];
var startButton = document.getElementById('reset');
var hiddenPhraseArray = [];

let phrases = [
"i want it that way", //audio1
"genie in a bottle", //audio2
"i will always love you", //audio3
"my heart will go on", //audio4
"ice ice baby", //audio5
"tears in heaven", //audio6
"black or white", //audio7
"baby one more time", //audio8
"shape of my heart", //audio9
"cry me a river", //audio10
"a moment like this", //audio11
"viva la vida", //audio12
"empire state of mind", //audio13
"hey there delilah", //audio14
"say my name" //audio15
];

hints = [
"Boy Band", //1
"Aladdin", //2
"Singer's first name initials is W", //3
"CD", //4
"From 1990", //5
"Classic", //6
"From a Legend", //7
"Catchy and Sexy", //8
"Black and Blue album", //9
"Solo Male Singer", //10
"Best Selling Single of 2002", //11
"British Rock Band", //12
"Rapper and Vocals", //13
"PWT", //14
"DC" //15
];


//phraseArray = "g","a", etc.
var phraseArray = getRandomPhraseArray(phrases);
addPhraseToDisplay(phraseArray);


var ranNum;

var numberOfLives = 5;

//generate random phrase based on math.random
function getRandomPhraseArray(phrases) {
    console.log(phrases);
    ranNum = parseInt(Math.floor(Math.random()*phrases.length));
    let randomString = phrases[ranNum];
    console.log(randomString);
    let splitString = randomString.split("");
    return splitString;
}

var audio1 = new Audio('hint1.mp3');
var audio2 = new Audio('hint2.mp3');
var audio3 = new Audio('hint3.mp3');
var audio4 = new Audio('hint4.mp3');
var audio5 = new Audio('hint5.mp3');
var audio6 = new Audio('hint6.mp3');
var audio7 = new Audio('hint7.mp3');
var audio8 = new Audio('hint8.mp3');
var audio9 = new Audio('hint9.mp3');
var audio10 = new Audio('hint10.mp3');
var audio11 = new Audio('hint11.mp3');
var audio12 = new Audio('hint12.mp3');
var audio13 = new Audio('hint13.mp3');
var audio14 = new Audio('hint14.mp3');
var audio15 = new Audio('hint15.mp3');

var hintAudio = [audio1,audio2,audio3,audio4,audio5,audio6,audio7,audio8,audio9,audio10,audio11,audio12,audio13,audio14,audio15];

//Get Hint
hint1.onclick = function() {

    var music = hintAudio[ranNum];
    music.play();
};

//Get Hint
hint2.onclick = function() {

var getHint = hints[ranNum];
alert(getHint);
};

//Add random phrase to display
function addPhraseToDisplay(arr) {
    ul.innerHTML = "";

    for (var i = 0; i < arr.length; i++){
        if (arr[i] === " ") {
            hiddenPhraseArray[i] = "/";
        } else {
            hiddenPhraseArray[i] = "_";
        }
    }
    for (var i = 0; i < arr.length; i++){
        let li = document.createElement('li');
        li.textContent = hiddenPhraseArray[i];
        ul.appendChild(li);
        if (arr[i] != "/") {
            li.className = "letter";
        } else {
            li.className = "space";
        }

    }
}


function isLetterMatch(btn) {
    let guessed = false;
    for (var i = 0; i < phraseArray.length; i++ ){
        if (btn.target.textContent === phraseArray[i].toLowerCase()){
            guessed = true;
        }
    }
    return guessed;

}

function checkWin() {

    //Create answerArray = [];
    answerArray = [];
    //Create var for li using document.querySelectorAll
    var liText = document.querySelectorAll(".letter");
    //Create for loop
    for (var i = 0; i < liText.length; i++){
    //Push inner text of check li element into answerArray
        answerArray.push(liText[i].innerText);
    }
    //Check if _ is in answerArray
    //If _ not in array, player wins
    if (answerArray.includes("_") === false) {
        alert("You Win!");
        resetGame();

    } else if (missed === 5) {
        alert("Game Over!");
        resetGame();
    }

}


var missed = 0;

//Add click to keyboard. If lose a turn, heart image changes.
keyboard.addEventListener('click', (event) => {
    let letterFound = isLetterMatch(event);

    if (event.target.tagName === "BUTTON") {
        event.target.classList = "chosen";
        event.target.disabled = "true";
        event.target.style.background = "pink";
        if (letterFound === false && missed < 5) {
            heart[missed].setAttribute('src', 'lose.png');
            missed++;
        } else if (letterFound === true) {
            updatePhraseToDisplay(event.target.textContent);
        }
    }

    var timeOut = setTimeout(function(){
        checkWin ();}, 3000)
});


function updatePhraseToDisplay(letter) {
    for (var i = 0; i < phraseArray.length; i++){
        if (letter === phraseArray[i]) {
            ul.childNodes[i].textContent = letter;

        }
    }
}

function resetHearts() {
    heart[0].setAttribute('src','heart.svg');
    heart[1].setAttribute('src','heart.svg');
    heart[2].setAttribute('src','heart.svg');
    heart[3].setAttribute('src','heart.svg');
    heart[4].setAttribute('src','heart.svg');
}


function resetGame() {
    missed = 0;
    resetHearts();
    changeChosenButtons();
    phraseArray = getRandomPhraseArray(phrases);
    addPhraseToDisplay(phraseArray);
}

//Reset button
document.getElementById("reset").addEventListener("click",resetGame);

function changeChosenButtons(){
    var buttonCheck = document.getElementsByTagName('button');
    for (var i = 0; i <buttonCheck.length; i++){
        buttonCheck[i].className ="";
        //Enable all buttons
        buttonCheck[i].disabled = false;
        //Change all buttons to original color
        buttonCheck[i].style.background = "#995DB5";
    }
}

  //Create alphabet ul
var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
    }
};