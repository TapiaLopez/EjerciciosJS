// Crea una arrow function que tenga dos parametros a y b y que por defecto el valor de a = 10 y de b = 5. 
// Haz que la función muestre por consola la suma de los dos parametros. 

// - Ejecuta esta función sin pasar ningún parametro
// - Ejecuta esta función pasando un solo parametro
// - Ejecta esta función pasando dos parametros

const suma = (b= 5, a = 10 ) =>{
    console.log(a + b )
}

suma()
suma(7)
suma(12,7)

