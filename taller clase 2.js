
Resolviendo taller primera clase 
//
Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)

//
var dineroReal; 

const nombre = "Andres";
const apellido = "Velasquez";

let dineroAhorrado = 15000;
let deudas = 1000;


dineroReal = dineroAhorrado - deudas;

console.log ("El Usuario " + nombre + " " + apellido + " tiene un total de $ " + dineroReal + " en el banco."); 

// creando funcion

// Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

// parametros

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log ("Mi nombre es " + completeName + 
", pero prefiero que me digas " + nickname + ".");

var nombre = "nombre";
var apellido = "apellido";
var nickname = "apodo";

let nombre
let apellido
let nickname

function comoQuieroQueMeLlamen(nombre, apellido, nickname){
    let completeNombre = nombre + " " + apellido;
    let seudoNombre = nickname;
    return ("Mi nombre es " + completeNombre + ", pero prefiero que me digas " + seudoNombre + "." );
};

// al llamar la funcion, es importante que los argumentos sean string, es decir, nombre como parametro seria "Andres", apellido "Velasquez", y nickname "centauri",
//asi: console.log("Andres", "Velasquez", "centauri");

// cambiar de switch a if else

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

// desarrollo
var tipoDeSuscripcion = "Basic";

function verificarAcceso(tipoDeSuscripcion){
    
    if (tipoDeSuscripcion === "Free") {
        console.log("Solo puedes tomar los cursos gratis");
    } else if (tipoDeSuscripcion === "Basic") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    } else if (tipoDeSuscripcion === "Expert") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    } else if (tipoDeSuscripcion === "ExpertPlus") {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    } else (tipoDeSuscripcion === "");
};

//probando sin variable declarada previamente

function verificarAcceso(tipoDeSuscripcion){
    
    if (tipoDeSuscripcion === "Free") {
        console.log("Solo puedes tomar los cursos gratis");
    } else if (tipoDeSuscripcion === "Basic") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    } else if (tipoDeSuscripcion === "Expert") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    } else if (tipoDeSuscripcion === "ExpertPlus") {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    } else (tipoDeSuscripcion === "");
};

//ciclos

//replica el comportanmiento de los siguientes ciclos for usando ciclos while

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

//solucion


let i = 0;
while (i < 5) {
console.log("El valor de i es: " + i);
i++;
}




// y 

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}



//solucion ciclo for 2


let i = 10;
while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}



// Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

var respuesta;

console.log("Sabes cuanto es 2 + 2 ? " + "Sí es así agrega tu respuesta como argumento en la siguiente funcion");

function adivinaLaRespuesta(respuesta){

    var respuestaUsuario = respuesta;
    const respuestaAlmacenada = 4;

    if ( respuestaAlmacenada === respuestaUsuario) {
    console.log("Correcto, Felicitaciones!!!");
    } else {
    console.log("Es una pena pero no es correcto, vuelve a intentar");
    console.log("adivinaLaRespuesta()");
    };

};

// con do..while
//var pregunta = prompt("cuanto es 2 + 2 ?");


var respuestaUsuario = 0;


do {
    respuestaUsuario = Number(prompt("cuanto es 2 + 2 ?"))
    }
while(respuestaUsuario == 4);


//Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.


array1 = [1,2,3,4];

function printArray (numb) {
    return console.log(array1[0]);
}

function printAllElements (array){

    for(element of array){
        console.log(element);
    }

}

//Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).


var markVI = {
    nombre: "IronMan",
    naturaleza: "Humano",
    nombreReal: "Tonny Stark" 
};

function imprimirElementos (markV){

    let imprimeObjeto = Object.keys(markV);
    for (let i=0; i< imprimeObjeto.length; i++){
        let objetoImpreso = imprimeObjeto[i];
        console.log(markV[objetoImpreso]);
    }
}


