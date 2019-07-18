/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


 class Game{ // CREATING GAME GLASS. (Entire Javascript file is this one class)
    constructor() { 
       this.missed = 0;
       this.phrases = [  // the array that holds all of the phrases that will evenutally display while the user is playing the game. 
            new Phrase('Sinnerman'), 
            new Phrase('What a Wonderful World'),
            new Phrase('Sittin on the Dock of the Bay'),
            new Phrase('Loveable'),
            new Phrase('A Song for you')
       ]
       this.activePhrase = null; // ensures that there is no phrase that is intially selected
      }

      getRandomPhrase() {// METHOD THAT SELECTS A RANDOM PHRASE 
            const randomPhrase = Math.floor(Math.random() * this.phrases.length); // the random math that selects a phrase at random. 
                  return this.phrases[randomPhrase];
      }

      startGame() { // METHOD THAT INITIALIZES GAME
            $('#overlay').hide(); // once the game starts, the '#overlay' hides.
            this.activePhrase = this.getRandomPhrase(); //makes the active phrase (the phrase that is supposed to appear) equal randomly selected in the getRandomPhrase function.
            this.activePhrase.addPhraseToDisplay();// takes the getRandomPhrase that now equals the boxes for phrase the user is supposed to guess appear on the webpage 
      }
            
     checkForWin() { //CHECKS TO SEE IF THE PLAYER WON THE GAME
           return($("#phrase ul .show").length === $("#phrase ul .letter").length);//
            //Ensures that the phrase shown on display equals the input of letters that the user selects. if they do, then the player wins. 
            //Because we are only looking for a return of true or false, we are able to directly return the 
      }


      removeLife() { //IF THE PLAYER DOES NOT SELECT THE CORRECT LETTER, THIS METHOD ENSURES THAT A LIFE IS REMOVED. 
            $("img")[this.missed].src = "images/lostHeart.png"; //if the user selects a wrong letter then this image will appear. (turning a blue heart to a gray heart to signify that the player no longer has that life.)
            this.missed += 1; 
            if(this.missed === 5) { //if the player misses five letters, then the game is over, and the player loses the game. 
                  this.gameOver();
                  //this.resetDisplay();
            }
            
      }

      gameOver() { //THE FUNCTION THAT CONTROLS THE THE GAME ENDING     
            $('#overlay').show(); //when the game is over, the the overlay start page reappears.
            if(this.checkForWin()) {//before, the page is actually loaded, the functions checks to see if the player won the game...
                  $("#game-over-message").text("You Win!")   //If the user won the game, then the message "You win" will appear, and the background color will appear green.
                  $("#overlay").css('backgroundColor', 'green');
            } else {                                              //If the player loses then, the message "You Lose" will appear and the background color will appear red.
                  $("#game-over-message").text("You Lose!")
                  $("#overlay").css('backgroundColor', 'red');
            
            }
            $("#phrase ul").empty(); // Ensures that after the game is relaoded, that the previous phrase no longer appear on the display while the player is playing the game. 
           this.resetDisplay();
      }

      resetDisplay() { //THE FUNCTION THAT CHANGES THE GAMES DISPLAY BACK TO ITS DEFAULT
            $("#qwerty .key").prop("disabled", false); // changes the display of the onscreen keyboard so that the highlighted
            document.querySelectorAll(`img[src*=lost]`).forEach(lives => lives.src = "images/liveheart.png");
            $("#qwerty .key").removeClass("chosen"); // removes the class of chosen to the letter selected, because it has a color attached to it that makes the letter blue and no longer active when selected
            $("#qwerty .key").removeClass("wrong");  // removes the class of wrong to the wrong letter selected, because it has a color attached to it that makes the letter orange and no longer active when selected
      }

      handleInteraction(event) { //FUNCTION THAT CONTROLS THAT INTERACTION WITH THE PLAYER DURING THE GAME. 
            let chosenLetter = $(event.target).text(); 
            $(event.target).prop("disabled", true); // Makes the letter that was selected disabled, so that it cannot be chosen again during the game. 
            
            if(this.activePhrase.checkLetter(chosenLetter)){      // If the letters selected by the user mataches the letters of the phrase, then the player has won the game. 
                  this.activePhrase.showMatchedLetter(chosenLetter)
                $(event.target).addClass("chosen"); // Adds the class of chosen to the letters that the player selected correct.
                  if(this.checkForWin()) {
                        this.gameOver(true)
                  } 
            } else {
                  this.activePhrase.checkLetter(chosenLetter) 
                        this.activePhrase.showMatchedLetter(chosenLetter)
                      $(event.target).addClass("wrong"); // Performs the same function that the code above does on line 71, however, this code is to ensure that when the player selected a wrong letter that a class of wrong is applied to the letter.
                
                this.removeLife(); // And then removes a life (a lostHeart.png img).
            }
           
        }
 }     
       