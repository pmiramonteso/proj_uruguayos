-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-12-2024 a las 23:18:00
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
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id_user` int(5) UNSIGNED NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `apellidos` varchar(30) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `roles` enum('admin','user') NOT NULL DEFAULT 'user',
  `photo` varchar(30) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id_user`, `nombre`, `apellidos`, `email`, `password`, `roles`, `photo`, `created_at`, `updated_at`) VALUES
(1, 'Ana Paola', 'Miramontes Ojeda', 'pmiramonteso@gmail.com', '$2b$10$xq1.gigDiS7okIJq2Uki.OxeDp74iAmXIN7e0d0LhNxLBAAIWM8fC', 'user', NULL, '2024-12-17 18:14:04', '2024-12-17 18:14:04'),
(2, 'Ana Paola', 'Miramontes Ojeda', 'pmiramontesphoto@gmail.com', '$2b$10$1coV9dtO2r9dCKZGssUSOu.A3ZMG0JOYppA20Uqt3IDcs6xyPw2gy', 'admin', NULL, '2024-12-17 18:16:27', '2024-12-17 18:16:27'),
(3, 'Ana Paola', 'Miramontes Ojeda', 'pmiramontes@gmail.com', '$2b$10$RN.spMLhpTHzhnvCTqcZyOuzHGy1IPK9mDzpihCXKJa9/VTtHH8y2', 'user', NULL, '2024-12-17 18:24:29', '2024-12-17 18:24:29'),
(4, 'Pablo', 'Cipres', 'pablocipres@gmail.com', '$2b$10$8PkOvuBbCgVRSenUeCcnq./WlZqM.16Zry7Cvzh/LHmGcjXCBGY4a', 'user', NULL, '2024-12-17 18:34:27', '2024-12-17 18:34:27'),
(5, 'Prueba', 'Prueba', 'prueba@gmail.com', '$2b$10$hx4T8M.DxiSJieTuRJx2Du1vsYRQtPpJcpDcIhIjNvZb93k9IJt5C', 'user', NULL, '2024-12-17 19:31:34', '2024-12-17 19:31:34'),
(6, 'Prueba', 'Foto', 'pruebafoto@gmail.com', '$2b$10$fJ1pb.ks2qWdbXTj6em.7.IsBl9Fo.uIHvlskMIiYmMAKElEbC8ry', 'user', NULL, '2024-12-17 19:40:34', '2024-12-17 19:40:34'),
(7, 'prueba', 'prueba', 'pruebafinal@gmail.com', '$2b$10$5wLilc9qA4vPSohSAK1WnOtBJFcuH7dqOT67AQ0rGCx3NOBiEIweK', 'user', 'photo-1734521177843.jpg', '2024-12-18 11:26:17', '2024-12-18 11:26:17'),
(8, 'Paola', 'Miramontes', 'pmirteso@hotmail.com', '$2b$10$hKikWg3a94hahohDSMq7be8RXiSrxq0RMYwNSbRasir4dOgetNDcO', 'user', 'photo-1734527757897.jpg', '2024-12-18 13:15:57', '2024-12-18 13:15:57'),
(9, 'Ana Paola', 'Miramontes Ojeda', 'pruebafeliz@gmail.com', '$2b$10$U31ULeijAuP7wfVvBtZkf.peKI1ye5JERFuiB6VjywKkBMDbQZ6FK', 'user', 'photo-1734530741039.jpg', '2024-12-18 14:05:41', '2024-12-18 14:05:41'),
(10, 'prueba', 'prueba', 'pruebafin4444al@gmail.com', '$2b$10$379cvZ49Dq9WnAmiGa1/zOdG28ucUDYQrZtPuTW8dul4Hmwx/3f6u', 'user', 'photo-1734531755508.jpg', '2024-12-18 14:22:35', '2024-12-18 14:22:35'),
(11, 'prueba', 'prueba', 'pruebafin44al@gmail.com', '$2b$10$qQ/9DCIosW0qE8AdmHdxduO1VLlKyXn56IGwhGZs00Ek4S2QP3nr.', 'user', 'photo-1734532556781.jpg', '2024-12-18 14:35:56', '2024-12-18 14:35:56'),
(12, 'Ana Paola', 'Miramontes Ojeda', 'juanitom@gmail.com', '$2b$10$AxEOd1qVz3eFo.3CFffwDuyZFpwnGpHqPB.UDmgaJvHaVVg.OrdT.', 'user', 'photo-1734535758973.jpg', '2024-12-18 15:29:19', '2024-12-18 15:29:19'),
(13, 'juanito', 'makande', 'makande@gmail.com', '$2b$10$Aq3eJ0tuv3mll17JTslm.uTpW1mXZegkwz3DcSRy3rkWzVSmYz1Ea', 'admin', 'photo-1734535860831.jpg', '2024-12-18 15:31:00', '2024-12-18 15:31:00'),
(14, 'Paola', 'Miramontes Ojeda', 'ppruebao@gmail.com', '$2b$10$dcnIAEDcQ/TKL7hXI6LMluN/a.ISFQkh2Aaco1uzrf1OnDg.uXPT6', 'user', 'photo-1734543036359.jpeg', '2024-12-18 17:30:36', '2024-12-18 17:30:36'),
(15, 'Paola', 'Miramontes Ojeda', 'prrruebateso@gmail.com', '$2b$10$XsmV1cI9e2Wr10iLH2GjVOct8Nc66jt/GH.YN/gonqCBojASLyZ6.', 'user', 'photo-1734543102433.jpg', '2024-12-18 17:31:42', '2024-12-18 17:31:42'),
(16, 'Paola', 'Miramontes', 'adasa@sdfsd.com', '$2b$10$vKb7HB9jPA24VLiBieRzHefcP7Liz3qfb7bln1Fc5zuZ3N0Idbjqe', 'user', 'photo-1734544229953.jpg', '2024-12-18 17:50:30', '2024-12-18 17:50:30'),
(17, 'gipsy', 'miramontes', 'soygatita@gmail.com', '$2b$10$p6bPIrJqk6YRkkmpomPCZufYIFfm/RBiYm22VeQtXJbcA3zgxEi72', 'user', 'photo-1734545258873.jpg', '2024-12-18 18:07:38', '2024-12-18 18:07:38'),
(18, 'Probando', 'Mi foto', 'pruebamifoto@gmail.com', '$2b$10$0TCVI8VuSxVOM06KL8IpwO7VNJ78KGU64F.M9xi7SoJakC/YWm//.', 'user', 'photo-1734546518888.jpg', '2024-12-18 18:28:38', '2024-12-18 18:28:38');

--
-- Índices para tablas volcadas
--

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
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
