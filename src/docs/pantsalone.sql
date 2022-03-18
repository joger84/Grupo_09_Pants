-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 19, 2022 at 12:09 AM
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
-- Table structure for table `color_product`
--

CREATE TABLE `color_product` (
  `id` int(100) NOT NULL,
  `colorId` int(100) NOT NULL,
  `productId` int(100) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `color_product`
--

INSERT INTO `color_product` (`id`, `colorId`, `productId`, `createdAt`, `updatedAt`) VALUES
(1, 2, 5, '2022-03-14 02:38:13', '2022-03-14 02:38:13'),
(2, 3, 6, '2022-03-14 02:42:33', '2022-03-14 02:42:33');

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

CREATE TABLE `genres` (
  `id` int(100) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`id`, `name`) VALUES
(1, 'Women'),
(2, 'Men'),
(3, 'Kids');

-- --------------------------------------------------------

--
-- Table structure for table `genre_product`
--

CREATE TABLE `genre_product` (
  `id` int(100) NOT NULL,
  `genreId` int(100) NOT NULL,
  `productId` int(100) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `genre_product`
--

INSERT INTO `genre_product` (`id`, `genreId`, `productId`, `createdAt`, `updatedAt`) VALUES
(1, 3, 5, '2022-03-14 02:38:13', '2022-03-14 02:38:13'),
(2, 2, 6, '2022-03-14 02:42:33', '2022-03-14 02:42:33');

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
(2, 'Mustang', 'Pantalón más o menos', 257, 2750, '250', 'default.png', '2022-03-10 05:00:00', '2022-03-10 05:00:00', '2022-03-10'),
(4, 'Palio', 'pantalón de tela jean', 23, 150000, '25000', '1647223126652_img.png', '2022-03-14 01:58:46', '2022-03-14 01:58:46', '0000-00-00'),
(5, 'Prueba', 'pantalón de tela jean', 10, 200000, '25000', '1647225493435_img.png', '2022-03-14 02:38:13', '2022-03-14 02:38:13', '0000-00-00'),
(6, 'Palio', 'pantalón de tela jean', 45, 200000, '25000', '1647225753426_img.png', '2022-03-14 02:42:33', '2022-03-14 02:42:33', '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `product_shop`
--

CREATE TABLE `product_shop` (
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
-- Table structure for table `size_product`
--

CREATE TABLE `size_product` (
  `id` int(100) NOT NULL,
  `productId` int(100) NOT NULL,
  `sizeId` int(100) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `size_product`
--

INSERT INTO `size_product` (`id`, `productId`, `sizeId`, `createdAt`, `updatedAt`) VALUES
(1, 6, 3, '2022-03-14 02:42:33', '2022-03-14 02:42:33');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(100) NOT NULL,
  `fullName` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `user` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
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
-- Table structure for table `user_shop`
--

CREATE TABLE `user_shop` (
  `id` int(100) NOT NULL,
  `userId` int(100) NOT NULL,
  `shopId` int(100) NOT NULL
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
-- Indexes for table `color_product`
--
ALTER TABLE `color_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_colors` (`colorId`),
  ADD KEY `id_products` (`productId`);

--
-- Indexes for table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `genre_product`
--
ALTER TABLE `genre_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_genre` (`genreId`),
  ADD KEY `id_products` (`productId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_shop`
--
ALTER TABLE `product_shop`
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
-- Indexes for table `size_product`
--
ALTER TABLE `size_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_products` (`productId`),
  ADD KEY `id_size` (`sizeId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_shop`
--
ALTER TABLE `user_shop`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `shopId` (`shopId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `color_product`
--
ALTER TABLE `color_product`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `genre_product`
--
ALTER TABLE `genre_product`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `product_shop`
--
ALTER TABLE `product_shop`
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
-- AUTO_INCREMENT for table `size_product`
--
ALTER TABLE `size_product`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_shop`
--
ALTER TABLE `user_shop`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `color_product`
--
ALTER TABLE `color_product`
  ADD CONSTRAINT `color_product_ibfk_1` FOREIGN KEY (`colorId`) REFERENCES `colors` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `color_product_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `genre_product`
--
ALTER TABLE `genre_product`
  ADD CONSTRAINT `genre_product_ibfk_1` FOREIGN KEY (`genreId`) REFERENCES `genres` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `genre_product_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `product_shop`
--
ALTER TABLE `product_shop`
  ADD CONSTRAINT `product_shop_ibfk_2` FOREIGN KEY (`productsId`) REFERENCES `products` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `product_shop_ibfk_3` FOREIGN KEY (`shopId`) REFERENCES `shops` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `size_product`
--
ALTER TABLE `size_product`
  ADD CONSTRAINT `size_product_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `size_product_ibfk_3` FOREIGN KEY (`sizeId`) REFERENCES `sizes` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `user_shop`
--
ALTER TABLE `user_shop`
  ADD CONSTRAINT `user_shop_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `user_shop_ibfk_2` FOREIGN KEY (`shopId`) REFERENCES `shops` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
