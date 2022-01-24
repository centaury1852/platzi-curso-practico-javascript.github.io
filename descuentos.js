const precioOriginal = 120;
const descuento = 18;

const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento)/100;


/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
});*/

// no es una buena practica escribir codigo tan apeñuscado.
/*function calcularPrecioConDescuento (precio, descuento){
    return (precio * (precio-descuento))/100;
}*/

function calcularPrecioConDescuento (precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
};


//creamos la funcion para escribir en html
// se crea una variable que reciba la info basandose en el ID
//luego la almacene en priceValue para poder obtener el valor de inputPrice
//este ingreso es de entrada de precio

//luego se crea otra variable que reciba el valor de descuento

//se crea la variable precioConDescuento que almacenara el resultado de la funcion, luedo
//de extraer pricevalue y discountValue.


//para finalizar creamos una variable que señale a P en html por medio de su id.
//y luego que imprima basandose en el id y en la funcion/atributo innerText
//como resultado imprimira el texto que le ingresemos entre "...".S
function onClickButtonPriceDiscount (){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);


    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;    
    /*const resultP = document.getElementById("Result");
    console.log(resultP);
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;

    */
}

