// Verificar o dia da Semana
// Domingo = 1
// Segunda Feira = 2
// Terça Feira = 3
// Quarta Feira = 4
// Quinta Feira = 5
// Sexta Feira = 6
// Sabado = 7

let numero = parseInt(prompt('Digite um Numero de 1 a 7:'));
switch (numero){
    case 1: 
        console.log("Domingo");
        break;
    case 2: 
        console.log("Segunda Feira");
        break;
    case 3: 
        console.log("Terça Feira");
        break;
    case 4:
        console.log("Quarta Feira");
        break;
    case 5:
        console.log("Quinta Feira");
        break;
    case 6:
        console.log("Sexta Feira");
        break;
    case 7:
        console.log("Sabado");
        break;
default: console.log("Número inválido");
}
