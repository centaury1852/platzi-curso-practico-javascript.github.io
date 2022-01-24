var lista = [];





function calcularPromedio(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = sumaLista / lista.length;
            return promedioLista;
}



function esPar(numerito){
    if (numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
}

//let mediana;


function calcularMediana(lista){

    const mitadLista = parseInt(lista.length/ 2);
    

    lista = lista.sort(function(a, b){
        return a -  b;
    });

    let cantidadLista = lista.length;

    let mediana = lista[mitadLista];

    if (esPar(cantidadLista)) {

       let elemento1 = lista[mitadLista - 1 ];
       let elemento2 = lista[mitadLista];
        
        const promedioElemento1y2 = calcularPromedio([ elemento1, elemento2,]);
    
        mediana = promedioElemento1y2;
        return mediana;

    } else {
        mediana = lista[mitadLista];
        return mediana;
    }
    

};

//importante, siempre return dentro de una funcion para que quede definida su acción.


//diseñando funcion para boton


function resultadoMedianaDisplay(){
    let inputGeneral = document.getElementById("InputGeneral");
    let valorInputGeneral = inputGeneral.value;

    let valorInputadherido = Array.from(valorInputGeneral.split(','),Number);
    let mediana = calcularMediana(valorInputadherido);
    
    let resultadoAImprimir = document.getElementById("resultadoMediana");
    resultadoAImprimir.innerText = "La mediana de los datos que ingresaste es de : " + mediana +".";
}

