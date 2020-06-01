function seRompe() {
  return 3 + z
}

function seRompeAsincrono(cb) {
  setTimeout(() => {
    try {
      return 5 + j
    } catch (error) {
      console.error('Error en mi funcion Asincrona..,')
      cb(error)
    }
  }, 1000);
}

try {
  seRompe()
} catch (err) {
  console.error('Vaya, algo se ha roto...')
  console.error(err.message)
}

seRompeAsincrono((err) => {
  console.error(err.message)
})
console.log('esto sigue corriendo')
