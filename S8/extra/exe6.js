const baseUrl = 'http://localhost:3000/characters'

const arena = ('[data-function="arena"]')

const characters$$ = document.querySelector('[data-function="characters"]')

fetch(baseUrl)
  .then((resp) => {
    return resp.json()
  })
  .then((cards) => {
    console.log(cards)

    for (let card of cards) {
      const div$$ = document.createElement('div')
      const h2$$ = document.createElement('h2')
      const image$$ = document.createElement('img')

      h2$$.innerHTML = card.name
      image$$.src = card.avatar

      div$$.appendChild(h2$$)
      div$$.appendChild(image$$)
      characters$$.appendChild(div$$)

      div$$.addEventListener(
        'click',
        () => {
          seleccharacter(card)
        },
        { one: true },
      )
    }
  })

let firstcharter
let secondcharacter

pSelection$$.innerHTML = 'Selection character ' + card

function seleccharacter(card) {
  if (firstcharter === undefined) {
    firstcharter = card
  } else {
    secondcharacter = card
    let bSelection$$ = document.createElement('button')
    bSelection$$.textContent = 'luchar'
    characters$$.appendChild(bSelection$$)
  }
}


