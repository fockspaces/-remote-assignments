-- MySQL dump 10.13  Distrib 8.0.31, for Linux (x86_64)
--
-- Host: localhost    Database: assignment
-- ------------------------------------------------------
-- Server version	8.0.31-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` text,
  `arthorID` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,'Article 1','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna in viverra malesuada, massa ante varius magna.','1'),(2,'Article 2','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.','2'),(3,'Article 3','Etiam eget augue id augue auctor placerat. Sed at risus id eros congue bibendum.','3'),(4,'Article 4','Mauris dictum, risus id aliquet aliquam, augue magna hendrerit nulla, nec suscipit magna libero id eros.','1'),(5,'Article 5','Integer euismod euismod mauris, euismod suscipit massa. Sed id risus semper, euismod augue eget, elementum massa.','2'),(6,'Article 6','Duis mollis, eros vel bibendum varius, massa velit malesuada velit, id congue metus magna in risus.','3'),(7,'Article 7','Cras euismod, leo id rutrum malesuada, augue magna bibendum libero, vel congue nulla massa vel est.','1'),(8,'Article 8','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.','2'),(9,'Article 9','Nam euismod, elit at pharetra interdum, enim augue ullamcorper dolor, sit amet bibendum eros magna vel purus.','3'),(10,'Article 10','Sed id risus semper, euismod augue eget, elementum massa. Sed id risus semper, euismod augue eget, elementum massa.','1'),(11,'Article 11','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna in viverra malesuada, massa ante varius magna.','2'),(12,'Article 12','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.','3'),(13,'Article 13','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna in viverra malesuada, massa ante varius magna.','1'),(14,'Article 14','Quisque eget nisl id nulla sagittis auctor. Sed id risus semper, euismod augue eget, elementum massa.','2'),(15,'Article 15','Proin bibendum, magna id tincidunt hendrerit, risus velit malesuada velit, id congue metus magna in risus.','3'),(16,'Article 16','Fusce euismod, leo id rutrum malesuada, augue magna bibendum libero, vel congue nulla massa vel est.','1'),(17,'Article 17','Etiam eget augue id augue auctor placerat. Sed at risus id eros congue bibendum.',' 2'),(18,'Article 18','Integer euismod euismod mauris, euismod suscipit massa. Sed id risus semper, euismod augue eget, elementum massa.','3'),(19,'Article 19','Duis mollis, eros vel bibendum varius, massa velit malesuada velit, id congue metus magna in risus.','1'),(20,'Article 20','Cras euismod, leo id rutrum malesuada, augue magna bibendum libero, vel congue nulla massa vel est.','2'),(21,'Article 21','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.','3'),(22,'Article 22','Nam euismod, elit at pharetra interdum, enim augue ullamcorper dolor, sit amet bibendum eros magna vel purus.','1'),(23,'Article 23','Sed id risus semper, euismod augue eget, elementum massa. Sed id risus semper, euismod augue eget, elementum massa.','2'),(24,'Article 24','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna in viverra malesuada, massa ante varius magna.','3'),(25,'Article 25','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.','1'),(26,'Article 26','Etiam eget augue id augue auctor placerat. Sed at risus id eros congue bibendum.','2'),(27,'Article 27','Integer euismod euismod mauris, euismod suscipit massa. Sed id risus semper, euismod augue eget, elementum massa.','3'),(28,'Article 28','Duis mollis, eros vel bibendum varius, massa velit malesuada velit, id congue metus magna in risus.','1'),(29,'Article 29','Cras euismod, leo id rutrum malesuada, augue magna bibendum libero, vel congue nulla massa velest.','2'),(30,'Article 30','Proin bibendum, magna id tincidunt hendrerit, risus velit malesuada velit, id congue metus magna in risus.','3');
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'fred@gmail.com','123456'),(2,'sara@gmail.com','123456'),(3,'fock@gmail.com','123456');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-26 16:34:02
