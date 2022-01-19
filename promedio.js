//calcular el promedio
//es igual a la suma total de los elementos dividido entre sus elementos

const a = 1;
const b = 2;
const c = 3;


function sumarElementos (a, b, c){
    let sumaElementosfinal = a + b +c;
    return sumaElementosfinal;
}


const lista1 = [
    1,
    2,
    3,
    4,
    5,
    6,
];

let sumaLista1 = 0;

for (let i = 0; i <lista1.length; i++) {
    sumaLista1 = sumaLista1 + lista1[i];
}

const promedioLista1 = sumaLista1 / lista1.length;

// crear una funcion con base en lo anterior

function calcularPromedio(lista){

    /*let sumaLista = 0;

    for (let i = 0; i <lista.length; i++) {
    sumaLista = sumaLista + lista[i];
}*/

//alternativa a ciclo for --> metodos de arrays
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }

    )

const promedioLista = sumaLista / lista.length;
    return promedioLista;
};











