// Basandote en el siguiente array crea una lista ul > li con los textos del array.


const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let newul$$ = document.body.createElement('ul');
let newli$$ = document.body.createElement('li');

newul$$.appendChild(newli$$);
newli$$.textContent = apps;

console.log(newli$$)

