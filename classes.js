class Card {
  constructor(index, color) {
    this.index = index; // String
    this.color = color; // String
    this.value = cardValues[index]; // Number
  }
}

class Hand {
  constructor() {
    this.hand = [];
  }

  addCard(card) {
    this.hand.push(card);
    allCards.pop(card);
    // TODO FIX deck
  }

  playCard(card) {
    /*
        if card.value === lastPlayedCard.value || card.color === lastPlayedCard.color{
        this.hand.remove[card]
        }

    */
  }
}

class Deck {
  constructor() {
    this.deck = [];
  }

  generateCards() {
    const colors = ["Red", "Yellow", "Green", "Blue"];
    for (let index in cardValues) {
      for (let color of colors) {
        // console.log(index , color)
        this.deck.push(new Card(index, color));
        // new Deck.generateCards(index, color)
      }
    }
  }

  shuffle() {
    const shuffled_deck = [];
    while (this.deck.length) {
      let randomCard = this.deck.splice(~~(Math.random() * this.deck.length),1)[0];
      shuffled_deck.push(randomCard);
    }
    this.deck = shuffled_deck;
  }

  draw() {
    let cardOnTop = this.deck.shift();
    // TODO Add card to hand class
    
    
    return cardOnTop;
  }


  
// Array[Hands] deal('num of players', 'num of cards')
  deal(numCards) {
   const dealtHand = [];

    for(let i=0; i < numCards;i++){
        dealtHand.push(this.draw())
    }
        return dealtHand
   }


   render(){
    let player1 = document.querySelector('#top')
    let cards = document.createElement('div')

    for (const card of dealtHand){
        let fullCard = document.createElement('span')
        fullCard.innerHTML = `
        Card: ${card.index}
        Color: ${card.color}
        `
        cards.append(card)

    }

    player1.replaceChildren(cards)

   }


}
    



const cardValues = {
  Zero: 0,
  One: 1,
  Two: 2,
  Three: 3,
  Four: 4,
  Five: 5,
  Six: 6,
  Seven: 7,
  Eight: 8,
  Nine: 9,
};
