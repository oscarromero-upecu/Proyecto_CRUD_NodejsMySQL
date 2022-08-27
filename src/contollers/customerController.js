const { connect } = require("../routes/customer");

//creamos un objeto llamado controller para ir cambiando
const controller = {};

//metodo list traera los datos de la tabla
controller.list = (req, res) => {
  req.getConnection((err,conn) => {
    conn.query('SELECT * FROM customer', (err, customer) => {
          if(err){
            res.json(err);
          }else{
            res.render('customers', {
            data: customer
          });
          }
    });
  });
};

//dentro del rq.body vamos a recibir todos los datos del formulario html
controller.guardar = (req,res)=>{
  const data = req.body;
  console.log(data);
  req.getConnection((err, conn) => {
    conn.query('INSERT INTO customer set ?', [data], (_err, customer) => {
      if(_err){
        console.log(_err);
        res.redirect('/')
      }
      else{
        console.log('guardado');
        // redireccioname a la ruta inicial de mi servidor /
        res.redirect('/')
      }
  })
 })
};

controller.actualizar = (req,res)=>{
//para capturar el id lo vamos a obtener de un parametro de la url
const { id } = req.params;
req.getConnection((err,conn)=>{
  conn.query('SELECT * FROM customer WHERE id = ?',[id],(_err,filas)=>{
    if(_err){
      console.log(_err);
      res.redirect('/')
    }
    else{
      console.log('actualizado');
      // renderizamos con el item 0 /
      res.render('customersEditar',{
        data: filas[0]
      })
    }
  });
});
}
controller.editar = (req,res)=>{
  //para capturar el id lo vamos a obtener de un parametro de la url
  const { id } = req.params;
  const nuevoCliente = req.body;
  req.getConnection((err,conn)=>{
    conn.query('UPDATE customer set ? WHERE id = ?',[nuevoCliente,id],(_err,filas)=>{
      if(_err){
        console.log(_err);
        res.redirect('/')
      }
      else{
        console.log('actualizado');
        // redireccioname a la ruta inicial de mi servidor /
        res.redirect('/')
      }
    });
  });
  }

controller.eliminar = (req,res)=>{
  //para capturar el id lo vamos a obtener de un parametro de la url
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
};
    

//exportamos el modulo controller
module.exports = controller;