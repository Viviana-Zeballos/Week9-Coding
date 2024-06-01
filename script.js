class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }

  displayHand() {
    console.log(`${this.name}'s hand:`, this.hand);
  }
}

class Computer {
  constructor() {
    this.hand = [];
  }

  displayHand() {
    console.log("Computer's hand:", this.hand);
  }
}

class Card {
  constructor(suit, cardNumber) {
    (this.suit = suit), (this.cardNumber = cardNumber);
  }
  // This is a method to the card class that will return the following letters into numerical values.
  convertCardNumber(card) {
    if (card === "J") {
      return 11;
    } else if (card === "Q") {
      return 12;
    } else if (card === "K") {
      return 13;
    } else if (card === "A") {
      return 14;
    } else {
      return card;
    }
  }
}

class Deck {
  constructor() {
    let suits = ["Clubs", "Spades", "Diamonds", "Hearts"];
    let cardNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    this.deck = [];

    for (let i = 0; i < suits.length; i++) {
      for (let x = 0; x < cardNumbers.length; x++) {
        let card = new Card(suits[i], cardNumbers[x]);

        this.deck.push(card);
      }
    }
  }
  //shuffle deck
  shuffleDeck() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }

    return this.deck;
  }
  dealCardsToPlayer(player, numCards) {
    for (let i = 0; i < numCards; i++) {
      player.hand.push(this.deck.pop());
    }
  }

  dealCardsToComputer(computer, numCards) {
    for (let i = 0; i < numCards; i++) {
      computer.hand.push(this.deck.pop());
    }
  }

  playGame() {
    let player = new Player("Player");
    let computer = new Computer();

    this.shuffleDeck();
    this.dealCardsToPlayer(player, 26);
    this.dealCardsToComputer(computer, 26);

    console.log("initial hands dealt:");
    player.displayHand();
    computer.displayHand();

    let playerPoints = 0;
    let computerPoints = 0;

    for (let i = 0; i < 26; i++) {
      let playerCard = player.hand[i];
      let computerCard = computer.hand[i];

      console.log(`Turn ${i + 1}:`);
      console.log(`${player.name} plays:`, playerCard);
      console.log(`Computer plays:`, computerCard);

      let playerCardValue = playerCard.cardNumber;
      let computerCardValue = computerCard.cardNumber;

      // If statements are in place to determine who wins the turn.
      if (playerCardValue > computerCardValue) {
        console.log(`${player.name} wins this turn!`);
        playerPoints++;
      } else if (playerCardValue < computerCardValue) {
        console.log(`Computer wins this turn!`);
        computerPoints++;
      } else {
        console.log(`It's a tie! No points awarded.`);
      }
    }
    console.log("Final Score:");
    console.log(`${player.name}: ${playerPoints} points`);
    console.log(`Computer: ${computerPoints} points`);

    if (playerPoints > computerPoints) {
      console.log(`${player.name} wins the game!`);
    } else if (playerPoints < computerPoints) {
      console.log(`Computer wins the game!`);
    } else {
      console.log(`It's a tie game!`);
    }
  }
}

let cardDeck = new Deck();
cardDeck.shuffleDeck();
cardDeck.playGame();
