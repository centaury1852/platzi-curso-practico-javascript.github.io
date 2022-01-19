//calcular el promedio
//es igual a la suma total de los elementos dividido entre sus elementos


//se crea un array con numeros como ejemplo.
const lista1 = [
    1,
    2,
    3,
    4,
    5,
    6,
];


//declarar variable sumarLista1 en 0, para empezar a almacenar la suma de los elementos del array.

let sumaLista1 = 0;


//se hace un ciclo y se itera desde i = 0 //seguir la logica del ciclo// lo cual debe ser almacenado en la variable antes inicializada,
//sumarLista1 entonces almacenara el valor acumulado (que es ella misma) mas el valor nuevo llamado lista1[i], para efectos de ejemplo
//si  cuando i =0 en lista[i] = lista[0] es igual a 1, lista[1] = 2 y asi sucesivamente.
//cada vez que se genere el ciclo, este se guardara en la variable sumarLista1. y aqui se le sumara el valor acumulado más el ultimo valor agregado,
//asi hasta sumar todos los elementos o como tambien se podria decir, hasta que la condicion del ciclo no se cumpla; sea false. 

for (let i = 0; i <lista1.length; i++) {
    sumaLista1 = sumaLista1 + lista1[i];
}


//luego declaramos una nueva variable que almacenara el resultado entre la variable anterior sumarLista1 / lista1.length, que es igual a dividir la
//suma de todos los elementos entre el total de elementos del array lista1.
const promedioLista1 = sumaLista1 / lista1.length;


//ahora con base al establecimiento de la funcion de ejemplo se desarrolla una funcion nueva que reciba cualquier valor nuevo.
// crear una funcion con base en lo anterior

function calcularPromedio(lista){

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )

        const promedioLista = sumaLista / lista.length;
    return promedioLista;
};













