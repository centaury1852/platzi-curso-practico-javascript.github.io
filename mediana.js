const lista1 = [
    100,
    200,
    500,
    800,
    400000000,
];

const mitadListaUno = parseInt(lista1.length/ 2);


function esPar(numeroprueba){
    if (numeroprueba % 2 === 0){
        return true;
    } else {
        return false;
    }
};


let mediana = lista1[mitadListaUno];

/*
if (esPar(lista1.length)) {

    
} else {
    mediana = lista1[mitadListaUno];
};
















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

