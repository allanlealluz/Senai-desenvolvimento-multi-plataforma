function CalcQuadraticEquation(a,b,c){
    console.log("a = " + a + ", b = " + b + ", c = " + c);
    if(a > 0){
        var delta = ((b**2) - (4*a*c));
        if(delta < 0){
            console.log("Não possui raízes reais");
        }else if(delta === 0){
            var x = (-b)/(2*a);
            console.log("x1 = x2 = " + x);
        }else{
            var x1 = (-b + (Math.sqrt(delta)))/(2*a);
            var x2 = (-b - (Math.sqrt(delta)))/(2*a);
            console.log("x1 = " + x1 + " e x2 = " + x2);
        }
    }
}
console.log(CalcQuadraticEquation(2,0,-8))