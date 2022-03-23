-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-03-2022 a las 00:15:24
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pantsalone`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genre_product`
--

CREATE TABLE `genre_product` (
  `id` int(100) NOT NULL,
  `genreId` int(100) NOT NULL,
  `productId` int(100) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `genre_product`
--

INSERT INTO `genre_product` (`id`, `genreId`, `productId`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 3, 5, '2022-03-14 02:38:13', '2022-03-14 02:38:13', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `genre_product`
--
ALTER TABLE `genre_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_genre` (`genreId`),
  ADD KEY `id_products` (`productId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `genre_product`
--
ALTER TABLE `genre_product`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `genre_product`
--
ALTER TABLE `genre_product`
  ADD CONSTRAINT `genre_product_ibfk_1` FOREIGN KEY (`genreId`) REFERENCES `genres` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `genre_product_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
