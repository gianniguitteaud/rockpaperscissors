function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;

  this.pairs = {
    rock : { 'beats' : ['scissors', 'lizard'] },
    paper : { 'beats': ['rock','spock'] },
    lizard: { 'beats': ['spock','paper'] },
    scissors : {'beats': ['paper', 'lizard'] },
    spock: {'beats': ['scissors','rock'] }
  };

  this.same_pick = function () {
    return (this.player1.pick === this.player2.pick )
  }
}

Game.prototype.winner = function(player1, player2) {
  if( this.same_pick() === true ) {
    return null
  }

  if( this.pairs[this.player1.pick]['beats'].indexOf(this.player2.pick) !== -1 ){
    return this.player1
  } else {
    return this.player2
  }

}

function Player(name) {
  this.name = name;
}

Player.prototype.picks = function(pick) {
  this.pick = pick
}