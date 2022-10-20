class Game {
    constructor(){
    }

    initialize(){
        allCards.generateCards();
        allCards.shuffle();

        const hand1 = new Hand();
        const hand2 = new Hand();

        hand1.hand.push(allCards.deal(STARTING_HAND));
        hand2.hand.push(allCards.deal(STARTING_HAND));
        //all players hands
        const hands = [hand1, hand2];

        return hands;

    }
}

const game = new Game
game.initialize();