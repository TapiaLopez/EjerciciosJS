// En base al ejercicio anterior. Crea dinamicamente un elemento <p> por cada petición a la api que diga...
// 'El nombre X tiene un Y porciento de ser de Z' etc etc.

// EJ: El nombre Abel tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.



const baseUrl = 'https://api.nationalize.io?name=';


function handleClick(event){
    fetch(baseUrl+valorinput)
.then(res => res.json())
.then(result => {
    console.log(result)
})
}

let newP$$ = document.createElement("p");
let newContent$$ = document.createTextNode("'El nombre Carlos tiene 5 porciento de ser de Marte y un 6 porciento de ser de Madrid'");
newP$$.appendChild(newContent$$);

  
  
//document.querySelector("button").addEventListener("click", handleClick);

