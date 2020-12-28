var p_1 = localStorage.getItem("key1");
var p_2 = localStorage.getItem("key2");

var p_1_score = 0;
var p_2_score = 0;

document.getElementById("p_1_name").innerHTML = p_1 + " - ";
document.getElementById("p_2_name").innerHTML = p_2 + " - ";

document.getElementById("p_1_score").innerHTML = p_1_score;
document.getElementById("p_2_score").innerHTML = p_2_score;

document.getElementById("p_q").innerHTML = "Question Turn -" + p_1;
document.getElementById("p_a").innerHTML = "Answer Turn -" + p_2;

function send() {

     getword = document.getElementById("word").value;
     word = getword.toLowerCase();
     char1 = word.charAt(1);
     second = Math.floor(word.length / 2);
     char2 = word.charAt(second);
     char3 = word.charAt(word.length - 1);
     remove1 = word.replace(char1, "_");
     remove2 = remove1.replace(char2, "_");
     remove3 = remove2.replace(char3, "_");
    console.log(remove3);

     Question = "<h4 id='word_display'>" + remove3 + "</h4>";

     Input = " <br> <br> <input id='ibox' type='text'>";

     checkB = "<br> <br> <button class='btn btn-primary' onclick='check()'> Check </button>";

     row = Question + Input + checkB;
    document.getElementById("output").innerHTML = row;

}

question_turn = "player1";
answer_turn = "player2";

function check() {

     newInput = document.getElementById("ibox").value;
     answer = newInput.toLowerCase();
    if (answer == word) {

        if (answer_turn == "player1") {

            p_1_score = p_1_score + 1;
            document.getElementById("p_1_score").innerHTML = p_1_score;

        } else if ( answer_turn=="player2"){

            p_2_score = p_2_score + 1;
            document.getElementById("p_2_score").innerHTML = p_2_score;
        }

    }
    if(question_turn == "player1") {
        question_turn = "player2"
        document.getElementById("p_q").innerHTML = "Question Turn - " + p_2;
    } else {
        question_turn = "player1"
        document.getElementById("p_q").innerHTML = "Question Turn - " + p_1;
    }

    if(question_turn == "player1") {
        question_turn = "player2"
        document.getElementById("p_a").innerHTML = "Answer Turn - " + p_2;
    } else {
        question_turn = "player1"
        document.getElementById("p_a").innerHTML = "Answer Turn - " + p_1;
    }

}