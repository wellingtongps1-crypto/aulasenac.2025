// Classificar Idade
let idade = parseInt(prompt('Digite a Idade'));
if (idade < 12){
    console.log("Criança");
} else if (idade < 18){
    console.log("Adolescente");
} else if (idade < 65){
    console.log("Adulto");
} else {
    console.log("Idoso")
}

