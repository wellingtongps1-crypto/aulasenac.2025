/*
Nota do aluno
*/
let nota1 = parseFloat(prompt('Informe a Nota 01'));
let nota2 = parseFloat(prompt('Informe a Nota 02'));
let media = (nota1 + nota2)/2;
if (media>=6){
    alert('APROVADO');
}  else {
    alert('REPROVADO');
}