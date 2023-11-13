-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 08, 2023 at 04:23 AM
-- Server version: 5.7.39-42-log
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbbjirdsl05pi9`
--

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text,
  `price` decimal(10,2) NOT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`id`, `name`, `description`, `price`, `image`) VALUES
(1, 'Classic Burger', 'A delicious classic burger with lettuce, tomato, and special sauce.', '6.99', 'classic_burger.jpg'),
(2, 'Cheeseburger', 'A mouthwatering cheeseburger with a juicy beef patty and melted cheese.', '7.99', 'cheeseburger.jpg'),
(3, 'Bacon Burger', 'A burger with crispy bacon strips, lettuce, tomato, and mayonnaise.', '8.49', 'bacon_burger.jpg'),
(4, 'Veggie Burger', 'A vegetarian burger with a plant-based patty, lettuce, and vegan mayo.', '6.49', 'veggie_burger.jpg'),
(5, 'Spicy Jalapeno Burger', 'A spicy burger topped with jalapeno peppers and pepper jack cheese.', '8.99', 'spicy_burger.jpg'),
(6, 'Mushroom Swiss Burger', 'A burger with sautéed mushrooms and Swiss cheese.', '7.99', 'mushroom_burger.jpg'),
(7, 'BBQ Bacon Burger', 'A BBQ-infused burger with crispy bacon and cheddar cheese.', '9.49', 'bbq_burger.jpg'),
(8, 'Double Patty Burger', 'A hearty burger with double beef patties, lettuce, and special sauce.', '9.99', 'double_burger.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
