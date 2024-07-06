// Usa conchetes
let frutas = ["Maça","Banana","Laranja","Pera"];

//Metódo construtor
let carros = new Array("Fiat","Toyota","Honda");

//Acesso Elementos
let fruta01 = frutas[0];
let fruta02 = frutas[1];
let fruta03 = frutas[2];
let fruta04 = frutas[3];

//Modificando Elementos
frutas[0] = "Uva";
frutas.push('Uva') // adiciona elemento no final da lista
frutas.unshift('Uva') // adiciona elemento no inicio da lista
frutas.pop() // remove o ultimo elemento da lista
frutas.shift() // remove o primeiro elemento da lista
let tamanho = frutas.length;

//Percorrendo a lista
for (let i = 0; i < tamanho; i++) {
    console.log(frutas[i]);
}
/*
//Percorrendo a lista com forEach
frutas.forEach(function(value, index) {
    console.log(index + ": " + value);
})
//MAP
let numeros = [0,1,2,3,4,5,6,7,8,9,10];
let numerosDobrados = numeros.map(function(value) {
    return value * 2;
})
console.log(numerosDobrados);
*/
let numero2 = [1,5,6,9];
let total = numero2.reduce((acumulador,numero2,indice,original) => {
    console.log(`${acumulador}-total até o momento`)
    console.log(`${numero2}-valor atual`)
    console.log(`${indice}-indice atual`)
    console.log(`${original}-array original`)
    return acumulador += numero2;
})
listagem = [5,3,"Jose",44,"Fernanda"];
let busca = listagem.find((item)=>{
    return item === "Jose";
})
console.log(busca)
//Filter
let numeros3 = [1,2,3,4,5,6,7,8,9,10];
let numerosPares = numeros3.filter((numero)=>{
    return numero % 2 === 0;
})
let Cadastro = ["Mauro", "Pedro","Henrique","Batista","Allan","Evangelista"];
let busca2 = Cadastro.filter((nome)=>{
    return nome.length > 6;
})
console.log(busca2)
