// En base a la api Open Trivia (https://opentdb.com/api_config.php), vamos a desarrollar un trivial con la siguiente url 'https://opentdb.com/api.php?amount=10'. Esta api nos devolverá una serie de preguntas con sus respuestas, tanto erroneas como correctas. 

// La idea es hacer un juego en el que el usuario introduzca en un input las caracteristicas del Trivial y que al darle al 'Start Game' le salgan las preguntas de la api para que pueda comenzar el juego. Una vez las responda todas, le mostraremos al usuario el resultado.

// Ten en cuenta que hay dos tipos de preguntas. Aquellas con 3 respuestas erroneas y 1 correcta y aquellas con respuesta verdadero / falso.




//definimos una url para la petición fetch API
const baseUrl= 'https://opentdb.com/api.php?amount=10&type=multiple'

//declaramos un array vacio
const asnweredQuestions= []

//declaramos como variable input el botón questions-number
const input$$ = document.querySelector('[data-function="questions-number"]');
//hacmeos fetch a la variable que toma como valor la URL que hemos definido anteriormente
fetch(baseUrl)
//Recibimos la response
.then((response) => {
    //Parseamos la response de la API a JSON
    return response.json();
})
//Después de parsear la respuesta de la API a JSON, la declaramos como valor "questions"
.then((questions) => {
    //declaramos divQuestions&& como el botón gameboard
    const divQuestions$$ = document.querySelector('[data-function="gameboard"]');

    //Empezamos el bucle que declara como variable const "quest" el valor de la respuesta de la API (que es un objeto) questions.results
for (const quest of questions.results){

    //cremamos las variables que toman como valor los diferentes elementos
    let div$$ = document.createElement('div');
    let p1$$=  document.createElement('p');
    let p2$$= document.createElement('p');
    let p3$$= document.createElement('p');
    let p4$$= document.createElement('p');
    let h4$$ = document.createElement('h4')
    //insertamos el texto como titulo 4 del valor de la API quest.question
    h4$$.innerHTML= quest.question;

    //Añadimos como hijo en el DOM el div delcarado anteriormente
    divQuestions$$.appendChild(div$$);

    //añadimos el heading h4 al div
    div$$.appendChild(h4$$);

    //añadimos como texto dentro de los elementos "p" los diferentes valores recibidos de la API
    p1$$.innerHTML= quest.correct_answer
    p2$$.innerHTML= quest.incorrect_answers[0]
    p3$$.innerHTML= quest.incorrect_answers[1]
    p4$$.innerHTML= quest.incorrect_answers[2]

    //Añadimos las respectivas clases de CSS a los elementos
    p1$$.classList.add("answer")
    p2$$.classList.add("answer")
    p3$$.classList.add("answer")
    p4$$.classList.add("answer")

    //Añadimos a los diferentes divs los elementos "p" declarados anteriormente
    divQuestions$$.appendChild(p1$$)
    divQuestions$$.appendChild(p2$$)
    divQuestions$$.appendChild(p3$$)
    divQuestions$$.appendChild(p4$$)
    //Creamos las funciones addEventListener click de los elementos "p"
    p1$$.addEventListener('click',() =>{
        //llamamos a la función checkResults definida al final del documento y le pasamos como parámetro el elemento "p" y el contenido del texto del elemento "p"
        checkResults(p1$$,p1$$.textContent);
    })
    p2$$.addEventListener('click',() =>{
        checkResults(p2$$,p2$$.textContent);
    })
    p3$$.addEventListener('click',() =>{
        checkResults(p3$$,p3$$.textContent);
    })
    p4$$.addEventListener('click',() =>{
        checkResults(p4$$,p4$$.textContent);
    })


} //end for

//declaramos una variable "puntuacionTotal" con valor. Esta variable nos va a ayudar a sumar la puntuación total del trivial
let puntuacionTotal = 0;

//empezamos la funcion checkResults que espera como parámetros una variable elemento y una variable contenido y sirve para comprobar si la pregunta es correcta y marcar los elementos "p" con su respectiva clase de css (marked)
function checkResults(elemento,contenido){//correct_answer esto trendria que ir aqui 

    //añadimos al elemento que hemos recibido como parámetro su clase "marked", que cambiara a pink su color
    elemento.classList.add("marked");
    elemento.innerHTML= "are you sure of your answer?"


    //iteramos sobre el objeto questions.results que hemos recibido de la API
    for (const quest of questions.results){ 
        if (contenido === quest.correct_answer) {
            //sumamos puntuacionTotal + 1 si el contenido que hemos recibido como parametro es igual a la respuesta correcta que hemos recibido de la API
            puntuacionTotal++;
            
        } //end if
        
    }//end for
}

//declaramos una variable buttonFinal que tomara como valor el boton "check-game"
const buttonFinal$$ = document.querySelector('[data-function="check-game"]');
//addEventLstener de click en el boton
buttonFinal$$.addEventListener('click', () => {
    //delaramos una variable que tomara como valor un nuevo elemento "p"
    let pAnswer$$=  document.createElement('p');
    //Añadimos a este elemento "p" declarado anteriormente el texto "Puntuacion total" + la variable puntuacionTotal (número)
    pAnswer$$.innerHTML = "Puntuación total: "+puntuacionTotal;
    //Añadimos al div nuestro "p" creado anteriomente para dar visualización al usuario de su puntuación final
    divQuestions$$.appendChild(pAnswer$$)


})

})





