function Sena(){
    result = document.getElementById('result')
    resultAcertos = document.getElementById('acertos')
    result.innerHTML = ""
    resultAcertos.innerHTML = ""
    let valores = []
    let i = 0
    while(i < 60){
            let RandNum = (Math.floor(Math.random()*60)+1)
            if(!valores.includes(RandNum)){
                valores.push(RandNum)
                i++
            }  
    }
    MostraValores(valores)
}
function MostraValores(valores){
    result = document.getElementById('result')
    aposta = document.getElementById("aposta").value
    apostas = aposta.split('|')
    console.log(apostas)
    resultAcertos = document.getElementById('acertos')
    num = 0
    count = 0
    acertados = 0
    for(let i = 0; i< 10; i++){
        tr = document.createElement('tr')
        tr.setAttribute('id',"tr"+i)
        for(let j = 0; j < 6; j++){
            td = document.createElement('td')
            td.innerHTML = "||  "+valores[num]+"  ||"
            tr.appendChild(td)
            console.log(`${valores[i]} valor tabela; ${apostas[j]} `)
            if(apostas[j] === valores[num]){
                console.log("Parabéns, você acertou o número da sorte!"+aposta)
                acertados ++
            }else{
                console.log("Não foi dessa vez, tente novamente!")
            }
            num ++
        }
        result.appendChild(tr)
        resultAcertos.innerHTML += " "+acertados+" "
    }
    
    resultAcertos.innerHTML += " "+acertados+" "
    document.getElementById("aposta").value = ""
}