-- 1. Write an SQL statement to select all articles with their author’s email.
SELECT title, content, email FROM article
LEFT JOIN user ON user.id = arthorID;

-- 2. Write another SQL statement to select articles from 7th to 12th sorted by id.
SELECT title, content FROM article
ORDER BY id
LIMIT 6, 6;