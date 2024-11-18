-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-11-2024 a las 00:17:22
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proj_uruguayos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `books`
--

CREATE TABLE `books` (
  `id_book` int(8) UNSIGNED NOT NULL,
  `user_id` int(8) UNSIGNED DEFAULT NULL,
  `title` varchar(100) NOT NULL,
  `year` int(4) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `books`
--

INSERT INTO `books` (`id_book`, `user_id`, `title`, `year`, `status`, `created_at`, `updated_at`) VALUES
(1, NULL, 'TituloA', 1955, 1, '2024-11-12 10:07:45', '2024-11-12 10:07:45'),
(2, NULL, 'TituloB', 1988, 1, '2024-11-12 10:07:45', '2024-11-12 10:07:45'),
(194, 2, 'TituloC', 1475, 1, '2024-11-17 21:12:17', '2024-11-17 21:12:17');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `negocios`
--

CREATE TABLE `negocios` (
  `id_negocio` int(8) UNSIGNED NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `redesSociales` varchar(255) DEFAULT NULL,
  `latitud` decimal(10,8) NOT NULL,
  `longitud` decimal(11,8) NOT NULL,
  `categoria` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recoverytokens`
--

CREATE TABLE `recoverytokens` (
  `id` int(11) NOT NULL,
  `token` varchar(255) NOT NULL,
  `user_id` int(8) UNSIGNED NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20241117175931-add-timestamps-to-users.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id_user` int(5) UNSIGNED NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `apellidos` varchar(30) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `roles` enum('admin','user') NOT NULL DEFAULT 'user',
  `photo` varchar(150) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id_user`, `nombre`, `apellidos`, `email`, `password`, `roles`, `photo`, `created_at`, `updated_at`) VALUES
(1, 'Ana', 'Ojeda', 'ana@gmail.com', '$2b$10$rN/mlazmPnDJx8hIliRMHuDPDKXwjjMABUe2S4ApntzqWHGPRRzf6', 'user', NULL, '2024-11-17 18:35:12', '2024-11-17 18:35:12'),
(2, 'Ana', 'Ojeda', 'an@gmail.com', '$2b$10$XqJzCqaUATS7UxUDQipuku9/ySZ3Lv6HWWiqw/gPvkocxgatzYJ7G', 'user', NULL, '2024-11-17 21:07:47', '2024-11-17 21:07:47'),
(3, 'Ana', 'Ojeda', 'a@gmail.com', '$2b$10$x7.LjbYTWtNx9z5cgaDLCei9rBTKZiOG7enxv4JUc4rs9gD.qd98i', 'user', NULL, '2024-11-17 21:35:22', '2024-11-17 21:35:22');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id_book`),
  ADD UNIQUE KEY `books_title` (`title`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `negocios`
--
ALTER TABLE `negocios`
  ADD PRIMARY KEY (`id_negocio`);

--
-- Indices de la tabla `recoverytokens`
--
ALTER TABLE `recoverytokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `token` (`token`),
  ADD UNIQUE KEY `recovery_tokens_token` (`token`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `users_email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `books`
--
ALTER TABLE `books`
  MODIFY `id_book` int(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=360;

--
-- AUTO_INCREMENT de la tabla `negocios`
--
ALTER TABLE `negocios`
  MODIFY `id_negocio` int(8) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `recoverytokens`
--
ALTER TABLE `recoverytokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `recoverytokens`
--
ALTER TABLE `recoverytokens`
  ADD CONSTRAINT `recoverytokens_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
