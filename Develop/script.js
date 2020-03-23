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
    timer: 100,
    timerOn: false,
    timerValue: "",
    score: "",
    checkAnswer: function() {
        // the answer to the current question being asked
        let userSelection = Object.values(answers)[quizProperties.questionSet];
        if(this.textContent === userSelection) {
            quizProperties.correct++;
            console.log("correct!");
            quizProperties.guessResult();
        } else if(this.textContent !== userSelection){
            console.log("wrong");
            quizProperties.timer-=10;
            quizProperties.guessResult();
        }
    },
    // method to remove previous question results and options
    guessResult: function(){
    
    // increment to next question set
    quizProperties.questionSet++;
    
    // remove the options and results
    // button.classList.remove(".choice");
    $('.choice').remove();
    // $('#results h3').remove();
    console.log(quizProperties.questionSet);
    // begin next question
    nextQuestion();
     
  }
}

const startQuiz = document.querySelector("#start-quiz");
const questionDisplay = document.querySelector("#question");
const choiceDisplay = document.querySelector("#choice");
const headerDisplay = document.querySelector("h1");
const initialsDisplay = document.querySelector(".form-group");

initialsDisplay.style.display="none";

// eventlisteners to initialize app
$(document).ready(function () {
    $(document).on('click', '.choice', quizProperties.checkAnswer);
  });


startQuiz.onclick = function initQuiz() {

    nextQuestion();

    // hides the start button when app is initiatlized
    startQuiz.style.display="none";
    headerDisplay.style.display="none";

    // When a choice is clicked, display question results...
	// $('.choices').on('click', function() {
	// 	userChoice = $(this).attr('value');
	// 	console.log(userChoice);
	// 	results();
	// });

        setInterval(function(){
        document.getElementById("timer").innerHTML = "Time: " + quizProperties.timer;
        quizProperties.timer--;
        if (quizProperties.timer <= 0 || quizProperties.questionSet === Object.keys(questions).length){
            // clearInterval(interval);
            initialsDisplay.style.display="block";
            // let button = document.createElement("button");
            // choiceDisplay.append(button);
            // button.classList.add("btn", "btn-primary", "mr-3", "choice");
        }
    }, 1000);
 }

 function nextQuestion() {
     // gets all the questions then indexes the current questions
     let questionContent = Object.values(questions)[quizProperties.questionSet];
    questionDisplay.textContent = questionContent;

    let questionChoices = Object.values(choices)[quizProperties.questionSet];

    // creates all the trivia guess options in the html
    // $.each(questionOptions, function(index, key){
    //     $('#options').append($('<button class="option btn btn-info btn-lg">'+key+'</button>'));
    //   })

    // creates all the trivia guess options in the html
    // for (let i = 0; i < questionChoices.length; i++) {
    //     const choice = questionChoices[i];
    //     let button = document.createElement("button");
    //     choiceDisplay.append(button);
    //     button.classList.add("btn", "btn-primary", "mr-3", "choice");
    //     button.innerHTML = choice;
        
    // }

    questionChoices.forEach(key => {
    let button = document.createElement("button");
        choiceDisplay.append(button);
        button.classList.add("btn", "btn-primary", "mr-3", "choice");
        button.innerHTML = key;
    });
 }






//  for getting a random question on the object
//  let randomQuestion = function (obj) {
//     let keys = Object.keys(obj);
//     return obj[keys[ keys.length * Math.random() << 0]];
// };




// var timeEl = document.querySelector(".time");
// var mainEl = document.getElementById("main");

// var secondsLeft = 10;

// function setTime() {
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//     if(secondsLeft === 0) {
//       clearInterval(timerInterval);
//       sendMessage("Time's up!");
//     }

//   }, 1000);
// }

// function sendMessage() {
//   timeEl.textContent = " ";

//   var imgEl = document.createElement("img");

//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

// }

// setTime();