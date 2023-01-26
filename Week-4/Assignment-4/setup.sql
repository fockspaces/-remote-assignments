-- ARTICLE:
-- Create Table article
CREATE TABLE article(
   id INT AUTO_INCREMENT,
   title VARCHAR(255),
   content TEXT,
   arthorID VARCHAR(20),
   PRIMARY KEY(id)
);

-- Insert Row
INSERT INTO article (title, content, arthorID)
VALUES 
("Article 1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna in viverra malesuada, massa ante varius magna.", "1"),
("Article 2", "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.", "2"),
("Article 3", "Etiam eget augue id augue auctor placerat. Sed at risus id eros congue bibendum.", "3"),
("Article 4", "Mauris dictum, risus id aliquet aliquam, augue magna hendrerit nulla, nec suscipit magna libero id eros.", "1"),
("Article 5", "Integer euismod euismod mauris, euismod suscipit massa. Sed id risus semper, euismod augue eget, elementum massa.", "2"),
("Article 6", "Duis mollis, eros vel bibendum varius, massa velit malesuada velit, id congue metus magna in risus.", "3"),
("Article 7", "Cras euismod, leo id rutrum malesuada, augue magna bibendum libero, vel congue nulla massa vel est.", "1"),
("Article 8", "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.", "2"),
("Article 9", "Nam euismod, elit at pharetra interdum, enim augue ullamcorper dolor, sit amet bibendum eros magna vel purus.", "3"),
("Article 10", "Sed id risus semper, euismod augue eget, elementum massa. Sed id risus semper, euismod augue eget, elementum massa.", "1"),
("Article 11", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna in viverra malesuada, massa ante varius magna.", "2"),
("Article 12", "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.", "3"),
("Article 13", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna in viverra malesuada, massa ante varius magna.", "1"),
("Article 14", "Quisque eget nisl id nulla sagittis auctor. Sed id risus semper, euismod augue eget, elementum massa.", "2"),
("Article 15", "Proin bibendum, magna id tincidunt hendrerit, risus velit malesuada velit, id congue metus magna in risus.", "3"),
("Article 16", "Fusce euismod, leo id rutrum malesuada, augue magna bibendum libero, vel congue nulla massa vel est.", "1"),
("Article 17", "Etiam eget augue id augue auctor placerat. Sed at risus id eros congue bibendum.", " 2"),
("Article 18", "Integer euismod euismod mauris, euismod suscipit massa. Sed id risus semper, euismod augue eget, elementum massa.", "3"),
("Article 19", "Duis mollis, eros vel bibendum varius, massa velit malesuada velit, id congue metus magna in risus.", "1"),
("Article 20", "Cras euismod, leo id rutrum malesuada, augue magna bibendum libero, vel congue nulla massa vel est.", "2"),
("Article 21", "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.", "3"),
("Article 22", "Nam euismod, elit at pharetra interdum, enim augue ullamcorper dolor, sit amet bibendum eros magna vel purus.", "1"),
("Article 23", "Sed id risus semper, euismod augue eget, elementum massa. Sed id risus semper, euismod augue eget, elementum massa.", "2"),
("Article 24", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna in viverra malesuada, massa ante varius magna.", "3"),
("Article 25", "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.", "1"),
("Article 26", "Etiam eget augue id augue auctor placerat. Sed at risus id eros congue bibendum.", "2"),
("Article 27", "Integer euismod euismod mauris, euismod suscipit massa. Sed id risus semper, euismod augue eget, elementum massa.", "3"),
("Article 28", "Duis mollis, eros vel bibendum varius, massa velit malesuada velit, id congue metus magna in risus.", "1"),
("Article 29", "Cras euismod, leo id rutrum malesuada, augue magna bibendum libero, vel congue nulla massa velest.", "2"),
("Article 30", "Proin bibendum, magna id tincidunt hendrerit, risus velit malesuada velit, id congue metus magna in risus.", "3");
