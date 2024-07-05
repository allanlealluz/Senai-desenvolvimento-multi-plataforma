function Sena(){
    let result = document.getElementById('result');
    let resultAcertos = document.getElementById('acertos');
    result.innerHTML = "";
    resultAcertos.innerHTML = "";

    // Matriz para armazenar os números sorteados
    let valores = [];

    // Gerar os números aleatórios únicos para cada linha (10 linhas, 6 colunas)
    for(let i = 0; i < 10; i++){
        valores[i] = []; // Inicializa cada linha como um array vazio
        let j = 0;
        while(j < 6){
            let RandNum = (Math.floor(Math.random()*60)+1);
            if(!valores[i].includes(RandNum)){
                valores[i].push(RandNum);
                j++;
            }
        }
    }

    MostraValores(valores);
}

function MostraValores(valores){
    let result = document.getElementById('result');
    let aposta = document.getElementById("aposta").value;
    let apostas = aposta.split('|');
    let resultAcertos = document.getElementById('acertos');
   
    result.innerHTML = "";
    resultAcertos.innerHTML = "";

    for(let i = 0; i < 10; i++){
        let acertados = 0;
        let tr = document.createElement('tr');
        tr.setAttribute('id', "tr"+i);
        
        for(let j = 0; j < 6; j++){
            let td = document.createElement('td');
            td.innerHTML = "||  " + valores[i][j] + "  ||";
            tr.appendChild(td);

            if(apostas[j] == valores[i][j]){
                console.log("Parabéns, você acertou o número da sorte! " + apostas[j] + valores[i][j]);
                acertados++;
            } else {
                console.log("Não foi dessa vez, tente novamente!"+ apostas[j] +" "+ valores[i][j]);
            }
        }
        result.appendChild(tr);
        resultAcertos.innerHTML += " " + acertados + " ";
    }
    
    resultAcertos.innerHTML += " " + acertados + " ";
    document.getElementById("aposta").value = "";
}