function TriangleScam(x, y, z) {
    if (x < y + z && y < x + z && z < x + y) {
        if (x === y && y === z) {
            return 'Equilátero';
        } else if (x === y || y === z || x === z) {
            return 'Isósceles';
        } else {
            return 'Escaleno';
        }
    } else {
        return 'Não é um triângulo';
    }
}

console.log(TriangleScam(5,5,4));
console.log(TriangleScam(4,5,3));
console.log(TriangleScam(8,5,5));  //Equilatero