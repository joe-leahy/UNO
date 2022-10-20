//initialize global variables

const STARTING_HAND = 7;
const DRAW_FOUR = 4;
const DRAW_TWO = 2;

//========================================

class Game {
  constructor() {}

  initialize() {
    const allCards = new Deck();
    allCards.generateCards();
    allCards.shuffle();

    const hand1 = new Hand();
    const hand2 = new Hand();

    hand1.hand.push(allCards.deal(STARTING_HAND));
    hand2.hand.push(allCards.deal(STARTING_HAND));
    //all players hands
    const hands = [hand1, hand2];
    console.log(allCards);
    return hands;
    
  }
}

allCards.render();
allCards.render();
allCards.render();
