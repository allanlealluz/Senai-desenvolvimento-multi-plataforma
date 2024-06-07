function SomarNumbers(x,y){
    let z = parseInt(x) + parseInt(y);
    return x+y;
}
//Solitação para o Usuario
let x = parseInt(prompt('digite um valor: '));
let y = parseInt(prompt('digite outro valor: '));
z = x+y;
console.log(`A soma é: ${z}`);
alert(z)