CREATE DATABASE scout;

USE scout;

CREATE TABLE usuario(
    id VARCHAR(20) PRIMARY KEY,
    nombres VARCHAR(50),
    apellidos VARCHAR(50),
    correo VARCHAR(50),
    pass VARCHAR(255),
    rol VARCHAR(50),
    unidad VARCHAR(50)
);

DESCRIBE usuario;

CREATE TABLE eventos(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    tipo_evento VARCHAR(50),
    descripcion VARCHAR(100),
    unidad VARCHAR(20),
    fecha DATE NOT NULL,
    hora TIME NOT NULL
);

DESCRIBE eventos;


CREATE TABLE unidad(

);

DESCRIBE unidad;

CREATE TABLE estado(
    id INT,
    valor INT

);

DESCRIBE estado;

CREATE TABLE cronograma(
    
);

DESCRIBE cronograma;

