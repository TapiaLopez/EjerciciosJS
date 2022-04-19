// Vamos a usar de nuevo JSON SERVER para crear un listado de personajes de la serie Dragon Ball.

// Para ello, ejecutemos ``json-server --watch exercise-4.json``. En este caso el endpoint con los personajes es 
// `http://localhost:3000/characters`.

// La idea es crear una galería con los planetas, que podemos obtener del endpoint `http://localhost:3000/planets` y, 
// que si el usuario hace click en alguno de los planetas, salga debajo los personajes que están asociados por el
//  .idPlanet a ese planeta en cuestión, mostrando tanto sus imágenes .avatar como sus nombres .name. Para poder obtener 
//  la información de los personajes podemos hacer un filtro de los personajes llamando a la url, por 
//  ejemplo ``http://localhost:3000/characters?idPlanet=1`` y, teniendo en cuenta que el idPlanet variará dependiendo del planeta seleccionado.
 
// Además de esto, agrega un buscador para poder filtrar los personajes una vez que has seleccionado el planeta. 
// Por lo tanto, deberemos incluir el input debajo del planeta y encima de los personajes listados.

// listado de personajes
// galeria con los planetas
// al hacer click en planetas salgan debajo los usuarios que tiene relacion con el planeta
// que tiene que mostrar sus imagenes y sus nombres 
// filtros de personajes



fetch('http://localhost:3000/planets')
.then(res => res.json())
.then(planetsapi => {
console.log(planetsapi)
// printData(planetsapi)
})

// let handleClick;

for(planet of planets){
document.querySelector('[data-function="planets"); addEventListener ("click", handleClickç]');
 
}


const url = "http://localhost:3000/planets"; const url1 = "http://localhost:3000/characters";  
fetch(url).then((resp) => resp.json()).then(function(res) {     printData(res); });  let printData = (planets) =>{    

    

     for(let planet of planets) {
    plant$$.addEventListener("click", CharElement(planet.id)); 
    let plant$$ = document.querySelector('[data-function="characters"]');

    }  }
    
let CharElement = (infoPlanet) => {fetch(url1).then((infoPlanet) => infoPlanet.json()).thenfunction(infoPlanet)}; {var Cfilter = characters.filter(idPlanet===planet.id)};

for( let char of characters ){

div$$ = document.querySelector('[data-function="characters"]');div$$.innerHTML = '<h2>"name"</h2><img>"avatar"</img>'

fetch('http://localhost:3000/characters')
.then(res => res.json())
.then(characterapi => {
console.log(characterapi)

})
}

let newButton$$ = document.innerHTML= ('button')
document.querySelector("button").addEventListener("click", handleClick);


newButton$$.textContent = ('Buscar');



