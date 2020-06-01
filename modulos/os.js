const os = require('os')

// console.log(os.arch())
// console.log(os.platform())
// console.log(os.cpus().length)

// console.log(os.constants)
const SIZE = 1024
function kg(bytes){return bytes/SIZE}
function mg(bytes){return kg(bytes)/SIZE}
function gb(bytes){return mg(bytes)/SIZE}


// console.log(os.freemem())
// console.log(kg(os.freemem()))
// console.log(mg(os.freemem()))
// console.log(gb(os.freemem()))
// console.log(gb(os.totalmem()))


// console.log(os.homedir())
// console.log(os.tmpdir())

console.log(os.hostname())
console.log(os.networkInterfaces())
