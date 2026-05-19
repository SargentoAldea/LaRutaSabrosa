const express = require('express');
const router = express.Router();

const platoC = require('../Controllers/platoC');

router.get('/', platoC.todoPlato);          
router.get('/:id', platoC.platoID);        
router.post('/', platoC.crearPlato);       
router.put('/:id', platoC.actualizarPlato); 
router.delete('/:id', platoC.eliminarPlato);

module.exports = router;