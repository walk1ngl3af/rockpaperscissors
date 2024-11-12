var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('choices');
});

/* Get Turn */
router.get('/turn', function(req, res){
  let playerChoice = req.query.choice;
  let pcChoice = getPcChoice(['rock', 'paper', 'scissors']);
  let winner = pickWinner(playerChoice, pcChoice);
  res.render('result', {
    playerChoice : playerChoice,
    pcChoice : pcChoice,
    winner : winner
  });
})
module.exports = router;


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function getPcChoice(options) {
  let choiceIndex = getRandomInt(3);
  return options[choiceIndex];
}
function pickWinner(playerChoice, pcChoice) {
  if (playerChoice === pcChoice) {
    return 'draw';
  }
  if (playerChoice === 'rock') {
    if (pcChoice === 'paper') {
      return 'pc';
    }
    if (pcChoice === 'scissors') {
      return 'player';
    }
  }
  if (playerChoice === 'paper') {
    if (pcChoice === 'scissors') {
      return 'pc';
    }
    if (pcChoice === 'rock') {
      return 'player';
    }
  }
  if (playerChoice === 'scissors') {
    if (pcChoice === 'rock') {
      return 'pc';
    }
    if (pcChoice === 'paper') {
      return 'player';
    }
  }
  return 'invalid';
}