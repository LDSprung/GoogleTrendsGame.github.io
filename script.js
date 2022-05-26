
//store an array of words
//var words = ["test", "screen", "shark", "pen"];
var words;
fetch("https://gist.githubusercontent.com/deekayen/4148741/raw/98d35708fa344717d8eee15d11987de6c8e26d7d/1-1000.txt")
  .then(response => response.text())
  .then((data) => {
    console.log(data);
    words = data.split("\n");
  })
  
  
//generate a random word
function getWord() {
    var randNum = Math.floor(Math.random() * words.length);
    console.log(randNum);
    var randWord = words[randNum];
    console.log(randWord);
    return randWord;
}
 //print a new word on the screen
function printWord() {
    var word = getWord();
    console.log(word);
    document.getElementById("WordDisplay").innerHTML = word;
} 

//take the names input in the form and change the headings in the table to match
function getPlayers() {
    var x = document.getElementById("frm1");
    var text = "";
    for (var i = 0; i < x.length ;i++) {
        text = x.elements[i].value;
        document.getElementById("PL" + i).innerHTML = text;
    }
}

//generate a new word when the button is clicked
document.getElementById("generate").addEventListener("click", printWord, false);

//calculate the total score of each player based on the table inputs
function calcScore() {
    var table = document.getElementById("table");
    var sum;
    var score = 0;
    var max = 0;
    for (var i = 1; i < table.rows[0].cells.length; i++) {
        sum = 0;
        for(var j = 2; j < table.rows.length; j++) {
            score = parseInt(table.rows[j].cells[i].firstChild.value);
            if (table.rows[j].cells[i].firstChild.value == "") {
                continue;
            }
            console.log(score);
            sum += score; 
        }
        console.log(sum);
        document.getElementById("plScore" + i).innerHTML = sum;
    }
}

//timer for keeping track of round time limit
function timer() {
    document.getElementById("timeStart").disabled = true;
    var timeLeft = 30;
    var timerId = setInterval(countdown, 1000);
    document.getElementById("timer").style.color = "#24da14";
    function countdown() {
        if (timeLeft <= 20){
            document.getElementById("timer").style.color = "#fff239"
        }
        if (timeLeft <= 10){
            document.getElementById("timer").style.color = "#d43c3c"
        }
        if (timeLeft == -1) {
            clearTimeout(timerId);
            document.getElementById("timer").innerHTML = "30 Seconds";
            document.getElementById("timer").style.color = "#ecf0f1";
            document.getElementById("timeStart").disabled = false;
        } 
        else {
            document.getElementById("timer").innerHTML = timeLeft + " Seconds Left";
            timeLeft--;
        }
    }
}

//start the timer when the button is clicked
document.getElementById("timeStart").addEventListener("click", timer, false);