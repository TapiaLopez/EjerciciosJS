// En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno de los p que hayas insertado y que si el usuario 
// hace click en este botón eliminemos el parrafo asociado.

const baseUrl = 'https://api.nationalize.io?name=';


function handleClick(event){
    fetch(baseUrl+valorinput)
.then(res => res.json())
.then(result => {
    console.log(result)
})
}

let newP$$ = document.createElement(button);
let newContent$$ = document.createTextNode("X");
newP$$.appendChild(newContent$$);

  