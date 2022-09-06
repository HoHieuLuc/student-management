-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 05, 2022 at 09:32 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `student-react`
--

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `gender` char(1) NOT NULL,
  `teams` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`, `email`, `gender`, `teams`) VALUES
(1, 'Nguyen Duc Linh', 'duclinhpq2001@gmail.com', 'M', 'Team 2'),
(2, 'Hoang Anh Tuan', 'anhtuanhoang2001@gmail.com', 'M', 'Team 2'),
(3, 'Nguyen Ngoc Dang Quang', 'quangnguyen2162001@gmail.com', 'M', 'Team 3'),
(4, 'Do Tuan Anh', 'donshina2001@gmail.com', 'M', 'Team 4'),
(6, 'Nguyen Linh Hong', 'bunnynguyen2105@gmail.com', 'F', 'Team 1'),
(15, 'gwgqqh', 'hqhq@hwhh.gwgw', 'F', 'Team 3'),
(13, 'Nguyễn Văn Test', 'fafa@gag.jjjj', 'M', 'Team 3'),
(14, 'hehe', 'heh@heh.gwg', 'M', 'Team 1');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `firstname`, `lastname`) VALUES
(-1, 'admin', '$2a$10$bVkQn7h6/NMg86eN4FpJCeVZrrPsSvk/IaHt7vR8CQVcCiDV0H7Li', 'huy', 'huy'),
(1, 'test', '$2a$10$bVkQn7h6/NMg86eN4FpJCeVZrrPsSvk/IaHt7vR8CQVcCiDV0H7Li', 'Thien', 'Huynh'),
(3, 'test2', '$2a$10$bVkQn7h6/NMg86eN4FpJCeVZrrPsSvk/IaHt7vR8CQVcCiDV0H7Li', 'test', 'test'),
(4, 'test3', '$2a$10$bVkQn7h6/NMg86eN4FpJCeVZrrPsSvk/IaHt7vR8CQVcCiDV0H7Li', 'test', 'testtest'),
(5, 'test4', '$2a$10$bVkQn7h6/NMg86eN4FpJCeVZrrPsSvk/IaHt7vR8CQVcCiDV0H7Li', 'nguyen', 'test'),
(6, 'test5', '$2a$10$bVkQn7h6/NMg86eN4FpJCeVZrrPsSvk/IaHt7vR8CQVcCiDV0H7Li', 'test 5 first name', 'test 5 last name'),
(7, 'test6', '$2a$10$627RIauHZtYyWhGn1olOAe.ZIds5fS2j29gGPUnUoGeDS8ciL0s5W', 'test6tstes', 'test6');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
