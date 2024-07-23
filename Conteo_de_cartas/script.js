let count = 0;

function countCards(cards) {
  const cardList = cards.split(',').map(card => card.trim());

  for (const card of cardList) {
    if (typeof card === 'number' && (card >= 2 && card <= 6)) {
      count += 1;
    } else if (typeof card === 'string' && ['2', '3', '4', '5', '6'].includes(card)) {
      count += 1;
    } else if (typeof card === 'number' && (card >= 7 && card <= 9)) {
      count += 0;
    } else if (typeof card === 'string' && ['7', '8', '9'].includes(card)) {
      count += 0;
    } else {
      count -= 1;
    }
    
  }

  if (count > 0) {
    document.getElementById('result').textContent = `${count} Bet`;
  } else {
    document.getElementById('result').textContent = `${count} Hold`;
  }
}