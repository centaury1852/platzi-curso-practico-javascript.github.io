// Código del cuadrado

/*console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("los lados del cuadrado miden:" + ladoCuadrado + "cm" );

/*const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es:" + perimetroCuadrado + "cm");
*/

/*const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es:" + areaCuadrado + "cm^2");
*/
/*console.groupEnd();*/

// funciones del Cuadrado
function perimetroCuadrado(lado){
    return lado * 4 + "cm";
}

function areaCuadrado(lado) {
    return lado * lado + "cm^2";
}


// Código del trinángulo

/*console.group("Triángulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
    "Los lados del triángulo miden:" 
    + ladoTriangulo1 
    + "cm," 
    + ladoTriangulo2 
    + "cm," 
    + baseTriangulo 
    + "cm"
    );

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es de:" + alturaTriangulo + "cm" );

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo + "cm";
console.log("El perimetro del triángulo es:" + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log( "El área del triángulo es:" + areaTriangulo + "cm^2");


console.groupEnd();*/

//funciones del Triángulo

//cuando construimos la funcion, los valores son llamados parametros.
//cuando llamamos la funcion, los datos son llamados argumentos.
function perimetroTriangulo(lado1, lado2, base){
return lado1 + lado2 + base;

}

function areaTriangulo(base, altura){
return (base * altura)/2;
}



// Código del círculo

console.group("Círculos");

// Radio
const radioCirculo = 4;
console.log("El radio del círculo es:" + radioCirculo + "cm");

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo es:" + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("PI es" + PI );

//Círcunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro de círculo es:" + perimetroCirculo + "cm");

//Área del círculo
const areaCirculo = PI * (radioCirculo * radioCirculo);
console.log("El área del círculo es:" + areaCirculo + "cm^2");

console.groupEnd();

//fin del ejercicio
    

//funciones del círculo