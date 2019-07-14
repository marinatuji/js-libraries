function cpfValidator(cpf) {
  const cpfString = parseString(cpf);
  const cpfArray = parseNumber(cpfString);
  if (isAllTheSame(cpfArray)) {
    return false;
  }
  const firstDigit = calculateDigit(cpfArray, 9);
  const secondDigit = calculateDigit(cpfArray, 10);
  if (cpfArray[9] === firstDigit && cpfArray[10] === secondDigit) {
    return true;
  }
  return false;
}

function parseString(cpf) {
  if (typeof cpf === 'string') {
    return cpf.replace(/\D/g, '').split('');
  } else if (typeof cpf === 'number') {
    return cpf.toString().split('');
  }
  throw new Error(`Tipo de entrada inválida: ${typeof cpf}`);
}

function parseNumber(cpfString) {
  if (cpfString.length === 11) {
    return cpfString.map(Number);
  }
  throw new Error(`Verifique número de dígitos: Esperado 11 /Encontrado ${cpfString.length}`);
}

/*
Apesar de um cpf com todos os dígitos iguais satisfazer o cálculo de verificação,
esse cenário não é válido. Por isso essa exceção da regra de négocio foi adicionada.
*/
function isAllTheSame(cpf) {
  return cpf.every(value => value === cpf[0]);
}

function calculateDigit(cpf, digitIndex) {
  const sum = cpf.slice(0, digitIndex).reduce((acc, currentValue, currentIndex) => (
    acc += currentValue * (digitIndex + 1 - currentIndex)
  ), 0);
  return ((sum * 10) % 11) === 10 ? 0 : sum;
}

module.exports = cpfValidator;