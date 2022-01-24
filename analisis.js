//analisis de salarios

//crear variable salariosCol para almacenar los salarios de Colombia, los cuales
//estan en el otro archivo.

//creamos la variable y almacenamos el metodo .map(); para extraer información del array de salarios.js
// .map nos sirve para iterar por cada elemento de colombia.
//dentro de .map(agregamos una funcion anonima que me permita )
//por cada iteracion llamar a una persona, asignandola en un nuevo array.
//y devuelva el salario de cada personalbar.


//ordernar el array
//para que se pueda organizar de menor a mayor por medio del metodo .sort()
//traer calculo de promedio


//traer formula de la mediana

//creando la formula nuevamente

//1, determinar si es par o no: funcion esPar
//2, revision de la estructura de la funcion para simplificarla.

/*function esPar(numerito){
    if (numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
}*/
//refacotrizando

//generamos una funcion para calcular la mediana de los salarios a nivel general.

//3, declaramos la funcion, como parametro una lista general de salarios
//agregamos una variable para almacenar el numero de la mitad
// usamos parseInt() para que el numero obtenido de la division sea un entero.

//creamos la condicional para saber si esPar o no.

// se crea variable 1 y 2 para almacenar la mitad posicion -1 y 0. 
// en el else se declara la variable personitaMitad en la posicion mitad del array lista.
//con el fin de que retorne la variable con la persona de la mitad.

//luego durante la expresion del if creamos una variable mediana, que almacene
//el valor que calculara la funcion promedio. y lo regresara a la variable asignada.
//return mediana;


//llamamos a la funcion medianaSalariosCol (); dentro de un console.log();
//y como argumento le enviaremos una lista → salariosColsorted;

//con la variable salariosCol estamos calculando la Mediana General

const salariosCol = colombia.map(
    
    function (personita){
        return personita.salary;
    }

);



const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;

    }
);

/*var lista = [];*/



//es importante que el valor que se le agregue como argumento luego de declarar una variable con un array, sea un array,
//es decir usar [y meter aqui los valores para que no genere error]


//funciones helpers
function esPar(numerito){
    return (numerito % 2 === 0);
};

function calcularPromedio(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
            return promedioLista;
};


//Calculadora de mediana

function medianaSalariosCol(lista){

    const mitad = parseInt(lista.length/2);

    if (esPar(lista.length)){
        
        
        const personitaMitad1 = lista[mitad - 1 ];
        const personitaMitad2 = lista[mitad];
        
        /*let personitaMitad = personitaMitad1 + personitaMitad2 /2;
        return personitaMitad;*/
    
       mediana = calcularPromedio ([personitaMitad1, personitaMitad2]);
        return mediana;

        } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
};

//generamos una variable que almacene el resultado de la mediana de salarios con el argumento Array de salariosCol

const medianaGeneralCol = medianaSalariosCol(salariosColSorted);

//Creacion Mediana Top 10%

//sacamos de salariosColSorted las ultimas 10 posiciones.



//usaremos el metodo .splice(); para sacar la informacion que necesitemos.
//este metodo recibe dos parametros, 1 ubicacion para empezar
//2 cuantos eleemntos queremos sacar

//para esto creamos dos variables

//const spliceStart = 0;
//const spliceCount = 0;

//y ahora averiguamos el procentaje que deseamos sacar con la formula de porcentajes de descuento.
// para calcular un valor con descuento



//(valorTotal * (100 - (valorDescuento))/100)
//ejemplo
//(200 * (100 - 10)/100) = 180

//entonces, si queremos sacar el 10% para nuestro ejercicio, lo haremos asi:
//tomamos la cantidad total de elementos y le aplicamos el % que deseemos obterner.
const spliceStart = (salariosColSorted.length * 90)/100;
//con esto se calcula el punto inicial para splice();
//luego restamos total elementos - spliceStart

const spliceCount = salariosColSorted.length - spliceStart;




const salariosColTop10 = salariosColSorted.splice(
    spliceStart, spliceCount
);


//creamos una nueva variable llamada medianaTop10Col

const medianaTop10Col = salariosColTop10;




//luego generamos un console.log() que permita imprimir un objeto que contenga:
//medianaGeneralCol, 
//medianaTop10Col

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});







