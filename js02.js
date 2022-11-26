// 2. Desenvolva um algoritmo para ler o número total de eleitores de um
// município, o número de votos brancos, nulos e válidos. Calcular e
// escrever o percentual que cada um representa em relação ao total
// de eleitores.

const eleitores_total = prompt('Total de Eleitores')
const brancos = prompt('Votos em branco')
const nulos = prompt('Votos nulos')
const validos = prompt('Votos válidos')

const percentual_brancos = (brancos/eleitores_total)*100
const percentual_nulos = (nulos/eleitores_total)*100
const percentual_validos = (validos/eleitores_total)*100

alert (`O percentual de votos brancos é ${percentual_brancos}%`)
alert (`O percentual de votos nulos é ${percentual_nulos}%`)
alert (`O percentual de votos válidos é ${percentual_validos}%`)
