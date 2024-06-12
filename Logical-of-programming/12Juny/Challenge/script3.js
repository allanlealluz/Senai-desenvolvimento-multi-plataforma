function Receita_Federal(opt){
    var imp = 0;
    var add = 0;
    var salario = prompt('Qual o salário: ');
    
    if (salario > 0){
        if(opt == 1){
            if(salario < 500){
                imp = 5;
            } else if(salario >= 500 && salario <= 850){
                imp = 10;
            } else {
                imp = 15;
            }
            console.log(`O imposto será de ${imp}%`);
        } else if(opt == 2){
            if(salario >= 1500){
                add = 25;
            } else if(salario > 750 && salario <= 1500){
                add = 50;
            } else if(salario > 450 && salario <= 750){
                add = 75;
            } else {
                add = 100;
            }
            console.log(`Seu novo salário será ${parseFloat(salario) + add}`);
            return parseFloat(salario) + add;
        } else if(opt == 3){
            if(salario < 700){
                console.log('Você é mal remunerado');
            } else {
                console.log('Você é bem remunerado');
            }
        } else {
            console.log('Opção inválida');
            return null;
        }
    } else {
        console.log('Digite um valor válido');
        return null;
    }
}