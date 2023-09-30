// 1. Entrada del programa Input (I)
//----------------------------------
var items = [2, 3, 5, 7, 11, 13, 17]; // index es el cursor
//----------------------------------
// 2. Definición función de búsqueda
//----------------------------------
// a la función de busqueda le vamos a pasar dos parametros: el array items y el elemento_a_buscar y el objetivo del algoritmo es encontrar en que posición está el elemento_a_buscar
function search(items, pos) { 
  var posicion = 0;
  var total_itemsArray = items.length;
  while (posicion < total_itemsArray) {
    if (posicion == pos) { 
      return items[pos];
    }
    posicion++; // sumar de uno en uno
  }
  return null;
}
//-----------------------------------------------------------
// 3. Ejecución de la función: buscar un elemento en el array
//-----------------------------------------------------------
var resultado = search(items, 3);
console.log(resultado)
//----------------------------------
// 4. Salida del programa Output (O)
//----------------------------------
var resultadoHTML = document.createElement('p');

resultadoHTML.id = 'resultado'; // Asigna el ID que desees
if (resultado !== null) {
  resultadoHTML.textContent = 'El elemento es: ' + resultado + ' :)';
} else {
  resultadoHTML.textContent = 'Debes ingresar un numero entre 0 y 6 :(';
}
document.body.appendChild(resultadoHTML);
