/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game{ // CREATING GAME GLASS. (Entire Javascript file is this one class)
    constructor() {
       this.missed = 0;    // Track the number of missed guesses, initially set to 0
       this.phrases = [  // Store array of phrases
            new Phrase('Sinnerman Nina Simone'),
            new Phrase('What a Wonderful World'),
            new Phrase('Sittin on the Dock of the Bay'),
            new Phrase('Loveable'),
            new Phrase('A Song for you Donny Hathaway')
      ];
       this.activePhrase = null; // Initially there is no phrase chosen
      }

      getRandomPhrase() {// METHOD THAT SELECTS A RANDOM PHRASE 
            const randomPhrase = Math.floor(Math.random() * this.phrases.length);
                  return this.phrases[randomPhrase];
      }

      startGame() { // METHOD THAT INITIALIZES GAME
            $('#overlay').hide();
            this.activePhrase = this.getRandomPhrase();   // Overlay disappears and game screen appears
            this.activePhrase.addPhraseToDisplay(); // Previous lives reset
               // Previous keyboard reset
               // Random phrase is retrieved (getRandomPhrase())
               // Phrase is displayed with objects hidden (addPhraseToDisplay())
      }
            
     checkForWin() {
            if($('#phrase .show').length === $('#phrase .letter').length){
                  this.gameOver();
            }
     }

      //     handleInteraction() // METHOD THAT CONTROLS MOST OF THE GAME LOGIC
      //        // If user clicks on screen keyboard...
      //              // Store the value of what the user cliked

      //        // Disable whichever letter the user chose (Can't be chosen again)

      //        // If the chosen letter matches a letter in the phrase (checkLetter())...
      //              // Give it the "chosen" class (Highlights the letter in whatever color you choose... Css or JS)
      //              // Show the matched letter: Un-hides the letter object (showMatchedLetter())
      //              // If the user has won (checkForWin()) ...
      //                    // Ends game (gameOver())

      //                 // Otherwise/else (letter does NOT match)...
      //                       // Give it the "wrong" class (Highlights the letter in whatever color you choose... Css or JS)
      //                       // Remove 1 life
            

     


      //     removeLife() // METHOD THAT REMOVES LIFE FROM SCOREBOARD WHEN CALLED
      //           // Storing all the "lives" (The heart icons)
      //           // Points to which heart based on how many misses 
      //           // Replaces that heart image with the "lost" heart image
      //           // Missed guesses is incremented by 1

      //           // If missed guesses is the maximum amount...
      //                // Ends game(gameOver())
      
            
      //     gameOver() // METHOD THAT ENDS GAME AND DISPLAYS A MESSAGE ON WHETHER USER WINS OR LOSES
      //           // Leaves game screen and goes back to overlay

      //           // If user has max misses, they lose and...
      //                 //Display losing message
      //                 // Gives overlay losing class name and styles
      //              // Otherwise/else...
      //                     // Display winning message
      //                     // Gives overlay winning class name and styles (Star Wars Victory pic)
}            