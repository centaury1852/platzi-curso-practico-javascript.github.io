
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


    const lista1Count = {}; //objeto vacio*/

//se crea una variable que almacene un elemento vacio llamado Lista1Count;

    lista1.map(
        function(elemento){
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        
        } else {

            lista1Count[elemento] = 1;
        }   
    }
    );
//se recorre el objeto lista con el metodo .map y se almacena en lista1Count;

 /*   const lista1Array = Object.entries(lista1Count).sort(
            function(elementoA, elementoB){
                return elementoA[1] - elementoB[1];
            }
        
        );*/

//el objeto se convierte nuevamente en un array con arrays por dentro, se utiliza Object.entries().
//con el metodo .sort para ordenar los elementos de menor a mayor. 1 a 5 en su ubicacion i, en este caso i = 2.
//la segunda posicion obedece al numero de veces que se repite un elemento dentro del array, siendo i = 0 para su valor, i = 1 para las veces que aparece dentro.

//AMABLE recordatorio SIEMPRE agreguen RETURN a sus FUNCIONEs o nunca las van a definir. Atte: La experiencia.
/*const moda = lista1Array[lista1Array.length -1];*/

     //creando funcion de moda

     //moda es el numero que más se repite, por lo tanto, de un objeto se crea un array, luego un objeto y luego un array.
     //el resultado de ese array se le aplica el metodo .sort() para organizarlo  de menor a mayor, 
     //siendo el orden: el que menos aparece al que más a parece,para luego almacenarlo en su misma variable.
     //luego se crea la variable moda que traera ese array ordenadao y le pedimos que nos saque la ultima posicion de ese array. 
     //y retornamos moda.

     
     
     
     lista1.map(
        function(elemento){
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        
        } else {

            lista1Count[elemento] = 1;
        }   
    }
    );
     
     
     
     
     
     
     
     
     
     
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
        return moda;




     };
