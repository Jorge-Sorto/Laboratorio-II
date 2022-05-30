const mongoose= require('mongoose')

const url = 'mongodb://localhost/db_alumnos'

mongoose.connect(url, {
   useCreateIndex: true, 
   useFindAndModify: false, 
   useNewUrlParser: true, 
   useUnifiedTopology: true
}) 


const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error al conectar'))
db.once('open', function callback() {
    console.log("Estas conectado a MongoDB")
})

module.exports = db