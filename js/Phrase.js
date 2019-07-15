/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
//const phrase;
class Phrase {
    constructor(phrase) {
        this.phrase= phrase.toLowerCase();

    }

    addPhraseToDisplay() {
        for(let i =0; i < this.phrase.length; i++){
                if (this.phrase[i] !== ' ') {
                    $('div#phrase.section').append(`<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`); 
            }   else {
                $('div#phrase.section').append(`<li class="hide space">&nbsp;</li>`);
            }
        }
    }
    
//     checkLetter() {

//     }
//     showMatchedLetter() {

//     }


// }
}