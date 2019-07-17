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
                    $('ul').append(`<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`); 
            }   else {
                $('ul').append(`<li class="hide space">&nbsp;</li>`);
            }
        }
    }
    
    checkLetter(letter) {
        return this.phrase.includes(letter);
        // if(this.phrase.includes(letter)){
        //     return true;
        // } else {
        //     return false;
        // }
    }
    showMatchedLetter(letter) {
        $('#phrase ul .' + letter).addClass('show');
        $('#phrase ul .' + letter).removeClass('hide');
    }


 }