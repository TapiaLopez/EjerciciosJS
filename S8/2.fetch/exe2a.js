// Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una 
// consulta a la api cuando se haga click en el botón, pasando como parametro de la api, el valor del input.

// ```html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <input type="text">
//     <button>Consultar</button>
// </body>
// </html>
// ```


const baseUrl = 'https://api.nationalize.io?name=';


function handleClick(event){
    fetch(baseUrl+valorinput)
.then(res => res.json())
.then(result => {
    console.log(result)
})
}

document.querySelector("button").addEventListener("click", handleClick);

