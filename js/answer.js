var key = 'this 1s @ VeRy $tUpid K3y!';
var url = new URL(document.URL);
/* let re = /(.+)\/(.+)/;
 var match = url.pathname.match(re);
 var question = match[0];
 var raw_answer = match[1];
*/

var question = url.searchParams.get("question");
var raw_answer = url.searchParams.get("ans");

if (raw_answer) {
    answer = decipher(raw_answer);
}
else {
    answer = "";
}

answer = answer || "42";

var answerElem = document.getElementById("answer");
answerElem.innerText = answer;

if (!question){
    question = "What is the answer to life, the universe and everything?"
}

var questionElem = document.getElementById("question");
questionElem.innerText = question;
document.title = question;

if (question[0].match(/^[a-z0-9]+$/i)){
    var introElem = document.getElementById("intro");
    introElem.style.direction = "ltr";
}

var toForm = document.getElementById("toForm");
url = new URL(document.URL);
toForm.href = url.pathname + "form";
