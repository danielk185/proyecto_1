CREATE DATABASE scout;

USE scout;

CREATE TABLE usuario(
    id VARCHAR(20) PRIMARY KEY,
    nombres VARCHAR(50),
    apellidos VARCHAR(50),
    correo VARCHAR(50),
    pass VARCHAR(255),
    fk_id_unidad VARCHAR(50),
    fk_id_rol VARCHAR(50)
);

DESCRIBE usuario;

CREATE TABLE roles (
    id_rol INT NOT NULL PRIMARY KEY,
    rol VARCHAR(20)
)

DESCRIBE roles;

CREATE TABLE eventos(
    id_evento INT NOT NULL PRIMARY KEY,
    titulo VARCHAR(50),
    cargo_at VARCHAR(50),
    descripcion VARCHAR(100),
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    fk_id_rol INT,
    fk_id_unidad INT
);

DESCRIBE eventos;


CREATE TABLE unidad(
id_unidad INT NOT NULL PRIMARY KEY,
nombre_unidad varchar(50)
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

