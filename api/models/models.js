const mongoose = require ('mongoose')


const loginSchema = new mongoose.Schema({
    nombre:{type: String, required:true},
    apellido:{type:String,required:true},
    correo:{type:String,required:true, uniqque:true},
    contraseña:{type:String,required:true}
})

module.exports = mongoose.model('Login',loginSchema)