// store quiz questions and answers in an object
// make a for loop that iterates randomly through the object
// when the user clicks submit
// onclick for submit button to begin quiz

Questions = {
    q1: "At which company was Javascript created?",
    q2: "Which of the following was NOT included in the Javascipt ES6 update?",
    q3: "Inside which HTML element do we put the JavaScript?",
    q4: "Which of the following is the structure of an if statement?",
    q5: "Which of the following function of Array object returns a string representing the array and its elements?",
    q6: "Which of the following type of variable is visible ONLY within a function where it is defined?",
    q7: "What is the correct way to write a JavaScript array?",
    q8: "Which event occurs when the user clicks on an HTML element?",
    q9: "Who is credited with creating Javascript?",
    q10: "What is the purpose of a return statement in a function?"
}

Choices = {
    c1: ["Google", "Netscape", "Microsoft", "Sun Microsystems"],
    c2: ["const", "spread operator", "constructors", "classes"],
    c3: ["<js>", "<scripting>", "<script>", "<javascript>"],
    c4: ["if (conditional expression is true) thenexecute this codeend if", "if (conditional expression is true)execute this codeend if", "if (conditional expression is true)   {then execute this code>->}", "if (conditional expression is true) then {execute this code}"],
    c5: ["toSource()", "splice()", "sort()", "toString()"],
    c6: ["Global variable", "Local variable", "Both of the above.", "None of the above."],
    c7: ['var colors = ["red", "green", "blue"]', 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', 'var colors = (1:"red", 2:"green", 3:"blue")', 'var colors = "red", "green", "blue"'],
    c8: ["onmouseover", "onmouseclick", "onclick", "onchange"],
    c9: ["Linus Torvald", "Brendan Eich", "Douglas Crockford", "Bill Gates"],
    c10: ["Returns the value and continues executing rest of the statements, if any", "Returns the value and stops the program", "Returns the value and stops executing the function", "Stops executing the function and returns the value"]
}

Answers = {
    a1: "Netscape",
    a2: "constructors",
    a3: "<script>",
    a4: "if (conditional expression is true)   {then execute this code>->}",
    a5: "toString()",
    a6: "local variable",
    a7: 'var colors = ["red", "green", "blue"]',
    a8: "onclick",
    a9: "Brendan Eich",
    a10: "Stops executing the function and returns the value"
}