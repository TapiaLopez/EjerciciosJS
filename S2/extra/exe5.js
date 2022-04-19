// Crea una función llamada ``rollDice()`` que reciba como parametro el numero de caras que queramos que tenga el dado 
// que deberá silumar el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular 
// una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! busca 
// información sobre la función de javascript ``Math.random()``




function rollDice(dado){
    if (dado === 0) return null;
    
    let array = [];
    for (let index = 1; index <= dado.length; index++) {
        array.push(index);  // [1,2,3,4,5,6]
    }
    let numeroAleatorio = Math.random(1,dado);
    return array[numeroAleatorio];
}
console.log(rollDice(6));

