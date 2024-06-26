function Sum(value){
    sum = 0
    for(let i=0;i< value.length;i++){
       sum+=value[i]
    }
    return sum;
}
function filterPar(value){
    newArray = value.filter((item){
        return numero % 2 === 0;
    })
    return newArray;
}
function Invert(value){
    invert = [];
    for(let i = 0; i < value.length; i++){
        invert.push(value[i] * -1)
    }
    return invert;
}
function Concat(value,value2){

}
