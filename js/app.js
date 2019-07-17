

let game; //ENSURES THAT THE WHEN THE PLAYER RESETS THE GAME, THAT THEY ARE ACTUALLY STARTING A NEW GAME. 
$('#btn__reset').on('click', function () {
    game = new Game();
    game.startGame();
});


$("#qwerty .key").click(function(event) { // ALLOWS THE KEYS (LETTERS) SELECTED ON THE SCREEN, TO EITHER APPEAR ON THE SCREEN IF THE LETTERS MATCH, AND NOT SHOW IF THE LETTERS DON'T MATCH. 
    game.handleInteraction(event);
});