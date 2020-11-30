var readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;
var questions =[ 
  {
  question: `1. Batman is the alter-ego for which billionaire playboy? 
  a: Bruce Wayne
  b: Thomas Wayne
  c: Bill Gates
  `,
  answer: "a"
  },
  {
  question: `2. What is the name of Batman's butler?
  a: Edwin
  b: George
  c: Alfred
  `,
  answer: "c"
  },
  {
  question: `3. What is the name of Bruce Wayne’s late parents?
  a: Martha and Thomas
  b: Jerry and Maria
  c: Selena and Arthur
  `,
  answer: "a"
  },
  {
  question: `4. What Question Does The Joker Keep Asking?
  a: Where does he get those wonderful toys?
  b: Why so serious?
  c: Why aren’t you laughing?
  `,
  answer: "b"
  },
  {
  question: `5. Who creates Batman's tech?
  a: Lucius Fox
  b: Carmine Falcone
  c: Jonathan Crane 
  `,
  answer: "a"
  }
];

var highScores = [
  {
    name: "Bruce",
    score: 10
  },
  {
    name: "Rachel",
    score: 8
  },
  {
    name: "Alfred",
    score: 6
  }
];

var userName = readlineSync.question("What's your name? ");
console.log('Hi ' + chalk.blue.bold(userName) + ' welcome to '+ chalk.inverse.bold(' THE BATMAN ') + ' quiz\n');

function play(question, answer){
  var userAns = readlineSync.question(question);
  if (userAns.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.bgGreen.black.bold("You are right"));
    score = score + 2;
  }
  else {
    console.log(chalk.bgRed.bold("Oops! Wrong answer"));
    // score = score - 1;
  }

  console.log("Your current score: ", score);
  console.log(chalk.yellowBright("----------------------"));
}

function highScoreDisplay(score){
  console.log(chalk.bgCyan.bold("--------------------------"));
  console.log(chalk.bgCyan.bold("       High Scores        "));
   console.log(chalk.bgCyan.bold("--------------------------"));
  
  for(var i = 0; i < highScores.length; i++) {
    console.log(highScores[i].name, " - ", highScores[i].score);
  }

  // check if the high score is beaten
  if(score > highScores[2].score){
    console.log(`${chalk.red.bold
    `
    Congrats ${userName}!`} You're in the top 3 players`);
    console.log("Send me a " + chalk.bgYellow("screenshot") + " of this to get featured in the leaderboard.")
  }
}

for(var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("\nYour final score is ", score, "\n");

highScoreDisplay(score);