
//array
const lista1 = [
    1,
    2,
    3,
    4,
    5,
    4,
    1,
    1,
    1,
    2,
    4,
    3,
    2,
    1,
    3,
    4,
    ];


    const lista1Count = {}; //objeto vacio



    lista1.map(
        function(elemento){
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        
        } else {

            lista1Count[elemento] = 1;
        }   
    }
    );


    const lista1Array = Object.entries(lista1Count).sort(
            function(elementoA, elementoB){
                return elementoA[1] - elementoB[1];
            }
        
        );

const moda = lista1Array[lista1Array.length -1];

     