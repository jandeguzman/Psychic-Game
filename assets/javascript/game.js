   
   var wins = 0;
   var losses = 0;

   var guessesLeft = 9;
   var guessesMade = [];

   var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

   var guess = null;

    document.onkeyup = function() {

       var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
       console.log(userGuess);
       
       guessesMade.push(userGuess);
       updateGuessesLeft();
       updateGuessesMade();

       if (userGuess == computerGuess) {
           wins++;
           guessesLeft = 9;
           guessesMade.length = 0;
           alert("You Win!");
           document.querySelector('#wins').innerHTML = "Wins: " + wins;
       } 

       else if (guessesLeft == 0) {
           losses++;
           guessesLeft = 9;
           guessesMade.length = 0;
           alert("You Lost");
           document.querySelector('#losses').innerHTML = "Losses: " + losses;

       } 

       else if (userGuess !== computerGuess) {
           guessesLeft--;
       }
   };


    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    console.log(computerGuess);

   var updateGuessesLeft = function() {
       document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
   };

      var updateGuessesMade = function() {
    document.querySelector("#guessesMade").innerHTML = "Your guesses so far: " + guessesMade.join(', ');
   };

   var updateguess = function() {
       this.guess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
   };


var reset = function() {
    guessesLeft = 9;
    guessesMade= [];

    updateGuessesLeft();
    updateGuessesMade();
}



