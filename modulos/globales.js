/* let i = 0
let interval = setInterval(() => {
  console.log('Hola')
  if(i === 3){
    clearInterval(interval)
  }
  i++
}, 1000);

setImmediate(() => {
  console.log('Jefferson')
}) */

// console.log(__dirname)
// console.log(__filename)
global.miVariable = 'miVarible'
console.log(miVariable)
