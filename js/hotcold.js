$(document).ready(function(){

    //Display information modal box
    $(".what").click(function(){
      $(".overlay").fadeIn(1000);

    });

    //Hide information modal box
    $("a.close").click(function(){
      $(".overlay").fadeOut(1000);
    });

   // Variables
   var secretNumber;
   var checkInput;
   var userInput;

   //add text to red box
   var giveFeedback = function (feedback) {
    $("#feedback").text(feedback);
   };

   //gount the # of guesses
  var guessCount = function(num) {
    $("#count").text(num);
  };

  //clear the guess#
  var clearGuesses = function() {
    $("#userGuess").val("");
  };

   //press new game for new game
  $(".new").click(function(e) {
    e.preventDefault();
    newGame();
  });

  //newGame function
  var newGame = function () {
    secretNumber = Math.floor(Math.random() *100) + 1;
    guessCount (0);
    clearGuesses();
    $("#guessList li").remove("");
    giveFeedback("Make your guess!");
   };

    $("form").submit(function(e){
    e.preventDefault(); 
    userInput(+$("input").val());
  });


//checking the guess
var userInput = function(userGuess) {
  clearGuesses();
  //is it a number in right parameters
    if (isNaN(userGuess) || userGuess % 1 !==0 || userGuess > 100 || userGuess < 1)
      {
        giveFeedback("Please guess a whole number between 1 & 100");
      }
//what's the difference between the guess and the secret number
    else {
      var count = +$("#count").text() + 1;
      guessCount(count);
      var difference = Math.abs(userGuess - secretNumber);
      //add the guess
      $("#guessList").append("<li>" + userGuess + "</li>");
      //tell if the winner
    if (difference === 0)
    {
      giveFeedback(userGuess + " is the winning number!");
      var playAgain = alert("you got it in " + count + " guesses! To play again click +NEW GAME");
    }
    //tell the temperature
      else if (difference <= 2) {
      giveFeedback ("you're on fire!");
      }
      else if (difference <= 5) {
      giveFeedback ("so, so hot");
      }
      else if (difference <= 10) {
        giveFeedback ("hot");
      }
      else if (difference <= 20) {
        giveFeedback ("warm");
      }
      else if (difference <= 40) {
        giveFeedback ("cold!");
      }
      else if (difference <= 50) {
        giveFeedback ("cccccold!");
      }
      else if (difference <= 60) {
        giveFeedback ("fffreeezing!");
      }
      else if (difference > 61) {
        giveFeedback ("sub-zero!");
      }
   };
};

 newGame();


});


