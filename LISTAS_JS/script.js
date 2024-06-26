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