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
    ('fred@gmail.com', '$2b$10$zQseJ0r8wm2dSPFwRqH0lulDi21y6wbZ.ifEO1heyoP6cGh1QDbEG', 'fred'), 
    ('sara@gmail.com', '$2b$10$zQseJ0r8wm2dSPFwRqH0lulDi21y6wbZ.ifEO1heyoP6cGh1QDbEG', 'sara'),
    ('fock@gmail.com', '$2b$10$zQseJ0r8wm2dSPFwRqH0lulDi21y6wbZ.ifEO1heyoP6cGh1QDbEG', 'fock');



