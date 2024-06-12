function Reajuste(cod,salario){
if(cod == 1){
    salario = salario * 1.5;
    return "Cargo escriturário. Aumento de salario 50%, foi para "+salario;
}else if(cod == 2){
    salario = salario * 1.35;
    return "Cargo secretário. Aumento de salario 35%, foi para "+salario;
}else if(cod == 3){
    salario = salario * 1.2;
    return "Cargo Caixa. Aumento de salario 20%, foi para "+salario;
}else if(cod == 4){
    salario = salario * 1.1;
    return "Cargo Gerente. Aumento de salario 10%, foi para "+salario;
}else{
    return "Cargo escriturário. Aumento de salario 50%, foi para "+salario;
}
}/*
function Reajuste2(cod, salario) {
    const coeficientes = {
        1: 1.5,
        2: 1.35,
        3: 1.2,
        4: 1.1
    };

    const cargo = {
        1: "escriturário",
        2: "secretário",
        3: "caixa",
        4: "gerente"
    };

    const coeficiente = coeficientes[cod] || 1.5;
    const novoSalario = salario * coeficiente;

    return `Cargo ${cargo[cod] || "escriturário"}. Aumento de salário ${(coeficiente - 1) * 100}%, foi para ${novoSalario} ahegao`;
}

console.log(Reajuste2(3,1000)
console.log(Reajuste(3,1000));