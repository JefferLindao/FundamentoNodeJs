//NOMBRE=Jefferson WEB=jefferlindao.com node entorno.js
let saludo = process.env.NOMBRE || 'sin nombre' //envio variavle en consola
let web = process.env.WEB || 'no tengo web'
console.log('Hola '+ saludo)
console.log('Mi web es: '+ web)
