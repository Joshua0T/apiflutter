const express = require ('express')
const { register, entered, verusuarios } = require ('../controllers/controllers')
const router = express.Router();

router.post('/register',register),
router.post ('/entered',entered),
router.get('/verusuarios', verusuarios)


module.exports = router;