function imcTable(altura,peso){
    if(altura < 1.20){
        if(peso < 60){
            return 'A'
        }else if(peso > 60 && peso < 90){
            return 'D'
        }else{
            return 'G'
        }
    }else if(altura >= 1.20 && altura < 1.70){
        if(peso < 60){
            return 'B'
        }else if(peso > 60 && peso < 90){
            return 'E'
        }else{
            return 'H'
        }

    }else{
        if(peso < 60){
            return 'C'
        }else if(peso > 60 && peso < 90){
            return 'F'
        }else{
            return 'I'
        }

    }
}

console.log(imcTable(1.80,80))