/* Express, nos va ayudar a escribir menos codigo de nodejs al darnos
funciones que ya estan provados*/
//vamos a requerir express
const express = require('express');
//modulo path se encarga de unir directorios
const path = require('path');
//requerir modulo morgan
const morgan = require('morgan');
//requerir modulo mysql
const mysql = require('mysql');
//requerir modulo myconnection
const myConnection = require('express-myconnection');

//una vez requerido vamos a inicializarlo con una constante llamado app
const app = express();

//settings, seccion que se encargara de configurar express
//port (variable) que establecer el puerto del servidor
/*process.env.PORT || 3000 es como desirle que revise si existe un puerto
en el sistema operativo y de no existir usa el 3000*/
app.set('port', process.env.PORT || 3000);

//vamos a configurar el motor de plantillas que sera ejs
/* Vamos a confirgurar el motor de platillas ('view engine') que sera ejs
que ya instalamos */
app.set('view engine','ejs');

//luego vamos a decirle en donde esta esta carpeta view
/*luego de wies vamos a decierle en donde esta la ruta inicial del sistema 
operativo, entonces vamos a utilizar el modulo path*/
//entonces con el metodo join decimos une este directorio
//_dirname valor de nodejs se encarga de darme la ruta del archivo oque lo ejecuta
app.set('views', path.join(__dirname, 'views'));

/*
!middlewares, son funciones que se ejecutan antes de que vengan las peticiones
de los usuarios LAS QUE CONOCEMOS COMO RUTAS*/
/*vamos a requerir los morgan  como funcion y como parametros
 recibe dev que es una manera de mostrar algunos mensajes de consola sencillos*/
app.use(morgan('dev'));
/*funcion myConnection vamos a darle como parametro el modulo mysql, seguido
vamos a configurar host: luego usuario, password, puerto, nombre de la base de datos*/
app.use(myConnection(mysql, {
host: 'localhost',
user:'root',
password:'123456',
port:3306,
database:'nodejsMysqlCRUD'
/*aparte vamos a darle una configuracion que es como vamos a conectarnos al servidor que
seria single */
},'single'));
//urlencoded de express le daremos un parametro una propiedad extended
/*es decir que desde el modulo de express estamos llamando a un metodo que mos
va a permitir poder entender todos los datos que viene del formulario html*/
app.use(express.urlencoded({extended: true}));


//importando rutas
/*Vamos a decir tienes que ingresar a la carpeta route que esta el erchivo customer
y lo vamos aguardar en una costante llamada customerRoutes*/
const customerRoutes = require('./routes/customer');
//rutas, empezamos a escribir los urls que los usuario van a pedir en el servidor 
//aplicacion utiliza cada vez que llegue el usuario del servidor customer
app.use('/', customerRoutes);

/*archivos staticos, son complemento para imagenes, codigo fuente que iran en
la carpeta llamada public*/
/* utilizamos el metodo join del .path con el dirname public*/
app.use(express.static(path.join(__dirname, 'public')));

//app quedate escuchando por el puerto 3000 o variable port
app.listen(app.get('port'),()=>{
  //mensaje de consola que diga que esta conectado
console.log('Server on port 3000');
});
