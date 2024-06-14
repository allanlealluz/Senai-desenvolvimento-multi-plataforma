function FeeCalculator(){
    let cod = prompt('Digite o codigo da localidade: ')
    let carga = prompt('Digite a carga: ')
    let codcarga = prompt('Digite o código da carga: ')
    if(codcarga > 10 && codcarga<= 20){
        valor = 100*1000*carga;
    }else if(codcarga > 20 && codcarga <= 30){
        valor = 250*1000*carga;
    }else{
        valor = 340*1000*carga;
    }
    if(cod == 1){
        imposto = valor*0.35;
    }else if(cod == 2){
        imposto = valor*0.25;
    }else if(cod == 3){
        imposto = valor*0.15;
    }else if(cod == 4){
        imposto = valor*0.05;
    }else{
        imposto = 0;
    }
   console.log( `O valor da carga é de R$${valor}, já o imposto é de ${imposto}`);
}
