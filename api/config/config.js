const mongoose = require ('mongoose')

const conectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI,{

        });
    }catch(error){
        console.error('error al conectar en la base de datos',error.message);
        process.exit(1)
    }
};

module.exports = conectDB