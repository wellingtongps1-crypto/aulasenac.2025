// suposição de um estoque com codigo de categoria
// categoria 0 = bebida
// categoria 1 = pereciveis
// categoria 2 = ração
// categoria 3 = limpeza
let categoria = 3;
switch (categoria){
    case 0: 
        console.log("bebida");
        break;
    case 1:
        console.log("perecível");
        break;
    case 2:
        console.log("ração");
        break;
    case 3:
        console.log("limpeza");
        break;
        default:
            console.log('categoria não encontrada');
            break;
}
console.log("=========== Testando com if ")
if (categoria == 0){
    console.log("bebida");
} else if (categoria == 1){
    console.log("perecível");
} else if (categoria == 2){
    console.log("ração");
} else if (categoria == 3){
    console.log("limpeza");
}
