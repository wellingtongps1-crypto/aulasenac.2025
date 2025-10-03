/*
Monte um programa para ler um valor e 
informar se o valor é maior do que 10. 
Caso o valor não seja, informe ‘valor menor ou igual’ 
*/

let valor = parseInt(prompt('Informe o Valor:'));
if (valor > 10) {
    alert('Valor informado é maior que 10');
} else {
    alert('Valor informado é menor ou igual a 10');
}