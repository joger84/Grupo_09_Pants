-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 14, 2022 at 01:31 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pantsalone`
--
CREATE DATABASE IF NOT EXISTS `pantsalone` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `pantsalone`;

-- --------------------------------------------------------

--
-- Table structure for table `colors`
--

CREATE TABLE `colors` (
  `id` int(100) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `colors`
--

INSERT INTO `colors` (`id`, `name`) VALUES
(1, 'Black'),
(2, 'White'),
(3, 'Blue'),
(4, 'Grey'),
(5, 'Green');

-- --------------------------------------------------------

--
-- Table structure for table `colors_products`
--

CREATE TABLE `colors_products` (
  `id` int(100) NOT NULL,
  `colorId` int(100) NOT NULL,
  `productId` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `genders`
--

CREATE TABLE `genders` (
  `id` int(100) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `genre_products`
--

CREATE TABLE `genre_products` (
  `id` int(100) NOT NULL,
  `genreId` int(100) NOT NULL,
  `productsId` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(100) NOT NULL,
  `model` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `quantity` int(100) NOT NULL,
  `price` int(100) NOT NULL,
  `discount` decimal(10,0) NOT NULL,
  `image` varchar(100) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'default.png',
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `model`, `description`, `quantity`, `price`, `discount`, `image`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Mustang', 'Pantalón re copado', 257, 2750, '250', 'default.png', '2022-03-10 05:00:00', '0000-00-00 00:00:00', '0000-00-00'),
(2, 'Mustang', 'Pantalón más o menos', 257, 2750, '250', 'default.png', '2022-03-10 05:00:00', '2022-03-10 05:00:00', '2022-03-10');

-- --------------------------------------------------------

--
-- Table structure for table `products_shop`
--

CREATE TABLE `products_shop` (
  `id` int(100) NOT NULL,
  `productsId` int(100) NOT NULL,
  `shopId` int(100) NOT NULL,
  `quantity` int(100) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `discount` decimal(10,0) NOT NULL,
  `subTotal` decimal(10,0) NOT NULL,
  `orderDate` date NOT NULL,
  `orderShip` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `shops`
--

CREATE TABLE `shops` (
  `id` int(100) NOT NULL,
  `productsShopId` int(100) NOT NULL,
  `userId` int(100) NOT NULL,
  `total` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sizes`
--

CREATE TABLE `sizes` (
  `id` int(100) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sizes`
--

INSERT INTO `sizes` (`id`, `name`) VALUES
(1, 'Xs'),
(2, 'S'),
(3, 'M'),
(4, 'L'),
(5, 'Xl'),
(6, 'Xxl');

-- --------------------------------------------------------

--
-- Table structure for table `size_products`
--

CREATE TABLE `size_products` (
  `id` int(100) NOT NULL,
  `productsId` int(100) NOT NULL,
  `sizeId` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(100) NOT NULL,
  `fullName` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `User` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `eMail` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `genre` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `dateBirth` date NOT NULL,
  `country` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `role` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cratedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` date NOT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users_products`
--

CREATE TABLE `users_products` (
  `id` int(100) NOT NULL,
  `userId` int(100) NOT NULL,
  `productsId` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `colors_products`
--
ALTER TABLE `colors_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_colors` (`colorId`),
  ADD KEY `id_products` (`productId`);

--
-- Indexes for table `genders`
--
ALTER TABLE `genders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `genre_products`
--
ALTER TABLE `genre_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_genre` (`genreId`),
  ADD KEY `id_products` (`productsId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products_shop`
--
ALTER TABLE `products_shop`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_products` (`productsId`),
  ADD KEY `id_shop` (`shopId`);

--
-- Indexes for table `shops`
--
ALTER TABLE `shops`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_products_shop` (`productsShopId`),
  ADD KEY `id_user` (`userId`);

--
-- Indexes for table `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `size_products`
--
ALTER TABLE `size_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_products` (`productsId`),
  ADD KEY `id_size` (`sizeId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users_products`
--
ALTER TABLE `users_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`userId`),
  ADD KEY `id_products` (`productsId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `colors_products`
--
ALTER TABLE `colors_products`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `genders`
--
ALTER TABLE `genders`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `genre_products`
--
ALTER TABLE `genre_products`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `products_shop`
--
ALTER TABLE `products_shop`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `shops`
--
ALTER TABLE `shops`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `size_products`
--
ALTER TABLE `size_products`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users_products`
--
ALTER TABLE `users_products`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `colors_products`
--
ALTER TABLE `colors_products`
  ADD CONSTRAINT `colors_products_ibfk_1` FOREIGN KEY (`colorId`) REFERENCES `colors` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `colors_products_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `genre_products`
--
ALTER TABLE `genre_products`
  ADD CONSTRAINT `genre_products_ibfk_1` FOREIGN KEY (`genreId`) REFERENCES `genders` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `genre_products_ibfk_2` FOREIGN KEY (`productsId`) REFERENCES `products` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `products_shop`
--
ALTER TABLE `products_shop`
  ADD CONSTRAINT `products_shop_ibfk_2` FOREIGN KEY (`productsId`) REFERENCES `products` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `products_shop_ibfk_3` FOREIGN KEY (`shopId`) REFERENCES `shops` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `size_products`
--
ALTER TABLE `size_products`
  ADD CONSTRAINT `size_products_ibfk_2` FOREIGN KEY (`productsId`) REFERENCES `products` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `size_products_ibfk_3` FOREIGN KEY (`sizeId`) REFERENCES `sizes` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `users_products`
--
ALTER TABLE `users_products`
  ADD CONSTRAINT `users_products_ibfk_2` FOREIGN KEY (`productsId`) REFERENCES `products` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `users_products_ibfk_3` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;