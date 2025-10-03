// Criar uma calculadora

let n1 = parseFloat(prompt("Digite o primeiro número:"));  
let operacao = prompt("Digite a operação (+, -, *, /):");
let n2 = parseFloat(prompt("Digite o segundo número:"));  
let resultado; 
switch (operacao) {  
case "+": resultado = n1 + n2; 
break;  
case "-": resultado = n1 - n2;
break;  
case "*": resultado = n1 * n2; 
break;  
case "/": resultado = n2 !== 0 ? n1 / n2 : "Divisão por zero não permitida";  
break; 
default: resultado = "Operação inválida";  
}  
console.log("Resultado:", resultado); 