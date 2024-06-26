function Sum(value){
    sum = 0
    for(let i=0;i< value.length;i++){
       sum+=value[i]
    }
    return sum;
}
function filterPar(value){
    newArray = value.filter((item)=>{
        return item % 2 === 0;
    })
    return newArray;
}
function Invert(value){
    invert = [];
    for(let i = 0; i < value.length; i++){
        invert.unshift(value[i])
    }
    return invert;
}
function Concat(value,value2){
    concat = value.concat(value2);
    return concat;
}
function verifyDuplicate(value){
    novaArr = value.filter((este,i)=>value.indexOf(este)===i);
    return novaArr;
}
console.log(Sum([1,2,3,54,8]));
console.log(filterPar([1,2,3,54,8]));
console.log(Invert([1,2,3,54,8]));
console.log(Concat([1,2,3,54,8],[1,22,5,54,7]));
console.log(verifyDuplicate([1,2,3,54,8]));
