//Ersin Kalafat - ersin0105@gmail.com

var myChoice, aiChoice;
var myScore = 0, aiScore = 0;

function tasFunction() {
    myChoice = "Taş";
    document.getElementById("my_choose").innerHTML = myChoice;
    bilgisayarSecimi();
    sonuc();
    score();
}
function kagitFunction() {
    myChoice = "Kağıt";
    document.getElementById("my_choose").innerHTML = myChoice;
    bilgisayarSecimi();
    sonuc();
    score();
}
function makasFunction() {
    myChoice = "Makas";
    document.getElementById("my_choose").innerHTML = myChoice;
    bilgisayarSecimi();
    sonuc();
    score();
}
//sonuc();
function bilgisayarSecimi() {
    var AIchoosing = Math.floor(Math.random()*3);
    if (AIchoosing === 0) {
        aiChoice = "Taş";
        document.getElementById("ai_choosed").innerHTML = aiChoice;
    }
    else if (AIchoosing === 1) {
        aiChoice = "Kağıt";
        document.getElementById("ai_choosed").innerHTML = aiChoice;
    }
    else {
        aiChoice = "Makas";
        document.getElementById("ai_choosed").innerHTML = aiChoice;
    }
    return aiChoice;
}


function sonuc() {
    if (aiChoice === "Taş") {
        if (myChoice === "Makas") {
            document.getElementById("result").innerHTML = "Bilgisayar Kazandı :(";
            aiScore++;
        }

        else if (myChoice === "Taş")
            document.getElementById("result").innerHTML = "Beraberlik...";
        else {
            document.getElementById("result").innerHTML = "Sen Kazandın!!! :)";
            myScore++;
        }

    }

    if (aiChoice === "Makas") {
        if (myChoice === "Kağıt") {
            document.getElementById("result").innerHTML = "Bilgisayar Kazandı :(";
            aiScore++;
        }

        else if (myChoice === "Makas")
            document.getElementById("result").innerHTML = "Beraberlik...";
        else {
            document.getElementById("result").innerHTML = "Sen Kazandın!!! :)";
            myScore++;
        }

    }

    if (aiChoice === "Kağıt") {
        if (myChoice === "Taş") {
            document.getElementById("result").innerHTML = "Bilgisayar Kazandı :(";
            aiScore++;
        }
        else if (myChoice === "Kağıt")
            document.getElementById("result").innerHTML = "Beraberlik...";
        else {
            document.getElementById("result").innerHTML = "Sen Kazandın!!! :)";
            myScore++;
        }

    }


}

function score() {
    document.getElementById("aiScore").innerHTML = aiScore;
    document.getElementById("myScore").innerHTML = myScore;
}
