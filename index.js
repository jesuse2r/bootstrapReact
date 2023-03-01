
const card = document.getElementById('card'),
  changeBtn = document.getElementById('change-card');

function generateRandomCard() {
  card.innerHTML = '';

  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
    pintas = ["♦️", "♥️", "♠️", "♣️"],
    randomValue = Math.floor(Math.random() * values.length),
    randomPinta = Math.floor(Math.random() * pintas.length),
    pintaTop = document.createElement('div'),
    cardValue = document.createElement('div'),
    pintaBottom = document.createElement('div'),
    pintaText = document.createTextNode(pintas[randomPinta]),
    pintaText2 = pintaText.cloneNode(),
    cardText = document.createTextNode(values[randomValue]);

  if (pintas[randomPinta] == "♥️") changeCardClass('#f01b1b', 'heart');
  else if (pintas[randomPinta] == "♦️") changeCardClass('#f01b1b', 'diamond');
  else if (pintas[randomPinta] == "♠️") changeCardClass('#1b1b1b', 'spade');
  else if (pintas[randomPinta] == "♣️") changeCardClass('#1b1b1b', 'club');
  
  pintaTop.className = 'card-top';
  cardValue.className = 'card-num';
  pintaBottom.className = 'card-bottom';

  pintaTop.appendChild(pintaText);
  cardValue.appendChild(cardText);
  pintaBottom.appendChild(pintaText2);

  card.appendChild(pintaTop);
  card.appendChild(cardValue);
  card.appendChild(pintaBottom);
}

function changeCardClass(color, cardClassName) {
  card.style.color = color;

  let cardClass = card
  .getAttribute('class')
  .split(' ');

  cardClass[1] = cardClassName;

  card.className = cardClass.join(' ');
}

document.body.onload = generateRandomCard;
changeBtn.onclick = generateRandomCard;







