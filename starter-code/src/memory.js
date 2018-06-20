var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = [];
  this.pairsGuessed = [];
};

MemoryGame.prototype.shuffleCard = function (array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

    this.pairsClicked++;

    if (firstCard === secondCard) {
        this.pairsGuessed++;
        return true;
    } else {
        return false;
    }

}

MemoryGame.prototype.finished = function () {
if (this.pairsGuessed === 0) {
    return false;
} else if (this.pairsGuessed === 12){
    return true;
} else {
    return false;
}
};