// Usa un foin para imprimir por consola los datos del alienigena.

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (datos in alien){

    console.log('Propiedad: ' + datos + ', valor: ' + alien[datos])
    console.log(`Propiedad: ${datos}, valor: alien[${datos}]`)
}