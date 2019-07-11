/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game{ // CREATING GAME GLASS. (Entire Javascript file is this one class)
    constructor() {
       this.missed = 0;    // Track the number of missed guesses, initially set to 0
       this.phrase = []  // Store array of phrases
       this.activePhrase = null; // Initially there is no phrase chosen
    }

    startGame() // METHOD THAT INITIALIZES GAME
       // Overlay disappears and game screen appears
       // Previous lives reset
       // Previous keyboard reset
       // Random phrase is retrieved (getRandomPhrase())
       // Phrase is displayed with objects hidden (addPhraseToDisplay())
        

    getRandomPhrase() // METHOD THAT SELECTS A RANDOM PHRASE 
       // (Similar to Project 1 )


    handleInteraction() // METHOD THAT CONTROLS MOST OF THE GAME LOGIC
       // If user clicks on screen keyboard...
             // Store the value of what the user cliked

       // Disable whichever letter the user chose (Can't be chosen again)

       // If the chosen letter matches a letter in the phrase (checkLetter())...
             // Give it the "chosen" class (Highlights the letter in whatever color you choose... Css or JS)
             // Show the matched letter: Un-hides the letter object (showMatchedLetter())
             // If the user has won (checkForWin()) ...
                   // Ends game (gameOver())

                // Otherwise/else (letter does NOT match)...
                      // Give it the "wrong" class (Highlights the letter in whatever color you choose... Css or JS)
                      // Remove 1 life
        

    checkForWin() // METHOD THAT CHECKS IF USER HAS WON 
          // Check if there are no more hidden letters in the phrase object, return true or false


    removeLife() // METHOD THAT REMOVES LIFE FROM SCOREBOARD WHEN CALLED
          // Storing all the "lives" (The heart icons)
          // Points to which heart based on how many misses 
          // Replaces that heart image with the "lost" heart image
          // Missed guesses is incremented by 1

          // If missed guesses is the maximum amount...
               // Ends game(gameOver())
    
         
    gameOver() // METHOD THAT ENDS GAME AND DISPLAYS A MESSAGE ON WHETHER USER WINS OR LOSES
          // Leaves game screen and goes back to overlay

          // If user has max misses, they lose and...
                //Display losing message
                // Gives overlay losing class name and styles
             // Otherwise/else...
                    // Display winning message
                    // Gives overlay winning class name and styles (Star Wars Victory pic)
}            