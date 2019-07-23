function cardValidator(card) {
  const cardString = parseString(card);
  const cardNumber = parseNumber(cardString);
  const luhnNumber = calculateLuhn(cardNumber);
  if (((10 - (luhnNumber % 10)) === cardNumber[cardNumber.length - 1])) {
    return true;
  }
  return false;
}

function parseString(card) {
  if (typeof card === 'string') {
    return card.replace(/\D/g, '').split('');
  } else if (typeof card === 'number') {
    return card.toString().split('');
  }
  throw new Error(`Tipo de entrada inválida: ${typeof card}`);
}

function parseNumber(arrayCard) {
  if (arrayCard.length === 16) {
    return arrayCard
      .map(Number);
  }
  throw new Error(`Tamanho da entrada inválida: ${arrayCard.length}`);
}

function calculateLuhn(arrayCard) {
  return arrayCard
    .slice(0, arrayCard.length - 1)
    .map((currentValue, index) => (index % 2 === 0 ? currentValue * 2 : currentValue))
    .map((currentValue) => ((currentValue > 9) ? (currentValue - 9) : currentValue)) 
    .reduce((acc, currentValue) => acc += currentValue);
}

exports.cardValidator = cardValidator;