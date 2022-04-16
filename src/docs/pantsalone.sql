-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 16, 2022 at 05:08 AM
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
(14, 3, 12, '2022-04-16 01:23:16', '2022-04-16 01:23:16'),
(15, 1, 13, '2022-04-16 01:26:27', '2022-04-16 01:26:27'),
(16, 3, 14, '2022-04-16 01:32:11', '2022-04-16 01:32:11'),
(17, 4, 15, '2022-04-16 01:33:40', '2022-04-16 01:33:40'),
(18, 3, 16, '2022-04-16 01:35:44', '2022-04-16 01:35:44'),
(19, 3, 17, '2022-04-16 01:38:12', '2022-04-16 01:38:12'),
(20, 1, 18, '2022-04-16 01:40:55', '2022-04-16 01:40:55'),
(21, 3, 19, '2022-04-16 01:42:54', '2022-04-16 01:42:54'),
(22, 2, 20, '2022-04-16 01:50:11', '2022-04-16 01:50:11'),
(23, 3, 21, '2022-04-16 01:52:39', '2022-04-16 01:52:39'),
(24, 4, 22, '2022-04-16 01:54:59', '2022-04-16 01:54:59'),
(25, 5, 23, '2022-04-16 01:56:23', '2022-04-16 01:56:23'),
(26, 1, 24, '2022-04-16 01:57:38', '2022-04-16 01:57:38'),
(27, 3, 25, '2022-04-16 02:01:13', '2022-04-16 02:01:13'),
(28, 3, 26, '2022-04-16 02:07:19', '2022-04-16 02:07:19'),
(29, 3, 27, '2022-04-16 02:11:30', '2022-04-16 02:11:30'),
(30, 3, 28, '2022-04-16 02:15:16', '2022-04-16 02:15:16'),
(31, 3, 29, '2022-04-16 02:19:20', '2022-04-16 02:19:20'),
(32, 2, 30, '2022-04-16 02:21:00', '2022-04-16 02:21:00'),
(33, 4, 31, '2022-04-16 02:24:04', '2022-04-16 02:24:04'),
(34, 1, 32, '2022-04-16 02:27:13', '2022-04-16 02:27:13');

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
(15, 1, 12, '2022-04-16 01:23:16', '2022-04-16 01:23:16'),
(16, 2, 13, '2022-04-16 01:26:27', '2022-04-16 01:26:27'),
(17, 1, 14, '2022-04-16 01:32:11', '2022-04-16 01:32:11'),
(18, 3, 15, '2022-04-16 01:33:40', '2022-04-16 01:33:40'),
(19, 1, 16, '2022-04-16 01:35:44', '2022-04-16 01:35:44'),
(20, 1, 17, '2022-04-16 01:38:12', '2022-04-16 01:38:12'),
(21, 2, 18, '2022-04-16 01:40:55', '2022-04-16 01:40:55'),
(22, 2, 19, '2022-04-16 01:42:54', '2022-04-16 01:42:54'),
(23, 1, 20, '2022-04-16 01:50:11', '2022-04-16 01:50:11'),
(24, 2, 21, '2022-04-16 01:52:39', '2022-04-16 01:52:39'),
(25, 1, 22, '2022-04-16 01:54:59', '2022-04-16 01:54:59'),
(26, 3, 23, '2022-04-16 01:56:23', '2022-04-16 01:56:23'),
(27, 1, 24, '2022-04-16 01:57:38', '2022-04-16 01:57:38'),
(28, 1, 25, '2022-04-16 02:01:13', '2022-04-16 02:01:13'),
(29, 1, 26, '2022-04-16 02:07:19', '2022-04-16 02:07:19'),
(30, 3, 27, '2022-04-16 02:11:30', '2022-04-16 02:11:30'),
(31, 3, 28, '2022-04-16 02:15:16', '2022-04-16 02:15:16'),
(32, 2, 29, '2022-04-16 02:19:20', '2022-04-16 02:19:20'),
(33, 2, 30, '2022-04-16 02:21:00', '2022-04-16 02:21:00'),
(34, 2, 31, '2022-04-16 02:24:04', '2022-04-16 02:24:04'),
(35, 2, 32, '2022-04-16 02:27:13', '2022-04-16 02:27:13');

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
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `model`, `description`, `quantity`, `price`, `discount`, `image`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(12, 'Panamera', 'Ankle Skinny Stretch Jean. They come in a washed grey hue that adds to the pair\'s nonchalance.', 60, 5000, '250', '1650072196838_img.png', '2022-04-16 01:23:16', '2022-04-16 01:30:00', NULL),
(13, 'Grand Marquis', 'There\'s your usual pair of jeans and then there\'s something from Our Grand Marquis. Crafted from cotton and with a straight-eg design.', 25, 10500, '600', '1650072387819_img.png', '2022-04-16 01:26:27', '2022-04-16 01:28:33', NULL),
(14, 'Mustang', 'Third Cut straight-leg jeans Characterised by a relaxed straight leg, these Third Cut jeans showcase Our Mustang\'s effortless approach to design.', 30, 4500, '100', '1650072731709_img.png', '2022-04-16 01:32:11', '2022-04-16 01:32:11', NULL),
(15, 'Our Legacy', 'A material renowned for its high quality, Selvedge denim makes up these Second Cut jeans from Our Legacy. It comes in an unwashed black tone that creates a sleek aesthetic.', 40, 5000, '250', '1650072820572_img.png', '2022-04-16 01:33:40', '2022-04-16 01:33:40', NULL),
(16, 'Challenger', 'straight-leg denim jeans. pale-blue cotton front button fastening two diagonal pockets to the sides two rear patch pockets light wash', 64, 6500, '0', '1650072944697_img.png', '2022-04-16 01:35:44', '2022-04-16 01:35:44', NULL),
(17, 'SLR McLaren', 'Blue cotton high-waisted straight leg washed front button and zip fastening slip pockets to the sides two rear patch pockets', 72, 4500, '0', '1650073092005_img.png', '2022-04-16 01:38:12', '2022-04-16 01:38:12', NULL),
(18, 'Avalanche', 'Crafted from cotton and with a straight-eg design, this black pair will earn a special place in your closet.', 50, 13850, '400', '1650073255283_img.jpg', '2022-04-16 01:40:55', '2022-04-16 01:40:55', NULL),
(19, 'Express 2500', 'Characterised by a relaxed straight leg, these Third Cut jeans showcase Our Legacy\'s effortless approach to design. They come in a washed blue hue that adds to the pair\'s nonchalance.', 43, 12540, '600', '1650073374541_img.png', '2022-04-16 01:42:54', '2022-04-16 01:42:54', NULL),
(20, 'Chevette', 'An understated light-grey colourway allows the construction of these Off-White trousers to take the focus. Unexpected panel detailing to the sides adds a contemporary touch to the piece.', 32, 10500, '450', '1650073811580_img.png', '2022-04-16 01:50:11', '2022-04-16 01:50:11', NULL),
(21, 'LaCrosse', 'indigo-blue/dark-blue cotton two-tone design washed denim logo patch to the rear tonal stitching high waist belt loops front button and zip fastening classic five pockets straight leg ankle-length', 47, 6750, '200', '1650073959451_img.jpg', '2022-04-16 01:52:39', '2022-04-16 01:52:39', NULL),
(22, 'Magnum', 'Magnum\'s jeans nod to the enduring logomania trend. This cropped stone-washed pair is detailed with logo-tape detailing along each leg.', 25, 14300, '0', '1650074099134_img.png', '2022-04-16 01:54:59', '2022-04-16 01:54:59', NULL),
(23, 'Bonneville', 'A material renowned for its high quality, Selvedge denim makes up these Second Cut jeans from Our Legacy. It comes in an unwashed black tone that creates a sleek aesthetic.', 18, 4500, '0', '1650074183282_img.png', '2022-04-16 01:56:23', '2022-04-16 01:56:23', NULL),
(24, 'Insight', 'A material renowned for its high quality, Selvedge denim makes up these Second Cut jeans from Our Legacy. It comes in an unwashed black tone that creates a sleek aesthetic.', 15, 10500, '1200', '1650074258627_img.png', '2022-04-16 01:57:38', '2022-04-16 01:57:38', NULL),
(25, 'Firebird', 'Capture New York-based label Opening Ceremony\'s distinctive contemporary vision with these Heartwood trousers. Crafted from a soft wool-blend knit, the wide-leg staple fuses both sportswear and street style in one. ', 19, 5000, '450', '1650074473556_img.png', '2022-04-16 02:01:13', '2022-04-16 02:01:13', NULL),
(26, 'Tahoe', 'Short and sweet. Keep spring/summer styling easy with these knee-length denim shorts from Off-White. Sun\'s out, legs out.', 33, 10800, '500', '1650074839953_img.png', '2022-04-16 02:07:19', '2022-04-16 02:07:19', NULL),
(27, 'Silverado', 'patchwork-detail denim shorts', 11, 3450, '50', '1650075090700_img.png', '2022-04-16 02:11:30', '2022-04-16 02:11:30', NULL),
(28, 'Ascender', 'straight leg jeans. blue cotton blend logo patch to the rear belt loops zip fly fastening classic five pockets', 13, 3250, '0', '1650075316820_img.png', '2022-04-16 02:15:16', '2022-04-16 02:15:16', NULL),
(29, 'Panamera', 'Distressed slim-cut jeans. dark-blue cotton-blend distressed effect front button fastening two diagonal pockets to the sides two rear patch pockets', 27, 5000, '300', '1650075560698_img.png', '2022-04-16 02:19:20', '2022-04-16 02:19:20', NULL),
(30, 'Nanushka', 'A material renowned for its high quality, Selvedge denim makes up these Second Cut jeans from Our Legacy. It comes in an unwashed black tone that creates a sleek aesthetic.', 27, 15650, '250', '1650075660019_img.jpg', '2022-04-16 02:21:00', '2022-04-16 02:21:00', NULL),
(31, 'Starion', 'These skinny jeans get their name from the plaid flannel patches that appear on the front. In a light blue colourway, this pair is decorated with ripped details that open to orange checked panels.', 14, 15000, '750', '1650075844645_img.png', '2022-04-16 02:24:04', '2022-04-16 02:24:04', NULL),
(32, 'Amiri', 'Bandana prints continue to be one of AMIRI\'s staples for SS22. Constructed from a cotton blend, these skinny jeans mix the brand\'s iconic pattern with ripped details.', 15, 17200, '600', '1650076033436_img.png', '2022-04-16 02:27:13', '2022-04-16 02:27:13', NULL);

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
(13, 12, 2, '2022-04-16 01:23:16', '2022-04-16 01:23:16'),
(14, 13, 3, '2022-04-16 01:26:27', '2022-04-16 01:26:27'),
(15, 14, 4, '2022-04-16 01:32:11', '2022-04-16 01:32:11'),
(16, 15, 1, '2022-04-16 01:33:40', '2022-04-16 01:33:40'),
(17, 16, 2, '2022-04-16 01:35:44', '2022-04-16 01:35:44'),
(18, 17, 5, '2022-04-16 01:38:12', '2022-04-16 01:38:12'),
(19, 18, 5, '2022-04-16 01:40:55', '2022-04-16 01:40:55'),
(20, 19, 3, '2022-04-16 01:42:54', '2022-04-16 01:42:54'),
(21, 20, 1, '2022-04-16 01:50:11', '2022-04-16 01:50:11'),
(22, 21, 6, '2022-04-16 01:52:39', '2022-04-16 01:52:39'),
(23, 22, 3, '2022-04-16 01:54:59', '2022-04-16 01:54:59'),
(24, 23, 2, '2022-04-16 01:56:23', '2022-04-16 01:56:23'),
(25, 24, 5, '2022-04-16 01:57:38', '2022-04-16 01:57:38'),
(26, 25, 3, '2022-04-16 02:01:13', '2022-04-16 02:01:13'),
(27, 26, 3, '2022-04-16 02:07:19', '2022-04-16 02:07:19'),
(28, 27, 2, '2022-04-16 02:11:30', '2022-04-16 02:11:30'),
(29, 28, 4, '2022-04-16 02:15:16', '2022-04-16 02:15:16'),
(30, 29, 4, '2022-04-16 02:19:20', '2022-04-16 02:19:20'),
(31, 30, 5, '2022-04-16 02:21:00', '2022-04-16 02:21:00'),
(32, 31, 1, '2022-04-16 02:24:04', '2022-04-16 02:24:04'),
(33, 32, 3, '2022-04-16 02:27:13', '2022-04-16 02:27:13');

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
  `role` varchar(100) COLLATE utf8_unicode_ci DEFAULT '0',
  `image` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `deletedAt` date DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullName`, `user`, `eMail`, `password`, `genre`, `dateBirth`, `country`, `address`, `role`, `image`, `createdAt`, `deletedAt`, `updatedAt`) VALUES
(4, 'Sofia Di Nanno', 'Di Nanno S', 'sdinanno@decreditos.com', '$2a$10$BWYHKYjAWdrMPVNBzd4FH.crTo8VZi9UBGgYfubYwrzHVHrco7UvC', 'mujer', '1983-10-07', 'Argentina', 'Cabildo 1700', '0', '1648603123678_img.png', '2022-03-30 01:18:43', NULL, '2022-03-30 01:18:43'),
(5, 'Sofia Di Nanno', 'Di Nanno S', 'sdinanno@giama.com.ar', '$2a$10$191CmKZdRTWMZODSyPDuq.2HHLdeGJV3G6OV9mwdqVhsGgxW71oNq', 'mujer', '1983-10-07', 'Argentina', 'Cabildo 1700', '0', '1648605054236_img.png', '2022-03-30 01:50:54', NULL, '2022-03-30 02:28:32'),
(6, 'Sofia Di Nanno', 'Sofi4', 'sofia_dinanno@hotmail.com', '$2a$10$KgGXUN/Q6clV50JSqQszAOQKZyiugF4CxFjuzyqs.AhGEIaKlfS1S', 'mujer', '1983-10-07', 'Argentina', 'Cabildo 1700', '0', '1648609098948_img.png', '2022-03-30 02:58:19', NULL, '2022-04-11 03:31:22');

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
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `genre_product`
--
ALTER TABLE `genre_product`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

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
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

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
