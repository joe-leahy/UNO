const STARTING_HAND = 7;
const DRAW_FOUR = 4;
const DRAW_TWO = 2;

// allCards.generateCards(); // all cards in deck
// allCards.draw([]);
// allCards.deal(STARTING_HAND);
const allCards = new Deck();

const game = new Game
game.initialize();
/** 
hands = initialize()
console.log(hands)
*/ 



/** 

function getPlayers() {
    const hands = [];
    
  const hand1 = new Hand();
  const hand2 = new Hand();
  
  hands.push(hand1, hand2);
  
  return hands;
}

hands = getPlayers()
allCards.deal(hands)
*/

/** 
function dealCards(players) {
  for (const dealing = 0; index < MAX_CARDS_IN_HAND; dealing++) {
    for (const player of players) {
      allCards.draw(player.hand);
    }
  }
  return players;
}

function main() {
  players = getPlayers();
}

main();
*/
// Take card off top
// let cardOnTop = allCards.deck[0]
// // TODO Add card to hand class
// allCards.deck.shift()

// console.log(cardOnTop)
// console.log(allCards)

/** 
 * 
 players = [Player]
function dealCards(){
    for (player of players){
    for (card in deck){
        hand.addCard(card)
        deck.pop(card)
        break

    }
    if player.hand.length() === 7
        break;
}

*/
