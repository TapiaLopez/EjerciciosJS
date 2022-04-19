// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.


const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];


for(const countrie of countries){

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
