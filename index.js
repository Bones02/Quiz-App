const myQuestions = [
  {
    'question': 'How many players are on a court at a time in a regular volleyball game?',
    'answers': [5, 6, 2, 4],
    'correct': 1
  },
  {
    'question': 'What does the libero do the most often?',
    'answers': ['Hit', 'Pass', 'Block', 'Set'],
    'correct': 1
  },
  {
    'question': 'How many people are in the front row to hit?',
    'answers': [4, 5, 3, 6],
    'correct': 2
  },
  {
    'question': 'What happens if the ball hits directly on the endline?',
    'answers': ['It is out', 'It is a re-do', 'Rock, paper, scissors to see who gets the point', 'It is in'],
    'correct': 3
  },
  {
    'question': 'When does your team rotate in a volleyball game?',
    'answers': ['every time you lose a point', 'every time you win a point', 'after the other team serves and you win the point', 'after your team serves and you lose the point'],
    'correct': 2
  }
];
let score = 0;
let current = 0;

$(document).ready(function(){
  // start button event listener
  $(".start-button").click(function(){
     $('.start-page').hide();
     $('.next').hide();
     $('.questions').show();
     displayQuestion();
      $('.score').text('Current Score: '+score);
    console.log("Start Quiz button clicked");
  });

  // next button event listener
  $(".next-button").click(function(event){
    console.log("Next button clicked");
    displayQuestion();
    $('.next').hide();
    $('.submit').show();
  });

  $(".submit-button").click(function(event){
    event.preventDefault();
    var selected = $('li.selected');
    console.log(event);
    if(selected.length){
      let answer = $('li.selected').attr('id');
      console.log(answer);
      checkAnswer(answer);
      console.log("hey world");
      $('.next').show();
      $('.submit').hide();
    } else {
      alert('Please select an answer');
    }
  });

  // retry button click listener
  $(".retry-button").click(function(){
  location.reload();
    console.log("Retake button clicked");
  });

  //click listener to make questions change color on hover
  $('ul.questions-selector').on('click', 'li', function(event) {
    $('.selected').removeClass();
    $(this).addClass('selected');
  });

});


  //FUNCTIONS
  function displayQuestion(){
    $('.question-number').text('Question Number: '+(current + 1)+"/5" );
    if(current < myQuestions.length){
      let listQuestion = myQuestions[current];
      $('h2').text(listQuestion.question);
      $('ul.questions-selector').html('');
      for (let i = 0; i < listQuestion.answers.length; i++) {
        $('ul.questions-selector').append('<li id = "'+i+'">'+listQuestion.answers[i] +'</li>'); //To Do Modify this to use symantic form Tag
      }
    } else {
      // show summary that says how many you got correct
      displayScore();
    }
  }

  // function stub to check answer
  function checkAnswer(answer){
    let listQuestion = myQuestions[current];
    if(listQuestion.correct == answer){
      score++;
      $('li.selected').addClass('correct');
    } else {
      $('li.selected').addClass('incorrect');
    }
    $('.score').text('Current Score: '+score);
    current++;
  }

  //function to display score
  function displayScore(){
    $('.questions').hide();
    $('.end-quiz').show();
    $('.end-score').text("Your score: " +score + '/5');
    if(score >= 4){
      $('.comment').text('Well done!');
    } else {
      $('.comment').text('Better luck next time!')
    }
  };