// # Español
// // Usa el siguiente código como base y crea 3 funciones llamadas father, confirmExample, promptExample. La función confirmExample
//  recibirá una variable de tipo string (description) que mostrará como titulo de la ventana y retornará el valor del confirm. 
//  La función promptExample hará lo mismo pero con un prompt. La función father recibirá como parámetros description, con el valor 
//  del titulo de las ventanas y una función callback (confirmExample o promptExample).

// // La función father deberá ejecutar la función que reciba como callback y añadir el valor resultado que retorne la
//  función al array userAnwsers.

// Ejecuta varias veces la función father y haz finalmente un console.log de userAnwsers


const userAnwsers = [];

function confirmExample(description){
    confirm(description)
}

function promptExample(description){
    propmt(description)
}

function father(description, callback){
    userAnwsers.push(callback(description));

}

father('hola',confirmExample)
father('mundo',promptExample)