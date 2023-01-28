-- Initialize database 
CREATE DATABASE assignment;
USE assignment;

-- USER:
-- Create Table user
CREATE TABLE user(
   id INT AUTO_INCREMENT,
   email VARCHAR(80),
   password VARCHAR(255),
   username VARCHAR(50),
   PRIMARY KEY(id)
);

-- Insert Row
INSERT INTO user (email, password, username) 
    values 
    ('fred@gmail.com', '123456', 'fred'), 
    ('sara@gmail.com', '123456', 'sara'),
    ('fock@gmail.com', '123456', 'fock');


