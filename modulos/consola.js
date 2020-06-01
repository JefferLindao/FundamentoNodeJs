// console.log('hola')

const table = [
  {
    nombre: 'Jefferson',
    apellido: 'Lindao'
  },
  {
    nombre: 'Jeffer',
    apellido: 'Gomez'
  }
]
console.table(table)
function llamarme() {
  console.group('function llamarme')
  console.log('Hola')
  console.log('Blalalala')
  console.groupEnd('function llamarme')
}

function llamar() {
console.group('function llamar')
console.log('Hola')
console.log('entrando a la funcion llamarme')
llamarme()
console.log('saliendo a la funcion llamarme')
console.groupEnd('function llamar')
}

llamar()

console.count('veces')
console.count('veces')
console.count('veces')
console.countReset('veces')
console.count('veces')

