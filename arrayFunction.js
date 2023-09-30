// utilizamos reduce para sumar el total de estrellas
const galaxies = [ 
{ name: 'Galaxy A', stars: 100 },
{ name: 'Galaxy B', stars: 200 },
{ name: 'Galaxy C', stars: 300 } ]

const countStars = (galaxies) => { 
  const total = galaxies.reduce((a,g) => a + g.stars, 0 )
  return total
}
var resultado = countStars(galaxies)
console.log(resultado)

// map no transforma el array, sino que lo recorre para hacer algo sobre el
// en este caso extraemos el nombre del objeto a través de el key name del objeto
function galaxyNames(galaxies){
  return galaxies.map(
    (objeto) => objeto.name
  )
}
var resultado2 = galaxyNames(galaxies)
console.log(resultado2)
