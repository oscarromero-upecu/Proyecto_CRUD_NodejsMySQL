--creando la base de datos
CREATE DATABASE nodejsMysqlCRUD;

--utilizando la base de datos
use nodejsMysqlCRUD;

--creando la tabla
CREATE TABLE customer (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  Nombre VARCHAR(50) NOT NULL,
  Direccion VARCHAR(100) NOT NULL,
  Telefono VARCHAR(15)
);

--mostrar la tabla
show tables;

--describir la tabla
describe customer;