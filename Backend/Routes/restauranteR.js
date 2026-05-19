const express = require('express');
const router = express.Router();

const restauranteC = require('../Controllers/restauranteC');

router.get('/', restauranteC.todoRestaurante);         
router.get('/:id', restauranteC.restauranteID);        
router.post('/', restauranteC.crearRestaurante);       
router.put('/:id', restauranteC.actualizarRestaurante); 
router.delete('/:id', restauranteC.eliminarRestaurante); 
router.get('/:id/platos', restauranteC.platosPorRestaurante);

module.exports = router;