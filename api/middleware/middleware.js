const jwt = require ('jsonwebtoken')


/* const authenticateToken =  (req,res,next) => {
    const token = req.headers.authorization?.split (' ')[1];
    if (!token)  return res.status (401).json ({error: 'acceso no autorizado'});

    try {
        const decoded = jwt.verify (token,process.env.JWT_SECRET);
        req.user = decoded;
        next ();
    }catch (error){
        res.status (403).json({error:"token invalido o expirado"});
    }
};

module.exports = authenticateToken; */