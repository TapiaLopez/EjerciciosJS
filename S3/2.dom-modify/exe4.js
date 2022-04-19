// Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.


let newP$$ = document.body.createElement("p");
let newContent$$ = document.createTextNode("'Soy dinámico!'");
newP$$.appendChild(newContent$$);

console.log(newP$$)
