// Ahora vamos a trabajar con JSON SERVER para simular una api. Es muy fácil de usar. Simplemente instálalo de manera 
// global usando el comando  `npm i -g json-server` y una vez lo tengas instalado, ejecuta este 
// comando `json-server --watch exercise-2.json` en la posición donde esté el archivo exercise-2.json. 
// Los datos que nos brindará serán los alojados en el archivo exercise-2.json y estarán accesibles por 
// defecto en la url localhost:3000.
 
// Para este ejercicio vamos a obtener y pintar en el html una serie de notas del diario de nuestro queridísimo Eliot. 
// Para ello deberemos ejecutar el comando que comentabamos anteriormente y hacer un .fetch() a 
// la url `http://localhost:3000/diary`.
 
// Una vez tengas los datos tenemos que ordenarlos por fecha de menor a mayor con la propiedad .date. 
// Nuestro carismático personaje es un poco caótico y escribe las notas en páginas salteadas...
  
// Cuando lo tengas crea un div para cada nota del diario e introduce un ``<h3>``, un  ``<h5>`` y un ``<p>``
//  para su .title, .date y .description respectivamente.
  
// Finalmente añade un botón para poder eliminar las notas del diario. En concreto hay una que 
// a Eliot no le apetece recordar mucho...

fetch('http://localhost:3000/diary')
.then(res => res.json())
.then(diarylapi => {
console.log(diarylapi)
printData(diarylapi)
})

let mySortedDiary= myDiary.sort((a, b) => new Date(a.date) - new Date(b.date).getTime());

for(let i = 0; i < myDiary.length; i++){
const diaryNote = myDyary(i);
const div$$ = document.createElement('div');
div$$.innerHTML= `<h3>${diaryNote.title}</h3>
<h5>${diaryNote}</h5>
<p>${description}</p>`
document.body.appendChild(div$$)

const btn$$ = document.createElement('button');
btn$$.textContent = 'Eliminar';

btn$$.addEventListener("click",function()){
    div$$.remove

div$$.appendChild(btn$$);

}
}