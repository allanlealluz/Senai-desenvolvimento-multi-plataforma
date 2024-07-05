function Sena(){
    result = document.getElementById('result')
    resultAcertos = document.getElementById('acertos')
    result.innerHTML = ""
    resultAcertos.innetHTML = ""
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
    VerificarAcerto()
}
function MostraValores(valores){
    result = document.getElementById('result')
    num = 0
    count = 0
    for(let i = 0; i< 10; i++){
        tr = document.createElement('tr')
        tr.setAttribute('id',"tr"+count)
        count ++
        for(let j = 0; j < 6; j++){
            td = document.createElement('td')
            td.innerHTML = "|| "+valores[num]+" ||"
            tr.appendChild(td)
            num ++
        }
            result.appendChild(tr)
    }
}
function VerificarAcerto(){
    acertos = 0
    aposta = document.getElementById("aposta").value
    resultAcertos = document.getElementById('acertos')
    for(let i = 0; i < 10; i++){
        tr = document.getElementById("tr"+i).innerHTML
        var numsStr = tr.replace(/[^0-9]/g,'');
        console.log(parseInt(numsStr));
        if(aposta == numsStr){
            alert("Parabéns, você acertou o número da sorte!"+aposta)
            acertos ++
        }else{
            console.log("Não foi dessa vez, tente novamente!")
        }
        resultAcertos.innerHTML += " "+acertos+" "
    }
}