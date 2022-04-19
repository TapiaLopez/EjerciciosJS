// Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.

const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
 {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
 {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
 {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
 {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

 for (let i = 0; i < countries.length; i++){
    
    let div$$ = document.createElement("div");

   countries.title.appendchild(div$$)
    countries.imgUrl.appendchild(div$$)
 }
 deletebutton$$.innerHTML = countries.pop()

 for(countri of countries){

    

    let deletebutton$$= document.createElement('button')
    deletebutton$$.textContent = 'eliminar'
    countri.appendChild(deletebutton$$)
}