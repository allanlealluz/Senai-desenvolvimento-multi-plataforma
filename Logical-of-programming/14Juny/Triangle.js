function TriangleScam() {
    var x = prompt('digite seu x');
    var y = prompt('digite seu y');
    var z = prompt('digite seu z');
    if (x < y + z && y < x + z && z < x + y) {
        if (x === y && y === z) {
            console.log('Equilátero');
        } else if (x === y || y === z || x === z) {
            console.log('Isósceles');
        } else {
            console.log('Escaleno');
        }
    } else {
        console.log('Não é um triângulo');
    }
}
