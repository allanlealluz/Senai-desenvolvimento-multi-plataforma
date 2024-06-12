/*var nome = prompt('digite seu nome:');
console.log('Ola '+nome);
document.write('<h1>Bem Vindo, '+nome+' </h1>');
document.write("<img src='https://sujeitoprogramador.com/steve.png' alt='foto do steve jobs'/>")
*/
var area = document.getElementById('area');
function entrar(){
    var nome = prompt('digite seu nome: ');
    if(nome == '' || nome == null){
        alert('Ops, algo deu errado');
        area.innerHTML = "Clique no Botão para Acessar...";
    }else{
        area.innerHTML = "Bem vindo " + nome + " ";
        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair da conta";
        botaoSair.onclick = sair;
        area.appendChild(botaoSair);
    }
}
function sair(){
    alert('Até mais.....');
    area.innerHTML = "Você saiu do sistema"
}