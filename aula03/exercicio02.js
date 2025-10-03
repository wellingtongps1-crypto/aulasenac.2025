/*
Ler a idade da pessoa e informar se pode votar ou não
*/

let idade = parseInt(prompt('Informe sua Idade:'));
if (idade >= 16) {
    alert('Parabéns!!! Você pode Votar!!!');
} else {
    alert('Aguarde!!! Você ainda não pode Votar');
}