class Card {

    constructor(index, color){
    this.index = index;             // String
    this.color = color;             // String
    this.value = cardValues[index]; // Number

    }

}


class Hand {

    constructor(){
        this.hand = [];
    }

    addCard(card){
        
        
        this.hand.push(card)
    }


    playCard(card){
        this.hand.remove[card]
    }
        
 }


class Deck {
    constructor(){
        this.deck = []
    }

    generateCards(){ 
            const colors = ["Red", "Yellow", "Green", "Blue"]
            for (let index in cardValues){
                for (let color of colors){
                    console.log(index , color)
                    this.deck.push(new Card(index, color))
                    // new Deck.generateCards(index, color)
                }
            }
        }

       
    
    
    draw(){
        
    }
}
    

const cardValues = {
    "Zero": 0,
    "One": 1,
    "Two": 2,
    "Three": 3,
    "Four": 4,
    "Five": 5,
    "Six": 6,
    "Seven": 7,
    "Eight": 8,
    "Nine": 9,
}

