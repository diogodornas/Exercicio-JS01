// 1. Desenvolva um algoritmo que armazene o valor 10 em uma variável
// A e o valor 20 em uma variável B. A seguir (utilizando apenas
// atribuições entre variáveis) troque os seus conteúdos fazendo com
// que o valor que está em A passe para B e vice-versa. Ao final,
// escrever os valores que ficaram armazenados nas variáveis.

let A = 10
let B = 20
let X = 0

console.log(`O valor de A é ${A}`);
console.log(`O valor de B é ${B}`);

X = A
A = B
B = X

console.log(`O valor de A é ${A}`);
console.log(`O valor de B é ${B}`);

