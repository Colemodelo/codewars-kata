// Rock-Paper-Scissors Big Bang Style

// According to Sheldon Cooper the following is true:

//     Scissors cuts Paper
//     Paper covers Rock
//     Rock crushes Lizard
//     Lizard poisons Spock
//     Spock smashes Scissors
//     Scissors decapitates Lizard
//     Lizard eats Paper
//     Paper disproves Spock
//     Spock vaporizes Rock
//     ( and as it always has ) Rock crushes Scissors

// Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!" or "Draw!".

// Values will be given as one of "rock", "spock", "paper", "lizard", "scissors".

const rpsls = (pl1,pl2) => {
  return pl1 === 'scissors' && pl2 === 'paper' ? 'Player 1 Won!' :
    pl2 === 'scissors' && pl1 === 'paper' ? 'Player 2 Won!' :
    pl1 === 'paper' && pl2 === 'rock' ? 'Player 1 Won!' :
    pl2 === 'paper' && pl1 === 'rock' ? 'Player 2 Won!' :
    pl1 === 'rock' && pl2 === 'lizard' ? 'Player 1 Won!' :
    pl2 === 'rock' && pl1 === 'lizard' ? 'Player 2 Won!' :
    pl1 === 'lizard' && pl2 === 'spock' ? 'Player 1 Won!' :
    pl2 === 'lizard' && pl1 === 'spock' ? 'Player 2 Won!' :
    pl1 === 'spock' && pl2 === 'scissors' ? 'Player 1 Won!' :
    pl2 === 'spock' && pl1 === 'scissors' ? 'Player 2 Won!' :
    pl1 === 'scissors' && pl2 === 'lizard' ? 'Player 1 Won!' :
    pl2 === 'scissors' && pl1 === 'lizard' ? 'Player 2 Won!' :
    pl1 === 'lizard' && pl2 === 'paper' ? 'Player 1 Won!' :
    pl2 === 'lizard' && pl1 === 'paper' ? 'Player 2 Won!' :
    pl1 === 'paper' && pl2 === 'spock' ? 'Player 1 Won!' :
    pl2 === 'paper' && pl1 === 'spock' ? 'Player 2 Won!' :
    pl1 === 'spock' && pl2 === 'rock' ? 'Player 1 Won!' :
    pl2 === 'spock' && pl1 === 'rock' ? 'Player 2 Won!' :
    pl1 === 'rock' && pl2 === 'scissors' ? 'Player 1 Won!' : 
    pl2 === 'rock' && pl1 === 'scissors' ? 'Player 2 Won!' : 'Draw!'

}
