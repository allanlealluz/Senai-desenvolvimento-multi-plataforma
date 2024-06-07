function Sum(){
    t = parseInt(prompt('digite um numero'));
    u = parseInt(prompt('digite um numero'));
    v = parseInt(prompt('digite um numero'));
    w = parseInt(prompt('digite um numero'));
    console.log(t+u+v+w);
}
function Media(){
    x = parseInt(prompt('digite um numero'));
    y = parseInt(prompt('digite um numero'));
    z = parseInt(prompt('digite um numero'));
    console.log(parseFloat((x+y+z)/3));
}
function Media_Ponderada(num1,peso1, num2,peso2, num3, peso3){
    num1 = parseInt(prompt('digite uma nota'));
    peso1 = parseInt(prompt('digite um peso'));
    num2 = parseInt(prompt('digite uma nota'));
    peso2 = parseInt(prompt('digite um peso'));
    num3 = parseInt(prompt('digite uma nota'));
    peso3 = parseInt(prompt('digite um peso'));
    console.log((num1*peso1+num2*peso2+ num3*peso3)/(peso1+peso2+peso3));
}
function Plus25percent(){
    x = parseInt(prompt('digite um numero'));
    console.log(x*1.25);
}
function PlusPercent(){
    x = parseInt(prompt('digite um numero'));
    y = parseInt(prompt('digite um percentual'));
    console.log(x+(x*y)/100);
}