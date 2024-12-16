const express = require('express');
const cors = require('cors');
const conecDB = require('./config/config');
const loginRutas = require('./routes/rout');

require('dotenv').config();

const app = express();

const allowedOrigins = [
    'http://localhost:51989', 
    'http://localhost:52658',
    'http://localhost:53697', 
    'http://localhost:55095'
  ];
  
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Origen no permitido por CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

// Manejo de solicitudes preflight
app.options('*', cors());

app.use(express.json());

conecDB();

app.use('/api', loginRutas);

const PORT = process.env.PORT || 7700;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
