console.log("hello");

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
var getHint = document.getElementById("hint");
var showClue = document.getElementById("clue");

let phrases = [
"i want it that way",
"genie in a bottle",
"i will always love you",
"my heart will go on",
"ice ice baby",
"tears in heaven",
"black or white",
"baby one more time",
"shape of my heart",
"cry me a river",
"a moment like this",
"viva la vida",
"empire state of mind",
"hey there delilah",
"say my name"
]

hints = [
"Boy Band",
"Aladdin",
"Singer's first name initials is W",
"CD",
"From 1990",
"Classic",
"From a Legend",
"Catchy and Sexy",
"Black and Blue album",
"Solo Male",
"Best Selling Single of 2002",
"British Rock Band",
"Rapper and Vocals",
"PWT",
"DC"
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

//Get Hint
hint.onclick = function() {

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
    // returnLettersToNormal();
    let phraseArray = getRandomPhraseArray(phrases);
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