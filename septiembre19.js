
//-----------------------------------------------------------------------------
//--1. INPUT DATA. ENTRADA DEL PROGRAMA O INPUT (I):
//-----------------------------------------------------------------------------

var items = [2, 3, 5, 7, 11, 13, 17, 21, 33]; // -> Para definir un ARRAY en JS simplemente se especifica el nombre de una variable y se le asigna una serie de valores entre corchetes y separados por comas. JS interpretará automáticamente que lo que se encuentre entre los corchetes es el contenido del array items.
// console.log(items.length)

//-----------------------------------------------------------------------------
//--2. DEFINICIÓN FUNCIÓN DE BÚSQUEDA: 
//-----------------------------------------------------------------------------

// ACTIVIDAD: Modificar la función para que busque un elemento según la posición:

// function search(arr, x) {
//     var i = 0;
//     var count = arr.length;
//     while (i < count) {
//         if (arr[i] == x) return i;
//         i++;
//     }
//     return null;
// }

function search(arr, x) {
    var i = 0;
    var cantidad_elementos = arr.length;
    while (i < cantidad_elementos) {
        if (x == i) return items[i];
        i++;
    }
    return null;
}

// ¡FELICIDADES! ¡TU SOLUCIÓN ES CORRECTA!

//-----------------------------------------------------------------------------
//--3. EJECUCIÓN DE LA FUNCIÓN: BUSCAR UN ELEMENTO EN EL ARRAY:
//-----------------------------------------------------------------------------

var resultado = search(items, 8);

//-----------------------------------------------------------------------------
//--4. OUTPUT DATA. SALIDA DEL PROGRAMA OUTPUT (O)
//-----------------------------------------------------------------------------

var resultadoHTML = document.createElement('p');
resultadoHTML.id = 'resultado'; // -> Asigna el ID que desees
if (resultado !== null) {
    resultadoHTML.textContent = 'En la posición ingresada se encuentra el elemento: ' + resultado;
} else {
    resultadoHTML.textContent = 'El elemento no se encuentra en el array';
}
document.body.appendChild(resultadoHTML);

//-----------------------------------------------------------------------------
//--5. TEST DE VELOCIDAD. CONCEPTO DE MEDICIÓN, VALIDACIÓN DEL RENDIMIENTO DE ESPACIO (ALMACENAMIENTO) Y TIEMPO DE EJEC.
//-----------------------------------------------------------------------------

//Tiene que ver con:
// - Capacidad de procesamiento en la RAM
// - Capacidad de almacenamiento 
