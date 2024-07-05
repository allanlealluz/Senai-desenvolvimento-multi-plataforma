function Sena(){
    let valores = []
    let i = 0
    while(i < 60){
            let RandNum = (Math.floor(Math.random()*60)+1)
            if(RandNum !== 0 ){ 
            if(!valores.includes(RandNum)){
                valores.push(RandNum)
                i++
            }
        }
         
    }
    MostraValores(valores)
}
function MostraValores(valores){
    result = document.getElementById('result')
    num = 0
    for(let i = 0; i< 10; i++){
        tr = document.createElement('tr')
        tr.setAttribute('id',"tr"+num)
        for(let j = 0; j < 6; j++){
            td = document.createElement('td')
            td.innerHTML = "||"+valores[num]+"||"
            tr.appendChild(td)
            num ++
        }
            result.appendChild(tr)
    }
}