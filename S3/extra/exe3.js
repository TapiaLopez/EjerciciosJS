// Dado el siguiente html y javascript. Utiliza el array para crear dinamicamente una lista ul > li de elementos
//  en el div de html con el atributo data-function="printHere".

// ```html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <div data-function="printHere"></div>

// </body>
// </html>
// ```

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

for(const car of cars){

    let ul$$ = document.createElement('ul');
    let li1$$ = document.createElement('li');
    let li2$$ = document.createElement('li');
    let li3$$ = document.createElement('li');
    let li4$$ = document.createElement('li');
    let li5$$ = document.createElement('li');
    
    li1$$.appendChild(ul$$)
    li2$$.appendChild(ul$$)
    li3$$.appendChild(ul$$)
    li4$$.appendChild(ul$$)
    li5$$.appendChild(ul$$)
    
    l1$$.innerHTML= countrie[0]
    l2$$.innerHTML= countrie[1]
    l3$$.innerHTML= countrie[2]
    l4$$.innerHTML= countrie[3]
    l5$$.innerHTML= countrie[4]
    console.log(countrie)
    
    }
    