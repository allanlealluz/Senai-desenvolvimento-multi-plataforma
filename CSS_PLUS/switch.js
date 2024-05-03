var content = document.getElementById('content');
let food = document.getElementById('food');
let flight = document.getElementById('flight');
let island = document.getElementById('island');
let city = document.getElementById('city');
let titulo = document.getElementById('titulo');
food.addEventListener('click', function(event){
titulo.innerHTML = 'The Food'
content.innerHTML = 'A alimentação dos primitivos romanos, dos pobres e dos que recusavam o luxo da mesa, consistia em legumes como a couve, as favas, as lentilhas e o grão de bico; e, nas zonas junto ao mar ou rios, o peixe salgado ou seco era comum para melhor conservação e para os dias de maior carência.'
})
flight.addEventListener('click', function(event){
    titulo.innerHTML = 'The Flight'
    content.innerHTML = 'As estradas, que haviam sido construídas para os exércitos romanos, estavam em boas condições, e as pessoas caminhavam, viajavam de carruagem ou eram transportadas em liteiras - uma espécie de carruagem em que escravos carregavam os nobres.'
})
island.addEventListener('click', function(event){
    titulo.innerHTML = 'The Island'
    content.innerHTML = 'A ilha de Ventotene abriga um antigo vulcão em frente à costa de Nápoles, na Itália, mas também é conhecida, entre outras coisas, por ser berço do sonho de uma Europa unida.'

    'Foi nessa ilha, usada pelo regime fascista para isolar dissidentes políticos, que Altiero Spinelli e Ernesto Rossi escreveram o Manifesto de Ventotene, um dos textos fundadores do federalismo europeu.'
})
city.addEventListener('click', function(event){
    titulo.innerHTML = 'The City'
    content.innerHTML = 'Pompeia ou Pompeios [nota 1](lat. Pompeii) foi uma cidade do Império Romano situada a 22 km da cidade de Nápoles, na Itália, no território do atual município de Pompeia. A antiga cidade foi destruída durante uma grande erupção do vulcão Vesúvio no ano 79 d.C., que provocou uma intensa chuva de cinzas que sepultou completamente a cidade. Ela se manteve oculta por 1600 anos, até ser reencontrada por acaso em 1748. Cinzas e lama protegeram as construções e objetos dos efeitos do tempo, moldando também os corpos das vítimas, o que fez com que fossem encontradas do modo exato como foram atingidas pela erupção. Desde então, as escavações proporcionaram um sítio arqueológico extraordinário, que possibilita uma visão detalhada na vida de uma cidade dos tempos da Roma Antiga.'
})