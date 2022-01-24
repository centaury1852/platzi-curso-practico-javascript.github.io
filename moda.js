
//array
/*const lista1 = [
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

//paso uno coger el array y convertirlo en un objeto.
    const lista1Count = {}; //objeto vacio*/

//se crea una variable que almacene un elemento vacio llamado Lista1Count;

 /*   lista1.map(
        function(elemento){
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        
        } else {

            lista1Count[elemento] = 1;
        }   
    }
    );
*/


//esta funcion de arriba se usara para iterar cada array o valor que necesitemos cuantificar
// este if (lista1Count[elemento]) me dira si este elemento existe
//si ya existe, no se creará el elemento y que sea = a 1, sino que se le sumara uno al elemento. Es decir, este elemento se repita X veces en el array.
// y si no existe lista1Count[elemento]= 1; creamos el elemento y le asignamos 1.


//paso 2, crear un array con el objeto anterior
//declaramos la variable y asignamos la propiedad para crear el array
// const lista1Array = Object.entries();
//el argumento es el array que quermos convertir en un objeto.

/*const lista1Array = Object.entries(lista1Count).sort(
    function (valorAcumulado, nuevoValor){
        valorAcumulado - nuevoValor;

    }
);
*/
//adicionamos el metodo .sort(); para ordenar los datos de menor a mayor.
//sort recibe una funcion, y esta a su vez recibe dos elementos. ValorAcumulado y el Nuevo valor.

/*
const lista1Array = Object.entries(lista1Count).sort(
            function(elementoA, elementoB){
                return elementoA[1] - elementoB[1];
            }
        
        );

*/

//la funcion anónima dentro de sort organizara los elementos de menor a mayor,
//de acuerdo a la posicion 1 (segunda posicion) que es su cantidad de veces.
//la segunda posicion obedece al numero de veces que se repite un elemento dentro del array, siendo i = 0 para su valor, i = 1 para las veces que aparece dentro.











//AMABLE recordatorio SIEMPRE agreguen RETURN a sus FUNCIONEs o nunca las van a definir. Atte: La experiencia.
/*const moda = lista1Array[lista1Array.length -1];*/

     //creando funcion de moda

     //moda es el numero que más se repite, por lo tanto, de un objeto se crea un array, luego un objeto y luego un array.
     //el resultado de ese array se le aplica el metodo .sort() para organizarlo  de menor a mayor, 
     //siendo el orden: el que menos aparece al que más a parece,para luego almacenarlo en su misma variable.
     //luego se crea la variable moda que traera ese array ordenadao y le pedimos que nos saque la ultima posicion de ese array. 
     //y retornamos moda.

     
     /*
     
     lista1.map(
        function(elemento){
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        
        } else {

            lista1Count[elemento] = 1;
        }   
    }
    );
     */
     
     //creamos un array con el objeto 
     
     
     
     
     
     
     
     function calcularModa(lista) {

        const listaCount = {};
        
        lista.map(
            function(elemento){
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            
            } else {
    
                listaCount[elemento] = 1;
            }   
        }
        );

        const listaArray = Object.entries(listaCount).sort(
            function(elementoA, elementoB){
                return elementoA[1] - elementoB[1];
            }
        
        ); 

        const moda = listaArray[listaArray.length -1];
                
        const resultadoModa =  moda[0];
        return resultadoModa


     };


     //creando la funcion para el boton


     function resultadoModaDisplay(){
        let inputGeneral = document.getElementById("InputGeneral");
        let valorInputGeneral = inputGeneral.value;
    
        let valorInputadherido = Array.from(valorInputGeneral.split(','),Number);
        let moda = calcularModa(valorInputadherido);
        
        let resultadoAImprimir = document.getElementById("resultadoModa");
        resultadoAImprimir.innerText = "La moda de los datos que ingresaste es de : " + moda +".";
    }
    