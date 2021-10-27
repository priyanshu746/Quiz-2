var readlineSync = require('readline-sync');
console.log('Welcome to ! HARRY POTTER ! Quiz...')
var userName = readlineSync.question('Hi, your name please');

console.log('Lets Start !! with '+userName)
readlineSync.keyInPause('Press any key from a-z to start Quiz')
 console.log('Round #1: Spells ')
var score = 0;

var questions = [
  
  {
    question:`
    #1 – What spell did Harry use to kill Lord Voldemort?
    a. Expelliarmus
    b. Expecto Patronum
    c. Avada Kedavra
    d. Accion \n`,
    answer:'b'
  },
  {
    question:`
    #2 – At the first meeting of the Duelling Club, Draco Malfoy summoned what animal with the spell ‘Serpensortia’?
    a. Frog
    b. Snake
    c. Dragon
    d. Bear \n`,
    answer:'b'
  },
  {
    question:`
    #3 – The ‘Felifors’ spell turns a cat into a what?
    a. Hat
    b. Bat
    c. Matchbox
    d. Cauldron \n`,
    answer:'d'
  },
  {
    question:`
    #4 – Gilderoy Lockhart tried to use ‘Brackium Emendo’ to fix Harry’s broken bones. What did it actually do to him?
    a. Turned his leg wooden
    b. Removed his bones entirely
    c. Forced him to speak Parseltongue
    d. Gave him an exquisite singing voice \n`,
    answer:'b'
  },
  {
    question:`
    #5 – Which Patronus belongs to Luna Lovegood?
    a. Rabbit
    b. Doe
    c. Dog
    d. Horse \n`,
    answer:'a'
  }
]

function quiz(question,answer){
  var userAnswer = readlineSync.question(question);
  console.log('You have selected '+ userAnswer);
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log('Correct Answer !');
    score=score+1;
   
  }
  else{
    console.log('OOPS! Wrong Answer !')
    // score=score-1;
    console.log('Correct Answer was '+ answer);
  }
  //  console.log('Current Running Score is : +1');
    }

for(var i=0;i<questions.length;i++){
  currentQuestion = questions[i]
  quiz(currentQuestion.question,currentQuestion.answer);
}

var question2 = [
  {
    question:`
    #1 – Which element is associated with Hufflepuff?
    a. Fire
    b. Earth
    c. Air
    d. Water \n`,
    answer:'b'
  },
  {
    question:`
    #2 – Who was Gryffindor’s Quidditch-obsessed keeper between 1987 and 1994?
    a. Katie Bell
    b. Angelina Johnson
    c. Charlie Weasley
    d. Oliver Wood \n`,
    answer:'d'
  },
  {
    question:`
    #3 – ‘Wit beyond measure is man’s greatest treasure’ is the motto of which house?
    a. Gryffindor
    b. Hufflepuff
    c. Ravenclaw
    d. Slytherin \n`,
    answer:'c'
  }
]
console.log('\n');

if(score>=4){
  console.log('Greetings!! ' + userName + ' You are eligible for Round 2' );
  readlineSync.keyInPause('Are you ready for Round 2')
  console.log('------------------------------')
  console.log('Round #2: Houses of Hogwarts');
  for(var i=0;i<question2.length;i++){
  currentQuestion = question2[i]
  quiz(currentQuestion.question,currentQuestion.answer);
}
console.log('Scores For Round 1 And Round 2 : ',score);
}
else{
console.log('YAY! Your overall Score is : ',score)
console.log('You are not Qualified for Round 2')
}

console.log('\n -----Quiz ENDS HERE------')

var highscore = [{
  name: 'Tejas',
  score:8
},
{
  name: 'Buzzo',
  score:7
}]
console.log('High Scorer are:')
for(var i=0; i<highscore.length;i++){
  var currentHighScore = highscore[i];
  console.log(currentHighScore.name+ ' : '+currentHighScore.score)
}
console.log('if you scored greater or equal to highscore , Send me a snapshot');