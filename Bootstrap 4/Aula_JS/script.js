/**
 * This function displays the current time on the webpage
 */
function hora() {
    /**
     * This function sets the innerHTML of the element with id 'demo' to the current time
     */
    document.getElementById('demo').innerHTML = Date();
}

/**
 * This function changes the text displayed on the webpage to "Ola Javascript!"
 */
function troca() {
    document.getElementById('demo').innerHTML = "Ola Javascript!";
}

/**
 * This function changes the source of the image with id 'myImage' to the image 'acesa.jpg'
 */
function troca1() {
    document.getElementById('myImage').src = 'imagens/acesa.jpg'; 
}

/**
 * This function changes the source of the image with id 'myImage' to the image 'apagada.jpg'
 */
function troca2() {
    document.getElementById('myImage').src= 'imagens/apagada.jpg';
}

/**
 * This variable is used to track the number of times the mudaEstilo function is called
 */
let c = 0;

/**
 * This function changes the style of the element with id 'demo2'
 */
function mudaEstilo() {
    /**
     * This function sets the font family, font size, color, and background color of the element with id 'demo2'
     */
    document.getElementById('demo2').style.fontFamily='Comic Sans MS';
    document.getElementById('demo2').style.fontSize='30px';
    document.getElementById('demo2').style.color='red';
    document.getElementById('demo2').style.backgroundColor='yellow';
    /**
     * This function sets the innerHTML of the element with id 'estilo' to either 'Voltar atrás' or 'Clique aqui para mudar de estilo', depending on whether c is equal to 1 or not
     */
    document.getElementById('estilo').innerHTML = 'Voltar atrás';
    if (c === 1) {
        document.getElementById('estilo').innerHTML = 'Clique aqui para mudar de estilo';
        document.getElementById('demo2').style.color='black';
        document.getElementById('demo2').style.backgroundColor='white';
        document.getElementById('demo2').style.fontFamily='Arial';
        document.getElementById('demo2').style.fontSize='15px';
        c = 0;
    } else {
        c++;
    }
}