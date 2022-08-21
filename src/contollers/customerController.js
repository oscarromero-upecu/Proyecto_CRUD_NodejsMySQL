//creamos un objeto llamado controller para ir cambiando
const controller = {};

//metodo list traera los datos de la tabla
controller.list = (req, res) => {
  req.getConnection((err,conn) => {
    conn.query('SELECT * FROM customer', (_err, customer) => {
          if(_err){
            res.json(err);
          }
          res.render('customers', {
             data: customer
          });
    });
  });
};

    

//exportamos el modulo controller
module.exports = controller;