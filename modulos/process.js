//const process = require('process')

process.on('beforeExit', () => {
  console.log('Jeffer, el proceso va a  termino')
})

process.on('exit', () => {
  console.log('Jeffer, el proceso termino')
})

process.on('uncaughtException', (err, origen) => {
  console.log('Jeffer, Vaya se nos a olvidado capturar el error')
  console.log(err)
})

hola1233()
