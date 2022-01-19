const lista1 = [
    400,
    200,
    4000,
    600,
    800,
    40000000,
];

const mitadListaUno = parseInt(lista1.length/ 2);


lista1.sort(function(a, b){
    return a -  b;
});

function esPar(numeroprueba){
    if (numeroprueba % 2 === 0){
        return true;
    } else {
        
        return false;
    }
};




function calcularPromedio(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = sumaLista / lista.length;
            return promedioLista;
};


let mediana = lista1[mitadListaUno];


if (esPar(lista1.length)) {

    elemento1 = lista1[mitadListaUno - 1 ];
    elemento2 = lista1[mitadListaUno];
    
    const promedioElemento1y2 = calcularPromedio([ elemento1, elemento2,]);

    mediana = promedioElemento1y2;
} else {
    mediana = lista1[mitadListaUno];
}
    


