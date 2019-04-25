DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;

USE burgers_db;

CREATE TABLE burgers (
item_id INT AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(100) NULL,
devoured BOOLEAN,
);
