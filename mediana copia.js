
//creamos un array que contenga una lista de ejemplo

/*const lista1 = [
    400,
    200,
    4000,
    600,
    800,
    40000000,
];*/

// dividmos la cantidad de elementos por 2 para saber la mitad del array,
//luego aproximamos con parseInt para que sea un numero entero.
//Por ultimo creamos la variable mitadListaUno para almacenar este numero entero.
/*const mitadListaUno = parseInt(lista1.length/ 2);

//teniendo el array, utilizo el metodo sort() que me permite ordenar. a - b, ordena de menor a mayor, b - a de mayor a menor.

lista1.sort(function(a, b){
    return a -  b;
});
*/
// se crea la funcion para saber si el numero total de elementos es un numero par o impar. Se divide por 2 y si el modulo resultante
//es 0, entonces es par y retornara true, en caso contrario, retornara false.

function esPar(numeroprueba){
    if (numeroprueba % 2 === 0){
        return true;
    } else {
        return false;
    }
};


//llamo a la funcion CalcularPromedio de la version anterior para utilizarla nuevamente.

function calcularPromedio(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = sumaLista / lista.length;
            return promedioLista;
};

//declaro mediana antes de utilizarla en el siguiente bloque de codigo.


/*let mediana = lista1[mitadListaUno];
*/

//se crea un condicional donde si la cantidad de numeros de Lista1 es par, luego con la variable mitadListaUno se halla cual es el numero de la mitad del array.
//si es un array con numero par se generan dos elementos, elemento 1 y elemento 2, luego elemento1 es asignado que de la lista1 tome la posicion de la mitad -1, 
//es decir, tome la mitad de arriba y a elemento2 tome la mitad de abajo.
//luego se llama la funcion calcularPromedio, dentro de un array ([]), se ponen los dos elementos, y esta funcion con estos argumentos se almacena
//en la variable promedioElemento1y2.
//luego a la variable mediana se le asigna el resultado que guarde promedioElemento1y2.

//si el numero total de los elementos del array no es par, entonces la mediana es asignada con el numero de Lista1 en la posicion mitadListaUno, es decir, la mitad
//del array.

/*
if (esPar(lista1.length)) {

    elemento1 = lista1[mitadListaUno - 1 ];
    elemento2 = lista1[mitadListaUno];
    
    const promedioElemento1y2 = calcularPromedio([ elemento1, elemento2,]);

    mediana = promedioElemento1y2;
} else {
    mediana = lista1[mitadListaUno];
}*/
    


//que neceista la mediana.
//valores organizados
//dos valores del centro si es par
//sumar esos valores y dividirlos por 2.

function calcularMediana (lista) {

    const mitadLista = parseInt(lista.length/ 2);

    lista = lista.sort(function(a, b){
        return a -  b;
    });

    let mediana = lista[mitadLista];

    if (esPar(lista.length)) {

        elemento1 = lista[mitadLista - 1 ];
        elemento2 = lista[mitadLista];
        
        const promedioElemento1y2 = calcularPromedio([ elemento1, elemento2,]);
    
        mediana = promedioElemento1y2;

    } else {
        mediana = lista[mitadLista];
    };
    

};