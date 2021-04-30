DROP DATABASE IF EXISTS `burgers_db`;
CREATE DATABASE `burgers_db`;
USE `burgers_db`;

CREATE TABLE `burgers` (
	`id` Int(11) AUTO_INCREMENT NOT NULL,
	`burger_name` VARCHAR(255) NOT NULL,
	`devoured` BOOLEAN,
	PRIMARY KEY ( `id` )
); 
 
INSERT INTO burgers (burger_name, devoured)
VALUES ('Big Mac', FALSE);
INSERT INTO burgers (burger_name, devoured)
VALUES ('Chease Burger', FALSE);
INSERT INTO burgers (burger_name, devoured)
VALUES ('Jumbo Jack', FALSE); 