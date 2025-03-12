-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 12, 2025 at 05:26 AM
-- Server version: 8.3.0
-- PHP Version: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `frontend43`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;

CREATE TABLE IF NOT EXISTS `book` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `price` int NOT NULL,
  `author` varchar(128) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;


--
-- Dumping data for table `book`
--

INSERT INTO `book` (`id`, `name`, `price`, `author`) VALUES
(2, 'Mastering Javascript', 2100, 'Ankit Patel'),
(4, 'learn html', 250, 'balar'),
(5, 'css 3', 700, 'Mr Pavitra Italiya');

-- --------------------------------------------------------

--
-- Table structure for table `person`
--

DROP TABLE IF EXISTS `person`;
CREATE TABLE IF NOT EXISTS `person` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `salary` int DEFAULT NULL,
  `gender` tinyint(1) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


--
-- Dumping data for table `person`
--

INSERT INTO `person` (`id`, `name`, `dob`, `salary`, `gender`, `photo`) VALUES
(1, 'Samarth', '2004-12-01', 20100, 1, 'user1.jpeg'),
(2, 'Divya Kurmari', '1984-01-01', 35099, 0, 'user2.jpeg'),
(3, 'Neha', '1995-03-22', 40099, 2, 'user3.jpeg'),
(4, 'Rohan', '2000-11-05', 28100, 1, 'user4.jpeg'),
(5, 'Priya', '1997-09-10', 50099, 2, 'user5.jpeg'),
(6, 'Vikram', '1992-06-30', 60099, 1, 'user6.jpeg'),
(7, 'Ananya', '1999-02-18', 32099, 2, 'user7.jpeg'),
(8, 'Kunal', '2001-05-25', 27100, 1, 'user8.jpeg'),
(9, 'Simran', '1996-08-12', 45099, 2, 'user9.jpeg'),
(10, 'Rahul', '1993-04-20', 55099, 1, 'user10.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

DROP TABLE IF EXISTS `teachers`;
CREATE TABLE IF NOT EXISTS `teachers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `mobile` varchar(12) NOT NULL,
  `age` int NOT NULL,
  `class` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `teachers`
--

INSERT INTO `teachers` (`id`, `name`, `mobile`, `age`, `class`) VALUES
(1, 'Patel Ankit', '2147483647', 40, 12),
(2, 'Devarsh Patel', '9662512857', 18, 12),
(4, 'Patel Ankit', '9662512857', 40, 12);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
