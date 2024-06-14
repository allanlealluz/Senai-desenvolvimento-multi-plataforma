function imcTable(){
    let altura = parseFloat(prompt('Digite sua altura: '));
    let peso = parseFloat(prompt('Digite seu peso: '));
    if(altura < 1.20){
        if(peso < 60){
            console.log('A');
        }else if(peso > 60 && peso < 90){
            console.log('D');
        }else{
            console.log('G');
        }
    }else if(altura >= 1.20 && altura < 1.70){
        if(peso < 60){
            console.log('B');
        }else if(peso > 60 && peso < 90){
            console.log('E');
        }else{
            console.log('H');
        }

    }else{
        if(peso < 60){
            console.log('C');
        }else if(peso > 60 && peso < 90){
            console.log('F');
        }else{
            console.log('I');
        }

    }
}