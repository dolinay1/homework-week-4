// store quiz questions and answers in an object
// make a for loop that iterates randomly through the object
// when the user clicks submit
// onclick for submit button to begin quiz
// need something to reset the game each time you press submit
// tell if answer is correct or incorrect
// incorrect answer decincrements time


questions = {
    q1: "At which company was Javascript created?",
    q2: "Which of the following was NOT included in the Javascipt ES6 update?",
    q3: "Which of the following function of Array object returns a string representing the array and its elements?",
    q4: "Which of the following type of variable is visible ONLY within a function where it is defined?",
    q5: "Which event occurs when the user clicks on an HTML element?",
    q6: "Who is credited with creating Javascript?",
}

choices = {
    q1: ["Google", "Netscape", "Microsoft", "Sun Microsystems"],
    q2: ["const", "spread operator", "constructors", "classes"],
    q3: ["toSource()", "splice()", "sort()", "toString()"],
    q4: ["Global variable", "Local variable", "Both of the above.", "None of the above."],
    q5: ["onmouseover", "onmouseclick", "onclick", "onchange"],
    q6: ["Linus Torvald", "Brendan Eich", "Douglas Crockford", "Bill Gates"],
}

answers = {
    q1: "Netscape",
    q2: "constructors",
    q3: "toString()",
    q4: "Local variable",
    q5: "onclick",
    q6: "Brendan Eich",
}

let quizProperties = {
    questionSet: 0,
    correct: 0,
    timer: 60,
    timerValue: "",
    score: "",
    // timerId: setInterval(function() {
    //     timerDisplay.innerHTML = "Time: " + quizProperties.timer;
    //     quizProperties.timer--;
    // }, 1000),

    // correctDisplayAlert: setTimeout(function(){
    //     correctDisplay.style.display="block";
    // }, 2000),
    // wrongDisplayAlert: setTimeout(function(){
    //     wrongDisplay.style.display="block";
    // }, 2000),
    checkAnswer: function() {
        // the answer to the current question being asked
        let userSelection = Object.values(answers)[quizProperties.questionSet];
        if(this.textContent === userSelection) {
            // quizProperties.correctDisplayAlert;
            quizProperties.correct++;
            // correctDisplay.style.display="none";
            // setTimeout(function(){
            //     correctDisplay.style.display="none";
            // }, 2000);
            quizProperties.guessResult();
        } else if(this.textContent !== userSelection){
            // correctDisplay.style.display="none";
            // setTimeout(function(){
            //     wrongDisplay.style.display="none";
            // }, 2000),
            // buttonDisplay.classList.add("btn-danger");
            quizProperties.timer-=5;
            quizProperties.guessResult();
        }
    },
    // method to remove previous question results and options
    guessResult: function(){
    
    // increment to next question set
    quizProperties.questionSet++;
    // remove the questions each time
    $('.choice').remove();
    // $('#results h3').remove();
    // begin next question
    nextQuestion();
     
  }
}

const startQuiz = document.querySelector("#start-quiz");
const questionDisplay = document.querySelector("#question");
const choiceDisplay = document.querySelector("#choice");
const headerDisplay = document.querySelector("h1");
const initialsDisplay = document.querySelector(".form-group");
const buttonDisplay = document.querySelector("btn");
const correctDisplay = document.querySelector("#correct");
const wrongDisplay = document.querySelector("#wrong");
const timerDisplay = document.querySelector("#timer");
const highScoreDisplay = document.querySelector("#high-score");
const submitButton = document.querySelector("#submit");
const highScoreInfo = document.querySelector(".high-score-info")


highScoreInfo.style.display="none";
correctDisplay.style.display="none";
wrongDisplay.style.display="none";
initialsDisplay.style.display="none";

// eventlisteners to initialize app
$(document).ready(function () {
    $(document).on('click', '.choice', quizProperties.checkAnswer);
  });


startQuiz.onclick = function initQuiz() {

    quizProperties.questionSet = 0;
    quizProperties.correct = 0;
    quizProperties.timer = 60,

    nextQuestion();

    timeCheck();

    questionDisplay.style.display="block";

    $('#choice').show();

    // hides the start button and header when app is initiatlized
    startQuiz.style.display="none";
    headerDisplay.style.display="none";
    
    // timerId = setInterval(function() {
    //     document.getElementById("timer").innerHTML = "Time: " + quizProperties.timer;
    //     quizProperties.timer--;
    // }, 1000);
 }

 function nextQuestion() {
    
     // gets all the questions then indexes the current questions
    let questionContent = Object.values(questions)[quizProperties.questionSet];
    questionDisplay.textContent = questionContent;

    let questionChoices = Object.values(choices)[quizProperties.questionSet];

    if (quizProperties.questionSet === Object.keys(questions).length) {
        console.log("done");
    } else {
        questionChoices.forEach(key => {
            let button = document.createElement("button");
                choiceDisplay.append(button);
                button.classList.add("btn", "btn-primary", "mr-3", "mt-3", "choice");
                button.innerHTML = key;
            });
    }
   

    // questionChoices.every(function(index, key) {
    //     let button = document.createElement("button");
    //     choiceDisplay.append(button);
    //     button.classList.add("btn", "btn-primary", "mr-3", "mt-3", "choice");
    //     button.innerHTML = key;
    // });
 }

 function timeCheck() {
     let timerInterval = setInterval(function() {
        timerDisplay.innerHTML = "Time: " + quizProperties.timer;
        quizProperties.timer--;

        if(quizProperties.timer <= 0) {
            clearInterval(timerInterval);
            score = quizProperties.timer;
            console.log(score);
         } 
         else if(quizProperties.questionSet === Object.keys(questions).length) {

            clearInterval(timerInterval);

            score = quizProperties.timer;

            choiceDisplay.style.display="none";
            questionDisplay.style.display="none";

            timerDisplay.innerHTML = "Time: 0";

            initialsDisplay.style.display="block";
            // startQuiz.style.display="block";
            questionDisplay.style.display="block";
            questionDisplay.innerHTML = "Your final score is " + score + "!";

            headerDisplay.style.display="block";
            headerDisplay.innerHTML = "Time's Up!";

            submitButton.addEventListener("click", function(event) {
                event.preventDefault();
                    localStorage.setItem("high-score", score);
                    console.log(highScoreDisplay);
              });

         }

    }, 1000);
    
 }

 function renderHighScore() {
    // Fill in code here to retrieve the last email and password.
    let highScore = localStorage.getItem("record-initials");
    // If they are null, return early from this function
    if (email && password === null) {
      // returns undefined if it doesnt have anything, allows us to break from the function
      return;
      // Else set the text of the userEmailSpan and userPasswordSpan
    } else {
        highScoreDisplay.textContent = email;
    }
    // to the corresponding values form local storgage
  }

 

// function sendMessage() {
//   timeEl.textContent = " ";

//   var imgEl = document.createElement("img");

//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

// }

// setTime();