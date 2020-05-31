function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log('Hola, '+ nombre)
    miCallback(nombre)
  }, 1000)
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log('Adios', nombre)
    otroCallback()
  }, 1000);
}

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log('bla bla bla bla...')
    callbackHablar()
  }, 1000)
}

function conversacion(nombre, veces, callback){
  if (veces>0){
    hablar(() => {
      conversacion(nombre, --veces, callback)
    })
  }else{
    adios(nombre, callback)
  }
}
console.log('Iniciando Proceso...')
hola('Jefferson', (nombre) => {
  conversacion(nombre,4,() => {
    console.log('Terminando proceso...')
  })
})

/**
 * Callbacks hell no es un buena practica 
 */
/* console.log('Iniciando Proceso...')
hola('Jefferson', (nombre) => {
  hablar(() => {
    hablar(() => {
      hablar(() => {
        adios(nombre, () => {
          console.log('Terminando Proceso...')
        })
      })
    })
  })
}) */
