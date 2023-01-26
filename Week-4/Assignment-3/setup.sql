-- Initialize database 
CREATE DATABASE assignment;
USE assignment;

-- USER:
-- Create Table user
CREATE TABLE user(
   id INT AUTO_INCREMENT,
   email VARCHAR(50),
   password VARCHAR(20),
   PRIMARY KEY(id)
);

-- Insert Row
INSERT INTO user (email, password) 
    values 
    ('fred@gmail.com', '123456'), 
    ('sara@gmail.com', '123456'),
    ('fock@gmail.com', '123456');


