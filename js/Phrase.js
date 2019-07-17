/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
//const phrase;
class Phrase { // THE CLASS THAT ALL OF THE FUNCTIONS IN THIS FILE IS UNDER. 
    constructor(phrase) {
        this.phrase= phrase.toLowerCase(); //Makes all of the phrase letters entered to lowercase, so that there is no misunderstanding when it comes to case sensitivity. 
    }

    addPhraseToDisplay() { //THE FUNCTION RESPONSIBLE FOR ACTUALLY PLACING A PHRASE TO DISPLAY, OR AT LEAST THE SHELL OF THE PHRASE, THAT THE PLAYER NEEDS TO GUESS. 
        for(let i =0; i < this.phrase.length; i++){
                if (this.phrase[i] !== ' ') { //If the phrase is not equal to a space, meaning that there are no spaces that separate letters within the phrase, then append the li with the coinciding letters
                    $('ul').append(`<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`); 
            }   else {
                $('ul').append(`<li class="hide space">&nbsp;</li>`); //If there are spaces then, just make room for the spaces that seaparates words within a phrase by appending this <li></li>
            }
        }
    }
    
    checkLetter(letter) { //FUNCTION RESPONSIBLE FOR CHECKING THE VALIDITY OF THE LETTERS BEING SELECTED. 
        return this.phrase.includes(letter); // Returns the letter of the phrase, if the letter selected is apart of the phrase. 
    }

    showMatchedLetter(letter) { // FUNCTION RESPONSIBLE FOR SHOWING THE MATCHED LETTER. 
        $('#phrase ul .' + letter).addClass('show'); // Copies the HTML path to the letters, and matches those letters with the letter selected. if they match, show. If they don't hide.
        $('#phrase ul .' + letter).removeClass('hide');
    }
}