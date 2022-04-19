
fetch('http://localhost:3000/planets')
.then((result) => {
    return result.json();
})
.then((planets) =>  {
    console.log(planets);
    const divPlanets$$ = document.querySelector('[data-funtion-"planets"]');
    for(let planet of planets) {

        let div$$=document.createElement('div');
        div$$.innerHTML=`<img src="${planet.image}"/>
        <h2>${planet.name}</h2>`;
        divPlanets$$.appendChild(div$$);
        div$$.addEventListener('click', () => {
            createCharacters(planet.id);



        }
        )
    }
});

let createCharacters = (planetId) => {
fetch('http://localhost:3000/characters?idPlanet=' + planetId)
.then((response) => {
    return  response.json();
}).then (funtion(characters){
    console.log(characters);
    divAvatars$$$$.innerHTML=''
    for(const character of characters){
        let div$$ = document.createElement('div');
        const divAvatars$$ = document.querySelector('[data-funtion="characters"]');
        div$$.innerHTML= `img src="${character.avatar}"/>
        <h2>${character.name}</h2>`;
        
        divAvatars$$.appendChild(div$$);
    }
})
}