/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game{ // CREATING GAME GLASS. (Entire Javascript file is this one class)
    constructor() { 
       this.missed = 0;
       this.phrases = [  
            new Phrase('Sinnerman'),
            new Phrase('What a Wonderful World'),
            new Phrase('Sittin on the Dock of the Bay'),
            new Phrase('Loveable'),
            new Phrase('A Song for you')
       ]
       this.activePhrase = null; // Initially there is no phrase chosen
      }

      getRandomPhrase() {// METHOD THAT SELECTS A RANDOM PHRASE 
            const randomPhrase = Math.floor(Math.random() * this.phrases.length);
                  return this.phrases[randomPhrase];
      }

      startGame() { // METHOD THAT INITIALIZES GAME
            $('#overlay').hide();
            this.activePhrase = this.getRandomPhrase();
            this.activePhrase.addPhraseToDisplay(); 
            //this.resetDisplay();
            // Previous lives reset
               // Previous keyboard reset
               // Random phrase is retrieved (getRandomPhrase())
               // Phrase is displayed with objects hidden (addPhraseToDisplay())
      }
            
     checkForWin() {
           //return ($('#phrase ul .hide').length === 0);
           return($("#phrase ul .show").length === $("#phrase ul .letter").length);

      }


      removeLife() {
            $("img")[this.missed].src = "images/lostHeart.png";
            this.missed += 1;
            if(this.missed === 5) {
                  this.gameOver();
                  //this.resetDisplay();
            }
            
      }

      gameOver() { 
            $('#overlay').show();
            if(this.checkForWin()) {
                  $("#game-over-message").text("You Win!")
                  $("#overlay").css('backgroundColor', 'green');
            } else {
                  $("#game-over-message").text("You Lose!")
                  $("#overlay").css('backgroundColor', 'red');
            
            }
            $("#phrase ul").empty();
           this.resetDisplay();
      }
      resetDisplay() {
            //this.missed=0;
            $("#qwerty .key").prop("disabled", false);
            document.querySelectorAll(`img[src*=lost]`).forEach(lives => lives.src = "images/liveheart.png");
            $("#qwerty .key").removeClass("chosen");
            $("#qwerty .key").removeClass("wrong");
      }
      // METHOD THAT ENDS GAME AND DISPLAYS A MESSAGE ON WHETHER USER WINS OR LOSES
      //           // Leaves game screen and goes back to overlay

      //           // If user has max misses, they lose and...
      //                 //Display losing message
      //                 // Gives overlay losing class name and styles
      //              // Otherwise/else...
      //                     // Display winning message
      //     
      // Gives overlay winning class name and styles (Star Wars Victory pic)
      handleInteraction(event) {
            // console.log("Help me");
            let chosenLetter = $(event.target).text();
            $(event.target).prop("disabled", true);
            if(this.activePhrase.checkLetter(chosenLetter)){
                  this.activePhrase.showMatchedLetter(chosenLetter)
                $(event.target).addClass("chosen");
                  if(this.checkForWin()) {
                        this.gameOver(true)
                  } 
            } else {
                  this.activePhrase.checkLetter(chosenLetter)
                        this.activePhrase.showMatchedLetter(chosenLetter)
                      $(event.target).addClass("wrong");
                //$(event.target).addClass().prop("disabled", true);
                this.removeLife();
            }
           
        }
 }     
       