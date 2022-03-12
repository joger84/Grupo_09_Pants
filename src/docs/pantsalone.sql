-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-03-2022 a las 01:19:19
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
CREATE DATABASE IF NOT EXISTS `pantsalone` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `pantsalone`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colors`
--

CREATE TABLE `colors` (
  `ID` int(100) NOT NULL,
  `name` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colors_products`
--

CREATE TABLE `colors_products` (
  `ID` int(100) NOT NULL,
  `id_colors` int(100) NOT NULL,
  `id_products` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genre`
--

CREATE TABLE `genre` (
  `ID` int(100) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genre_products`
--

CREATE TABLE `genre_products` (
  `ID` int(100) NOT NULL,
  `id_genre` int(100) NOT NULL,
  `id_products` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `model`
--

CREATE TABLE `model` (
  `ID` int(100) NOT NULL,
  `name` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `model_products`
--

CREATE TABLE `model_products` (
  `ID` int(100) NOT NULL,
  `id_model` int(100) NOT NULL,
  `id_products` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `ID` int(100) NOT NULL,
  `size` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `model` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `quantity` int(100) NOT NULL,
  `color` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `genre` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `price` int(100) NOT NULL,
  `discount` decimal(10,0) NOT NULL,
  `image` varchar(100) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'default.png',
  `created_at` date NOT NULL,
  `modified_at` date NOT NULL,
  `deleted_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`ID`, `size`, `model`, `description`, `quantity`, `color`, `genre`, `price`, `discount`, `image`, `created_at`, `modified_at`, `deleted_at`) VALUES
(1, 'XL', 'Mustang', 'Pantalón re copado', 257, 'blanco', 'M', 2750, '250', 'default.png', '2022-03-10', '0000-00-00', '0000-00-00'),
(2, 'XL', 'Mustang', 'Pantalón más o menos', 257, 'Blanco', 'M', 2750, '250', 'default.png', '2022-03-10', '2022-03-10', '2022-03-10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products_shop`
--

CREATE TABLE `products_shop` (
  `ID` int(100) NOT NULL,
  `id_products` int(100) NOT NULL,
  `id_shop` int(100) NOT NULL,
  `quantity` int(100) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `discount` decimal(10,0) NOT NULL,
  `sub_total` decimal(10,0) NOT NULL,
  `order_date` date NOT NULL,
  `order_ship` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shop`
--

CREATE TABLE `shop` (
  `ID` int(100) NOT NULL,
  `id_products_shop` int(100) NOT NULL,
  `id_user` int(100) NOT NULL,
  `total` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `size`
--

CREATE TABLE `size` (
  `ID` int(100) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `size_products`
--

CREATE TABLE `size_products` (
  `ID` int(100) NOT NULL,
  `id_products` int(100) NOT NULL,
  `id_size` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `ID` int(100) NOT NULL,
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
  `crated_at` date NOT NULL,
  `deleted_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_products`
--

CREATE TABLE `users_products` (
  `ID` int(100) NOT NULL,
  `id_user` int(100) NOT NULL,
  `id_products` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `colors_products`
--
ALTER TABLE `colors_products`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `id_colors` (`id_colors`),
  ADD KEY `id_products` (`id_products`);

--
-- Indices de la tabla `genre`
--
ALTER TABLE `genre`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `genre_products`
--
ALTER TABLE `genre_products`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `id_genre` (`id_genre`),
  ADD KEY `id_products` (`id_products`);

--
-- Indices de la tabla `model`
--
ALTER TABLE `model`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `model_products`
--
ALTER TABLE `model_products`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `id_model` (`id_model`),
  ADD KEY `id_products` (`id_products`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `products_shop`
--
ALTER TABLE `products_shop`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `id_products` (`id_products`),
  ADD KEY `id_shop` (`id_shop`);

--
-- Indices de la tabla `shop`
--
ALTER TABLE `shop`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `id_products_shop` (`id_products_shop`),
  ADD KEY `id_user` (`id_user`);

--
-- Indices de la tabla `size`
--
ALTER TABLE `size`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `size_products`
--
ALTER TABLE `size_products`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `id_products` (`id_products`),
  ADD KEY `id_size` (`id_size`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `users_products`
--
ALTER TABLE `users_products`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_products` (`id_products`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `colors_products`
--
ALTER TABLE `colors_products`
  MODIFY `ID` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `genre`
--
ALTER TABLE `genre`
  MODIFY `ID` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `genre_products`
--
ALTER TABLE `genre_products`
  MODIFY `ID` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `model`
--
ALTER TABLE `model`
  MODIFY `ID` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `model_products`
--
ALTER TABLE `model_products`
  MODIFY `ID` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `ID` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `products_shop`
--
ALTER TABLE `products_shop`
  MODIFY `ID` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `shop`
--
ALTER TABLE `shop`
  MODIFY `ID` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `size`
--
ALTER TABLE `size`
  MODIFY `ID` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `size_products`
--
ALTER TABLE `size_products`
  MODIFY `ID` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users_products`
--
ALTER TABLE `users_products`
  MODIFY `ID` int(100) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `colors_products`
--
ALTER TABLE `colors_products`
  ADD CONSTRAINT `colors_products_ibfk_1` FOREIGN KEY (`id_colors`) REFERENCES `colors` (`ID`) ON UPDATE CASCADE,
  ADD CONSTRAINT `colors_products_ibfk_2` FOREIGN KEY (`id_products`) REFERENCES `products` (`ID`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `genre_products`
--
ALTER TABLE `genre_products`
  ADD CONSTRAINT `genre_products_ibfk_1` FOREIGN KEY (`id_genre`) REFERENCES `genre` (`ID`) ON UPDATE CASCADE,
  ADD CONSTRAINT `genre_products_ibfk_2` FOREIGN KEY (`id_products`) REFERENCES `products` (`ID`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
