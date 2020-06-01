const http = require('http')

http.createServer(router).listen(3000)
console.log('Escuchando http en el puerto 3000')

function router (req, res) {
  switch (req.url) {
    case'/hola':
      res.write('Hola, que tal')
      res.end()
      break
    default:
      res.write('Error 404: no se lo que quieres')
      res.end()
      break;
  }

  // console.log('Nueva peticion')
  // console.log(req.url)

  // res.write('Hola, ya se utilizar Http de node js')
  // res.writeHead(201, {'Content-Type': 'text/plain'})
  // res.end()
}
