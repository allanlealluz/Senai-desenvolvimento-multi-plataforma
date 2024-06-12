function Receita_Federal(salario){
    var imp = 0;
    var add = 0;
    if (salario > 0){
        if(salario < 500){
            imp = 5;
        } else if(salario >= 500 && salario <= 850){
            imp = 10;
        } else {
            imp = 15;
        }
        console.log(`O imposto será de ${imp}%`);
        if(salario >= 1500){
            add = 25;
            console.log('você é muito bem remunerado');
        } else if(salario > 750 && salario <= 1500){
            add = 50;
            console.log('você é bem remunerado');
        } else if(salario > 450 && salario <= 750){
            add = 75;
            console.log('você é mal remunerado');
        } else {
            add = 100;
        }
        console.log(`Seu novo salario será ${salario+add}`);
        return salario + add;
    } else {
        console.log('Digite um valor valido');
        return null;
    }
}

console.log(Receita_Federal(200));
