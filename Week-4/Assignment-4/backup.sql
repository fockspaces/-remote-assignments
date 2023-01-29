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
  `authorID` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,'The Lost Key','Sara searched high and low for the key that would unlock the mysterious chest she found in the attic. She looked under the couch, in the fridge, and even in the toilet, but it was nowhere to be found. Just when she was about to give up, she found it hanging on a hook by the door, where she had put it last week.','2'),(2,'The Adventures of Timmy','Timmy and his dog, Max, embarked on many wild adventures together. They climbed mountains, swam across rivers, and even explored a hidden cave. But their most exciting adventure was when they discovered an ancient treasure hidden deep in the jungle.','3'),(3,'A New Beginning','After a difficult year, Emily decided it was time for a fresh start. She quit her job, sold her house, and bought a one-way ticket to Paris. There, she discovered a new passion for painting and found love in the most unexpected place.','1'),(4,'The Secret Garden','As a child, Emma loved to play in the abandoned garden behind her house. She would spend hours exploring the overgrown paths and discovering hidden treasures. But as she grew older, she forgot all about the garden until one day, she stumbled upon it again by accident and rediscovered the magic it held.','2'),(5,'The Gift','On his birthday, Jack received a mysterious gift from an unknown sender. It was a simple wooden box with a note that read \'Open me when you need me.\' Jack put the box away, but as he went through a tough time in his life, he remembered the gift and opened it. Inside, he found a heartfelt message of support and a small amount of money that helped him get back on his feet.','3'),(6,'The Brave Little Mouse','Once upon a time, there was a brave little mouse named Sophie. She lived in a big house with lots of other mice, but she was different from the rest. She wasn\'t afraid to venture out into the unknown, and one day, she found a way to save her friends and family from the cat who had been terrorizing them.','1'),(7,'The Lost Treasure','For years, John had heard stories of a lost treasure buried deep in the desert. Despite the many challenges and obstacles he faced, he never gave up on his quest to find it. One day, while exploring a remote canyon, he finally stumbled upon the treasure and discovered that the true wealth was the journey itself.','2'),(8,'The Mysterious Island','When a group of friends set out on a sailing trip, they never expected to end up shipwrecked on a deserted island. As they struggled to survive and find a way home, they discovered a hidden cave filled with ancient artifacts and clues to a long-forgotten civilization. But as they uncover the island\'s secrets, they realize they may not be alone.','3'),(9,'The Forgotten City','As an archaeologist, Michael had dedicated his life to uncovering the mysteries of ancient civilizations. His greatest discovery came when he stumbled upon a hidden city that had been buried for centuries. As he delved deeper into the ruins, he uncovered a rich and complex culture that had been long forgotten by history.','1'),(10,'The Escape Artist','Growing up, Alex was always fascinated by magic and illusions. He spent years perfecting his craft, and eventually became a renowned escape artist. But his greatest challenge came when he was hired to escape from a high-security prison. With the help of his team and his expertise, he was able to break out, but not without leaving behind a mystery that puzzled authorities for years.','1'),(11,'The Ghost Hunter','As a paranormal investigator, Jane had heard it all: ghostly apparitions, haunted houses, and otherworldly encounters. But her most challenging case came when she was called to investigate a series of bizarre occurrences in an old hotel. Despite the skepticism of her colleagues and the danger she faced, she was determined to uncover the truth and put the spirits to rest.','2'),(12,'The Space Odyssey','As a young girl, Samantha dreamed of traveling to space. She worked hard and dedicated her life to becoming an astronaut. Her dream came true when she was chosen to be part of a mission to explore a distant planet. But what they found there was not what they expected, and they had to fight to survive and find a way back to Earth.','3'),(13,'The Missing Painting','After her grandfather\'s passing, Sarah inherited his art collection. But when she went through the collection, she found one painting was missing. She searched high and low for it, but she couldn\'t find it. She eventually found out that her grandfather had sold it before he died, and it was now hanging in the local art museum','1'),(14,'The Mysterious Island','When a group of friends set out on a sailing trip, they stumbled upon a deserted island. As they explored the island, they found strange markings and signs of an ancient civilization. They soon realized that the island was not as deserted as they thought and they had to find a way to escape before it was too late.','2'),(15,'The Time Traveler','John, a scientist, developed a time machine. He used it to travel to different eras, experiencing different cultures and events. But when he went too far back in time, he realized that he couldn\'t return to his own time. He had to find a way back before it was too late.','1'),(16,'The Ghost in the House','After moving into a new house, a family starts to experience strange occurrences. They soon realize that their house is haunted by a ghost. With the help of a paranormal investigator, they uncover the ghost\'s past and find a way to lay it to rest.','1'),(17,'The Lost City','An archaeologist discovers an ancient city that was thought to be only a myth. As he explores the ruins, he uncovers secrets of the past and the reason why the city was lost to time.','2'),(18,'The Alien Encounter','When a UFO crashes in a small town, the locals initially think it\'s a hoax. But when they discover that it\'s real, they must confront the reality of extraterrestrial life and the potential consequences of their encounter.','3'),(19,'The Secret Agent','As a top secret agent, Jack\'s mission is to protect his country from enemies both foreign and domestic. But when he\'s betrayed by someone close to him, he must fight to clear his name and take down the real threat.','1'),(20,'The Lost Heirloom','When her grandmother passed away, Emily inherited a valuable family heirloom. But when she went to retrieve it, she found out it was missing. She sets out to find it and uncover the truth behind its disappearance.','1'),(21,'The Runaway','After a family tragedy, a teenager runs away from home. As he travels, he meets a variety of people and has a range of experiences, but ultimately he realizes that the only way to find peace is to come to terms with his past.','3'),(22,'The Stranger','A man moves to a small town and begins to uncover secrets about the residents, leading him to question his own sanity.','2'),(23,'The Lost City','An archaeologist embarks on a journey to uncover the secrets of an ancient civilization, but soon realizes that the city\'s past may be more dangerous than he thought.','3'),(24,'The Secret Garden','A young girl discovers a hidden garden on her uncle\'s estate, where she learns to confront her own grief and find healing through nature.','1'),(25,'The Alchemist','A shepherd boy embarks on a journey to fulfill his personal legend, encountering a series of challenges and learning valuable lessons along the way.','3'),(26,'The Picture of Dorian Gray','A young man\'s portrait ages while he remains unchanged, leading him down a path of decadence and destruction.','1'),(27,'The Catcher in the Rye','A teenage boy grapples with the complexities of adulthood and his own identity in the aftermath of his expulsion from school.','2'),(28,'The Stranger','A man moves to a small town and begins to uncover secrets about the residents, leading him to question his own sanity.','3'),(29,'The Lost City','An archaeologist embarks on a journey to uncover the secrets of an ancient civilization, but soon realizes that the city\'s past may be more dangerous than he thought.','2'),(30,'The Secret Garden','A young girl discovers a hidden garden on her uncle\'s estate, where she learns to confront her own grief and find healing through nature.','1'),(31,'The Alchemist','A shepherd boy embarks on a journey to fulfill his personal legend, encountering a series of challenges and learning valuable lessons along the way.','7'),(32,'The Picture of Dorian Gray','A young man\'s portrait ages while he remains unchanged, leading him down a path of decadence and destruction.','2'),(33,'The Catcher in the Rye','A teenage boy grapples with the complexities of adulthood and his own identity in the aftermath of his expulsion from school.','3');
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
  `email` varchar(80) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'fred@gmail.com','$2b$10$zQseJ0r8wm2dSPFwRqH0lulDi21y6wbZ.ifEO1heyoP6cGh1QDbEG','fred'),(2,'sara@gmail.com','$2b$10$zQseJ0r8wm2dSPFwRqH0lulDi21y6wbZ.ifEO1heyoP6cGh1QDbEG','sara'),(3,'fock@gmail.com','$2b$10$zQseJ0r8wm2dSPFwRqH0lulDi21y6wbZ.ifEO1heyoP6cGh1QDbEG','fock');
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

-- Dump completed on 2023-01-29 20:13:11
