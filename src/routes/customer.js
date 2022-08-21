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
//router.post('/add', customerController.save);
//router.get('/update/:id', customerController.edit);
//router.post('/update/:id', customerController.update);
//router.get('/delete/:id', customerController.delete);

//luego exportamos el metodo router
module.exports = router;
