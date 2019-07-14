# Extrai links de um arquivo markdown (Node.js) v.1.0.0 (Projeto com objetivo pedagógico)

Esta biblioteca destina-se a extrair links de um arquivo markdown para um array de objetos contendo título e o link.
A implementação é uma função getLinksFromMd() que recebe uma string e devolve um vetor de objetos como mostra o exemplo:
 
 ```javascript
 const str = `Lorem ipsum
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et [dolore](https://en.wiktionary.org/wiki/dolore)...`;

//retorna
const links = [{ href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },{ href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' }]
```

## Como instalar:

```node
> npm install markdown-link-lib
```

## Como utilizar:

```shell
> const result = require("markdown-link-lib");
> result.getLinksFromMd("Texto teste sem link");
> // retorna um objeto vazio
```

## Conceitos

O markdown é um sistema de formatação aberto que possue a extensão *.md* , esse tipo de arquivo foi desenvolvido em 2004, por John Gruber e Aaron Swartz, com o objetivo de simplificar a estruturação de um texto tornando a escrita e a leitura mais simples e fácil. Com uma codificação mínima, além de visualmente mais "limpo" arquivos markdown podem ser convertidos facilmente para HTML.
O markdown marca alterações nos textos, tais como títulos, negrito, imagens, cabeçalhos, itálico, listas entre outros, apenas com os símbolos do teclado, sem usar teclas de atalho, menus, selecionando o texto e sem aquele visual complexo para os que não estão acostumados de HTML.