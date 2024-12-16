const Login = require('../models/models');
const bcrypt = require ('bcrypt')
const jwt = require ('jsonwebtoken')



exports.register = async (req,res)=>{
    const {nombre,apellido,correo,contraseña} = req.body;
    


    try{
        const hanshedPassword = await bcrypt.hash(contraseña.trim(),10);
        const login = new Login({nombre,apellido,correo,contraseña:hanshedPassword});
        await login.save();
        res.status(201).json({message:'Usuario registrado con exito'})
    }catch (err){
        if (err.code=== 1000){
            res.status(400).json({error:'el correo ya esta registrado'});
        }else {
            res.status(400).json({error:'error al registrar usuario',details:err.message})
        }
    }
};


/* exports.entered = async (req,res) =>{
    const {correo,contraseña} = req.body;



    try{
        const  login = await Login.findOne({correo});
        if (!login){
            return res.status(401).json({error:'usuario no encontrado'});
        } 
        console.log('usuario encontrado:',login.contraseña);


        const comparePassword = await bcrypt.compare(contraseña.login.contraseña)
        console.log(comparePassword);

        if(comparePassword === false) return res.status(400).json({message:'contraseña incorrecta'});

        const token = jwt.sign({id:login._id}, process.env.JWT_SECRET,{expiresIn: '1'});
        res.json({message:'inicio de sesion exitoso',token})
    }catch(err){
        res.status(500).json({error:'error al iniciar sesion',details:err.message})
    }
} */
    exports.entered = async (req, res) => {
        const { correo, contraseña } = req.body;
        try {
          // Buscar usuario por correo
          const login = await Login.findOne({ correo });
      
          // Verificar si el usuario existe
          if (!login) {
            return res.status(401).json({ error: 'Usuario no encontrado' });
          }
      
          // Log: Verificar si se encuentra el usuario
          console.log('Usuario encontrado:', login.contraseña);
      
          // Depuración: Verificar las contraseñas
          console.log('Contraseña ingresada:', contraseña.trim());
          console.log('Contraseña almacenada en la base de datos:', login.contraseña);
      
          // Comparar la contraseña ingresada con la almacenada usando el método de la instancia
      
          const comparePassword = await bcrypt.compare(contraseña,login.contraseña)
          console.log(comparePassword);
          
          if(comparePassword === false) return res.status(400).json({message: 'Contraseña incorrectos.'});
      
          // Generar el token JWT
          const token = jwt.sign({ id: login._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
          res.json({ message: 'Inicio de sesión exitoso', token });
        } catch (err) {
          res.status(500).json({ error: 'Error al iniciar sesión', details: err.message });
        }
      };

exports.verusuarios = async (req,res) =>{
 

    try{
        const login = await Login.find();
        res.json(login);
    }catch(err){
        res.status(500).json({error: 'error al obtener usuarios',details:message});
    }
}