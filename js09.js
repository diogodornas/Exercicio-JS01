// 9. Crie um algoritmo que armazene um número inteiro positivo, e gere
// um alerta com as seguintes mensagens:
// a. “Número é par!”, se o valor armazenado for par;
// b. “Número é impar!”, se o valor armazenado for ímpar;

const numero = parseInt(prompt('Fale um número:'))

if (numero % 2 === 0){
   alert(`O numero é par`);
}
else{ 
    alert(`O numero é impar`);
}