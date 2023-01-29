-- ARTICLE:
-- Create Table article
CREATE TABLE article(
   id INT AUTO_INCREMENT,
   title VARCHAR(255),
   content TEXT,
   authorID VARCHAR(20),
   PRIMARY KEY(id)
);

-- Insert Row with setup.js
