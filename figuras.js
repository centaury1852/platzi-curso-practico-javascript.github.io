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
return lado1 + lado2 + base +"cm";

}

function areaTriangulo(base, altura){
return (base * altura)/2 + "cm^2";
}



// Código del círculo

/*console.group("Círculos");

// Radio
const radioCirculo = 4;
console.log("El radio del círculo es:" + radioCirculo + "cm");

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo es:" + diametroCirculo + "cm");
*/
//PI
const PI = Math.PI;
/*console.log("PI es" + PI );

//Círcunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro de círculo es:" + perimetroCirculo + "cm");

//Área del círculo
const areaCirculo = PI * (radioCirculo * radioCirculo);
console.log("El área del círculo es:" + areaCirculo + "cm^2");

console.groupEnd();
*/
//fin del ejercicio
    


//Creando funcion para 
//En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

//La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
//La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
//La función debe retornar la altura del triángulo.
//Pista: la función Math.sqrt de JavaScript puede ayudarte a calcular raíces cuadradas.


//La forma de determinar la altura para el ejercicio sugerido es 
//h = Raiz Cuadrada de (a*a) - ((b*b)/4)  
//Math.sqrt(numero) = genera el valor de raiz cuadrada


//valores del triangulo isoceles
/*
cateto a 
cateto b
hipotenusa h

*/

/*const catetoa = ladoA;

const catetoa2 = catetoa * catetoa;

const catetob = ladoB;

const catetob2 = (catetob * catetob)/4;
*/

function catetoa2(a){
    return a*a;
}

function catetob2(b){
    return (b * b)/4;
}

function hypotenusa (a, b){
    const catetoaa2 = catetoa2(a);
    const catetobb2 = catetob2(b);
    
    const hypotenusasinraiz = catetoaa2 - catetobb2;

    const h = Math.sqrt(hypotenusasinraiz);

    alert(h);

}
/*const hipotenusa = Math.sqrt(valor);*/





//funciones del círculo

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio)
    return diametro * PI + "cm";

}

function areaCirculo(radio){
    return PI * (radio * radio) + "cm^2";
}


//funciones para pagina web
//aquí interactuamos con el HTML cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert(perimetro);

}

function calcularAreaCuadrado() {

    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    alert(area);

}

//aquí interactuamos con el HTML triángulo

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("lado1");
    const value1 = input1.value;

    const input2 = document.getElementById("lado2");
    const value2 = input2.value;

    const base = document.getElementById("base");
    const value3 = base.value;

    const perimetro = perimetroTriangulo(Number(value1), Number(value2), Number(value3));

    alert(perimetro);

}

function calcularAreaTriangulo() {

    const input1 = document.getElementById("lado1");
    const value1 = input1.value;

    const base = document.getElementById("base");
    const value3 = base.value;

    const area = areaTriangulo(Number(value1), Number(value3));

    alert(area);

}




//aquí interactuamos con el HTML círculo


function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);

    alert(perimetro);

}

function calcularAreaCirculo() {

    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);

    alert(area);

}


//aqui interactuamos con el HTML triángulo Isóceles


function calcularAlturaIsoceles() {
    
    const inputa = document.getElementById("inputCatetoA");
    const valuea = inputa.value;

    const inputb = document.getElementById("inputCatetoB");
    const valueb = inputb.value;

    const area = hypotenusa(Number(valuea), Number(valueb));

    alert(area);

}








