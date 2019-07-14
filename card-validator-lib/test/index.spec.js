const expect = require('chai').expect;
const cardValidator = require('../lib/index');

describe('Suite de testes para cardValidator()', () => {
  describe('Cenários de entradas válidas:', () => {
    it('Cartão válido de 16 dígitos como números', () => {
      expect(cardValidator(4984235062514488)).to.equal(true);
    });
    it('Cartão válido como string', () => {
      expect(cardValidator('4984235062514488')).to.equal(true);
    });
    it('Cartão válida com máscara', () => {
      expect(cardValidator('4984 2350 6251 4488')).to.equal(true);
    });
  })

  describe('Número de cartão inválido:', () => {
    it('Cartão inválido com máscara', () => {
      expect(cardValidator('4984 2350 6251 4489')).to.equal(false);
    });
    it('Cartão inválido como número', () => {
      expect(cardValidator(4984235062514489)).to.equal(false);
    });
  });

  describe('Cenário de mensagens de erro:', () => {
    it('Tipo de entrada inválida (booleano)', () => {
      expect(() => cardValidator(true)).to.throw('Tipo de entrada inválida: boolean');
    });
    it('Entrada válida menor que 16 digitos como número', () => {
      expect(() => cardValidator(8532)).to.throw('Tamanho da entrada inválida: 4');
    });
    it('Entrada válida menor que 16 digitos como string', () => {
      expect(() => cardValidator('8532')).to.throw('Tamanho da entrada inválida: 4');
    });
  });
})