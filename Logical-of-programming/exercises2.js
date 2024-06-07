function WinIs(){
    console.log('Ter sucesso é falhar repetidas vezes, mas sem perder o entusiasmo')
}
function Add35percent(){
    let x = parseInt(prompt('digite seu salário'))
    console.log(x*1.35)
}
function MeterToCenti(){
    let x = parseInt(prompt('digite a distância em metros'))
    console.log(x+" metros equivale a "+x*100+" centrimetros")
}
function Media(){
    console.log((10+15+12)/3)
}
function Befoafter(){
    let x = parseInt(prompt('digite um numero'))
    console.log('antecessor:'+(x-1)+' |'+x+'| sucessor: '+(x+1))
}
function Cadastro(){
    let nome = prompt('digite seu nome');
    let idade = parseInt(prompt('digite sua idade'));
    let sexo = prompt('digite seu sexo');
    alert('nome:'+nome+' idade:'+idade+' sexo:'+sexo);
}
function SumDivsub(){
    let x = parseInt(prompt('digite um numero'))
    let y = parseInt(prompt('digite outro numero'))
    console.log(x+y)
    console.log(x-y)
    console.log(x/y)
}
function ShowNumber(){
    let x = parseInt(prompt('digite um numero'))
    console.log(`O numero informado foi ${x}`)
}
function IMC(){
    let altura = parseFloat(prompt('digite sua altura'))
    let imc = (72.7*altura)-58
    console.log(imc)
}
