//vamos a requerir express
const express= require('express');
//metodo llamado router lo que me devuelve es un objeto de js
//en este metodo se puede ir agregando rutas para reutilizarlas
const router = express.Router();
//vamos a requerir ese archivo controller como una cosntante
const customerController = require('../contollers/customerController');

/*cuando recibas la ruta inicial al servidor vamos a manejar con la funcion
rep,res que es la encargada de enviar la respuesta*/
router.get('/', customerController.list);
/*router escucha a travez del metodo post un aruta nueva llamada add*/
router.post('/add', customerController.guardar);
router.get('/actualizar/:id', customerController.actualizar);
router.post('/actualizar/:id', customerController.editar);
//parametro de la ruta :id
router.get('/eliminar/:id', customerController.eliminar);

//luego exportamos el metodo router
module.exports = router;
