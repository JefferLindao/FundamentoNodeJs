async function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hola, '+ nombre)
      resolve(nombre)
    }, 1000)
  })
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Adios', nombre)
      resolve()
    }, 1000)
  })
  
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('bla bla bla bla...')
      resolve(nombre)
      // reject('Hubo un error')
    }, 1000)
  })

}


async function main() {
 let nombre= await hola('Jefferson')
 await hablar()
 await hablar()
 await hablar()
 await hablar()
 await adios(nombre)
 console.log('Termina el proceso')
}
console.log('Empezamos el proceso')
main()
