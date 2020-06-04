function asincrona(callback) {
  setTimeout(() => {
    try {
      let a = 3 + 8
      callback(false, a)
    } catch (error) {
      callback(error, null)
    }
  }, 1000);
}

asincrona((err, dato) => {
  if(err){
    console.error('Tenemos un error')
    console.error(err)
    return false
  }

  dato === undefined ? dato ='no ha enviado un valor' : dato
  console.log('todo va bien mi datos es: ' + dato)
  
})
