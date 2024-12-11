-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-12-2024 a las 23:05:55
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
(1, NULL, 'TituloA', 1955, 1, '2024-11-28 19:20:49', '2024-11-28 19:20:49'),
(2, NULL, 'TituloB', 1988, 1, '2024-11-28 19:20:49', '2024-11-28 19:20:49');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `emigrantes`
--

CREATE TABLE `emigrantes` (
  `id_datos` int(8) UNSIGNED NOT NULL,
  `año` int(11) NOT NULL,
  `emigrantes_hombres` int(11) DEFAULT NULL,
  `emigrantes_mujeres` int(11) DEFAULT NULL,
  `total_emigrantes_mundo` int(11) DEFAULT NULL,
  `total_emigrantes_pais` int(11) DEFAULT NULL,
  `total_emigrantes_españa` int(11) DEFAULT NULL,
  `nacionalidad_extranjera` int(11) DEFAULT NULL,
  `nacionalidad_española` int(11) DEFAULT NULL,
  `pais_destino` varchar(50) DEFAULT NULL,
  `provincia_destino` varchar(50) DEFAULT NULL,
  `total_emigrantes_provincia` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `emigrantes`
--

INSERT INTO `emigrantes` (`id_datos`, `año`, `emigrantes_hombres`, `emigrantes_mujeres`, `total_emigrantes_mundo`, `total_emigrantes_pais`, `total_emigrantes_españa`, `nacionalidad_extranjera`, `nacionalidad_española`, `pais_destino`, `provincia_destino`, `total_emigrantes_provincia`) VALUES
(135, 2000, NULL, NULL, NULL, NULL, 17700, 5454, 12246, NULL, NULL, NULL),
(136, 2009, NULL, NULL, NULL, NULL, 89540, 62238, 27302, NULL, NULL, NULL),
(137, 2022, NULL, NULL, NULL, NULL, 83601, 38047, 45554, NULL, NULL, NULL),
(138, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Barcelona', 5841),
(139, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Illes Balears', 2977),
(140, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Valencia/València', 2607),
(141, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Alicante/Alacant', 2092),
(142, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Madrid', 2030),
(143, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Santa Cruz de Tenerife', 1555),
(144, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Girona', 1270),
(145, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Las Palmas', 1209),
(146, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Málaga', 1130),
(147, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Tarragona', 997),
(148, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Pontevedra', 972),
(149, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'A Coruña', 928),
(150, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Castellón/Castelló', 342),
(151, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Murcia', 309),
(152, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Asturias', 238),
(153, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Zaragoza', 231),
(154, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Toledo', 217),
(155, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Bizkaia', 205),
(156, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Lugo', 194),
(157, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Sevilla', 186),
(158, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Cádiz', 158),
(159, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Gipuzkoa', 150),
(160, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Lleida', 147),
(161, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Guadalajara', 141),
(162, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Granada', 129),
(163, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Navarra', 116),
(164, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Albacete', 112),
(165, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Almería', 111),
(166, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Cantabria', 106),
(167, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'La Rioja', 101),
(168, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Huesca', 87),
(169, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Ourense', 80),
(170, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Ávila', 61),
(171, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Badajoz', 59),
(172, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Huelva', 53),
(173, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'León', 53),
(174, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Ciudad Real', 50),
(175, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Segovia', 49),
(176, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Salamanca', 47),
(177, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Araba/Álava', 46),
(178, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Cuenca', 39),
(179, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Teruel', 38),
(180, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Córdoba', 37),
(181, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Jaén', 34),
(182, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Burgos', 29),
(183, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Valladolid', 29),
(184, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Soria', 22),
(185, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Cáceres', 20),
(186, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Palencia', 12),
(187, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Zamora', 11),
(188, 2022, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Melilla', 2),
(189, 2020, 174801, 192259, 367060, 134043, NULL, NULL, NULL, 'Argentina', NULL, NULL),
(190, 2020, NULL, NULL, NULL, 81427, NULL, NULL, NULL, 'España', NULL, NULL),
(191, 2020, NULL, NULL, NULL, 50274, NULL, NULL, NULL, 'Estados Unidos', NULL, NULL),
(192, 2020, NULL, NULL, NULL, 30537, NULL, NULL, NULL, 'Brasil', NULL, NULL),
(193, 2020, NULL, NULL, NULL, 11449, NULL, NULL, NULL, 'Australia', NULL, NULL),
(194, 2020, NULL, NULL, NULL, 7383, NULL, NULL, NULL, 'Italia', NULL, NULL),
(195, 2020, NULL, NULL, NULL, 7036, NULL, NULL, NULL, 'Canadá', NULL, NULL),
(196, 2020, NULL, NULL, NULL, 6193, NULL, NULL, NULL, 'Israel', NULL, NULL),
(197, 2020, NULL, NULL, NULL, 5652, NULL, NULL, NULL, 'Chile', NULL, NULL),
(198, 2020, NULL, NULL, NULL, 4519, NULL, NULL, NULL, 'Venezuela', NULL, NULL),
(199, 2020, NULL, NULL, NULL, 3782, NULL, NULL, NULL, 'Alemania', NULL, NULL),
(200, 2020, NULL, NULL, NULL, 3469, NULL, NULL, NULL, 'México', NULL, NULL),
(201, 2020, NULL, NULL, NULL, 3168, NULL, NULL, NULL, 'Paraguay', NULL, NULL),
(202, 2020, NULL, NULL, NULL, 2784, NULL, NULL, NULL, 'Francia', NULL, NULL),
(203, 2020, NULL, NULL, NULL, 2249, NULL, NULL, NULL, 'Suecia', NULL, NULL),
(204, 2020, NULL, NULL, NULL, 1645, NULL, NULL, NULL, 'Suiza', NULL, NULL),
(205, 2015, 167247, 185978, 353225, 132749, NULL, NULL, NULL, 'Argentina', NULL, NULL),
(206, 2015, NULL, NULL, NULL, 73640, NULL, NULL, NULL, 'España', NULL, NULL),
(207, 2015, NULL, NULL, NULL, 52070, NULL, NULL, NULL, 'Estados Unidos', NULL, NULL),
(208, 2015, NULL, NULL, NULL, 28106, NULL, NULL, NULL, 'Brasil', NULL, NULL),
(209, 2015, NULL, NULL, NULL, 10580, NULL, NULL, NULL, 'Australia', NULL, NULL),
(210, 2015, NULL, NULL, NULL, 7169, NULL, NULL, NULL, 'Italia', NULL, NULL),
(211, 2015, NULL, NULL, NULL, 6786, NULL, NULL, NULL, 'Chile', NULL, NULL),
(212, 2015, NULL, NULL, NULL, 6494, NULL, NULL, NULL, 'Canadá', NULL, NULL),
(213, 2015, NULL, NULL, NULL, 6378, NULL, NULL, NULL, 'Israel', NULL, NULL),
(214, 2015, NULL, NULL, NULL, 4795, NULL, NULL, NULL, 'Venezuela', NULL, NULL),
(215, 2015, NULL, NULL, NULL, 3163, NULL, NULL, NULL, 'México', NULL, NULL),
(216, 2015, NULL, NULL, NULL, 2925, NULL, NULL, NULL, 'Paraguay', NULL, NULL),
(217, 2015, NULL, NULL, NULL, 2820, NULL, NULL, NULL, 'Alemania', NULL, NULL),
(218, 2015, NULL, NULL, NULL, 2534, NULL, NULL, NULL, 'Francia', NULL, NULL),
(219, 2015, NULL, NULL, NULL, 2078, NULL, NULL, NULL, 'Suecia', NULL, NULL),
(220, 2015, NULL, NULL, NULL, 1583, NULL, NULL, NULL, 'Suiza', NULL, NULL),
(221, 2010, 161309, 177129, 338438, 115039, NULL, NULL, NULL, 'Argentina', NULL, NULL),
(222, 2010, NULL, NULL, NULL, 84809, NULL, NULL, NULL, 'España', NULL, NULL),
(223, 2010, NULL, NULL, NULL, 51776, NULL, NULL, NULL, 'Estados Unidos', NULL, NULL),
(224, 2010, NULL, NULL, NULL, 23843, NULL, NULL, NULL, 'Brasil', NULL, NULL),
(225, 2010, NULL, NULL, NULL, 10630, NULL, NULL, NULL, 'Australia', NULL, NULL),
(226, 2010, NULL, NULL, NULL, 7912, NULL, NULL, NULL, 'Italia', NULL, NULL),
(227, 2010, NULL, NULL, NULL, 6600, NULL, NULL, NULL, 'Canadá', NULL, NULL),
(228, 2010, NULL, NULL, NULL, 6184, NULL, NULL, NULL, 'Israel', NULL, NULL),
(229, 2010, NULL, NULL, NULL, 4700, NULL, NULL, NULL, 'Venezuela', NULL, NULL),
(230, 2010, NULL, NULL, NULL, 4480, NULL, NULL, NULL, 'Chile', NULL, NULL),
(231, 2010, NULL, NULL, NULL, 2997, NULL, NULL, NULL, 'Paraguay', NULL, NULL),
(232, 2010, NULL, NULL, NULL, 2747, NULL, NULL, NULL, 'Alemania', NULL, NULL),
(233, 2010, NULL, NULL, NULL, 2372, NULL, NULL, NULL, 'México', NULL, NULL),
(234, 2010, NULL, NULL, NULL, 2287, NULL, NULL, NULL, 'Francia', NULL, NULL),
(235, 2010, NULL, NULL, NULL, 2270, NULL, NULL, NULL, 'Suecia', NULL, NULL),
(236, 2010, NULL, NULL, NULL, 1552, NULL, NULL, NULL, 'Suiza', NULL, NULL),
(237, 2005, 146441, 152545, 298986, 114446, NULL, NULL, NULL, 'Argentina', NULL, NULL),
(238, 2005, NULL, NULL, NULL, 65654, NULL, NULL, NULL, 'España', NULL, NULL),
(239, 2005, NULL, NULL, NULL, 37981, NULL, NULL, NULL, 'Estados Unidos', NULL, NULL),
(240, 2005, NULL, NULL, NULL, 24495, NULL, NULL, NULL, 'Brasil', NULL, NULL),
(241, 2005, NULL, NULL, NULL, 10789, NULL, NULL, NULL, 'Australia', NULL, NULL),
(242, 2005, NULL, NULL, NULL, 6280, NULL, NULL, NULL, 'Canadá', NULL, NULL),
(243, 2005, NULL, NULL, NULL, 5697, NULL, NULL, NULL, 'Israel', NULL, NULL),
(244, 2005, NULL, NULL, NULL, 5048, NULL, NULL, NULL, 'Italia', NULL, NULL),
(245, 2005, NULL, NULL, NULL, 4672, NULL, NULL, NULL, 'Venezuela', NULL, NULL),
(246, 2005, NULL, NULL, NULL, 3359, NULL, NULL, NULL, 'Chile', NULL, NULL),
(247, 2005, NULL, NULL, NULL, 2742, NULL, NULL, NULL, 'Paraguay', NULL, NULL),
(248, 2005, NULL, NULL, NULL, 2373, NULL, NULL, NULL, 'Alemania', NULL, NULL),
(249, 2005, NULL, NULL, NULL, 1625, NULL, NULL, NULL, 'México', NULL, NULL),
(250, 2005, NULL, NULL, NULL, 1607, NULL, NULL, NULL, 'Francia', NULL, NULL),
(251, 2005, NULL, NULL, NULL, 1424, NULL, NULL, NULL, 'Suecia', NULL, NULL),
(252, 2005, NULL, NULL, NULL, 1146, NULL, NULL, NULL, 'Suiza', NULL, NULL),
(253, 2000, 115418, 120223, 235641, 113827, NULL, NULL, NULL, 'Argentina', NULL, NULL),
(254, 2000, NULL, NULL, NULL, 25673, NULL, NULL, NULL, 'Estados Unidos', NULL, NULL),
(255, 2000, NULL, NULL, NULL, 24799, NULL, NULL, NULL, 'Brasil', NULL, NULL),
(256, 2000, NULL, NULL, NULL, 17700, NULL, NULL, NULL, 'España', NULL, NULL),
(257, 2000, NULL, NULL, NULL, 11, NULL, NULL, NULL, 'Australia', NULL, NULL),
(258, 2000, NULL, NULL, NULL, 6, NULL, NULL, NULL, 'Canadá', NULL, NULL),
(259, 2000, NULL, NULL, NULL, 5, NULL, NULL, NULL, 'Israel', NULL, NULL),
(260, 2000, NULL, NULL, NULL, 5, NULL, NULL, NULL, 'Venezuela', NULL, NULL),
(261, 2000, NULL, NULL, NULL, 3, NULL, NULL, NULL, 'Paraguay', NULL, NULL),
(262, 2000, NULL, NULL, NULL, 3, NULL, NULL, NULL, 'Italia', NULL, NULL),
(263, 2000, NULL, NULL, NULL, 2, NULL, NULL, NULL, 'Chile', NULL, NULL),
(264, 2000, NULL, NULL, NULL, 2, NULL, NULL, NULL, 'Suecia', NULL, NULL),
(265, 2000, NULL, NULL, NULL, 2, NULL, NULL, NULL, 'Francia', NULL, NULL),
(266, 2000, NULL, NULL, NULL, 2, NULL, NULL, NULL, 'República Dominicana', NULL, NULL),
(267, 2000, NULL, NULL, NULL, 2, NULL, NULL, NULL, 'México', NULL, NULL),
(268, 2000, NULL, NULL, NULL, 1, NULL, NULL, NULL, 'Suiza', NULL, NULL),
(269, 2000, NULL, NULL, NULL, 935, NULL, NULL, NULL, 'Reino Unido', NULL, NULL),
(270, 1995, 114568, 119425, 233993, 125366, NULL, NULL, NULL, 'Argentina', NULL, NULL),
(271, 1995, NULL, NULL, NULL, 24081, NULL, NULL, NULL, 'Brasil', NULL, NULL),
(272, 1995, NULL, NULL, NULL, 23208, NULL, NULL, NULL, 'Estados Unidos', NULL, NULL),
(273, 1995, NULL, NULL, NULL, 12691, NULL, NULL, NULL, 'España', NULL, NULL),
(274, 1995, NULL, NULL, NULL, 11366, NULL, NULL, NULL, 'Australia', NULL, NULL),
(275, 1995, NULL, NULL, NULL, 6, NULL, NULL, NULL, 'Canadá', NULL, NULL),
(276, 1995, NULL, NULL, NULL, 5364, NULL, NULL, NULL, 'Venezuela', NULL, NULL),
(277, 1995, NULL, NULL, NULL, 4936, NULL, NULL, NULL, 'Israel', NULL, NULL),
(278, 1995, NULL, NULL, NULL, 3, NULL, NULL, NULL, 'Paraguay', NULL, NULL),
(279, 1995, NULL, NULL, NULL, 2132, NULL, NULL, NULL, 'Francia', NULL, NULL),
(280, 1995, NULL, NULL, NULL, 2076, NULL, NULL, NULL, 'Suecia', NULL, NULL),
(281, 1995, NULL, NULL, NULL, 1816, NULL, NULL, NULL, 'Chile', NULL, NULL),
(282, 1995, NULL, NULL, NULL, 1805, NULL, NULL, NULL, 'República Dominicana', NULL, NULL),
(283, 1995, NULL, NULL, NULL, 1637, NULL, NULL, NULL, 'Italia', NULL, NULL),
(284, 1995, NULL, NULL, NULL, 1506, NULL, NULL, NULL, 'México', NULL, NULL),
(285, 1995, NULL, NULL, NULL, 1, NULL, NULL, NULL, 'Suiza', NULL, NULL),
(286, 1995, NULL, NULL, NULL, 782, NULL, NULL, NULL, 'Alemania', NULL, NULL),
(287, 1990, 116499, 120987, 237486, 136906, NULL, NULL, NULL, 'Argentina', NULL, NULL),
(288, 1990, NULL, NULL, NULL, 23363, NULL, NULL, NULL, 'Brasil', NULL, NULL),
(289, 1990, NULL, NULL, NULL, 20766, NULL, NULL, NULL, 'Estados Unidos', NULL, NULL),
(290, 1990, NULL, NULL, NULL, 11795, NULL, NULL, NULL, 'Australia', NULL, NULL),
(291, 1990, NULL, NULL, NULL, 10922, NULL, NULL, NULL, 'España', NULL, NULL),
(292, 1990, NULL, NULL, NULL, 6076, NULL, NULL, NULL, 'Venezuela', NULL, NULL),
(293, 1990, NULL, NULL, NULL, 5033, NULL, NULL, NULL, 'Canadá', NULL, NULL),
(294, 1990, NULL, NULL, NULL, 4315, NULL, NULL, NULL, 'Israel', NULL, NULL),
(295, 1990, NULL, NULL, NULL, 3293, NULL, NULL, NULL, 'Paraguay', NULL, NULL),
(296, 1990, NULL, NULL, NULL, 2065, NULL, NULL, NULL, 'Francia', NULL, NULL),
(297, 1990, NULL, NULL, NULL, 1749, NULL, NULL, NULL, 'Suecia', NULL, NULL),
(298, 1990, NULL, NULL, NULL, 1625, NULL, NULL, NULL, 'República Dominicana', NULL, NULL),
(299, 1990, NULL, NULL, NULL, 1393, NULL, NULL, NULL, 'Chile', NULL, NULL),
(300, 1990, NULL, NULL, NULL, 1113, NULL, NULL, NULL, 'México', NULL, NULL),
(301, 1990, NULL, NULL, NULL, 950, NULL, NULL, NULL, 'Suiza', NULL, NULL),
(302, 1990, NULL, NULL, NULL, 830, NULL, NULL, NULL, 'Alemania', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--

CREATE TABLE `eventos` (
  `id_evento` int(8) UNSIGNED NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `fecha` datetime NOT NULL,
  `fecha_fin` datetime DEFAULT NULL,
  `hora_inicio` time NOT NULL,
  `hora_fin` time DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `entrada` varchar(255) NOT NULL DEFAULT 'Gratuito',
  `precio` decimal(10,0) DEFAULT NULL,
  `ubicacion` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `eventos`
--

INSERT INTO `eventos` (`id_evento`, `titulo`, `descripcion`, `fecha`, `fecha_fin`, `hora_inicio`, `hora_fin`, `color`, `entrada`, `precio`, `ubicacion`, `createdAt`, `updatedAt`) VALUES
(1, 'Volver', 'Homenaje a Carlos Gardel', '2024-11-29 00:00:00', NULL, '19:00:00', NULL, 'purple', 'Pago', 12, 'Carrer d\'En Font, 25, 08201 Sabadell, Barcelona', '2024-11-28 19:26:11', '2024-11-28 19:26:11'),
(2, 'Aires de candombe', 'JAM session', '2024-12-02 00:00:00', NULL, '19:00:00', NULL, NULL, 'Pago', 10, 'Pl. Reial, 17, Ciutat Vella, 08002 Barcelona Sala 1', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Despedida Casa del Uruguay', 'Casa del Uruguay despide el año en su sede', '2024-11-29 00:00:00', NULL, '17:00:00', NULL, NULL, 'Gratuito', NULL, 'Diputació 215, Entlo 1, 08011, Barcelona', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Miguel Ángel Cufos', 'Gira por España', '2024-12-14 00:00:00', NULL, '23:00:00', NULL, NULL, 'Pago', 15, 'Carrer de Carles Buïgas 6, Salou, Tarragona', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'La Vela Puerca', 'La vela puerca participa en el festival Empremtes ‘25', '2025-11-10 00:00:00', NULL, '21:15:00', NULL, NULL, 'Pago', 30, 'Poble Espanyol', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'Evento', 'Descripción del evento', '2024-12-01 00:00:00', NULL, '17:30:00', NULL, 'red', 'Gratuito', NULL, 'Ubicación del evento', '2024-12-03 12:31:17', '2024-12-03 12:31:17'),
(7, 'prueba', 'prueba de evento', '2024-12-13 00:00:00', NULL, '16:32:00', NULL, 'green', 'Gratuito', NULL, 'en casa', '2024-12-03 12:32:13', '2024-12-03 12:32:13');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `negocios`
--

CREATE TABLE `negocios` (
  `id_negocio` int(8) UNSIGNED NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `latitud` decimal(10,8) DEFAULT NULL,
  `longitud` decimal(11,8) DEFAULT NULL,
  `tipoRedSocial` varchar(255) DEFAULT NULL,
  `urlRedSocial` varchar(255) DEFAULT NULL,
  `categoria` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `negocios`
--

INSERT INTO `negocios` (`id_negocio`, `nombre`, `descripcion`, `direccion`, `latitud`, `longitud`, `tipoRedSocial`, `urlRedSocial`, `categoria`) VALUES
(1, 'Lo de Nico', 'Restaurante de comida uruguaya', 'Carrer de Lluís Companys, 19, 17300 Blanes, Girona', 41.67065550, 2.77993985, 'pagina_web', 'https://lodenicoblanes.com/', 'restaurante'),
(2, 'El boliche del gordo Cabrera', 'Restaurante de comida uruguaya', 'Carrer del Consell de Cent, 338, L\'Eixample, 08009 Barcelona', 41.39315956, 2.16842653, 'pagina_web', 'https://www.elbolichedelgordo.com/', 'restaurante'),
(3, 'Montevideo', 'Restaurante de comida uruguaya', 'Av. de la Constitució, 30, 32, 08860 Castelldefels, Barcelona', 41.28717465, 1.98778520, 'pagina_web', 'https://www.montevideocastelldefels.com/', 'restaurante'),
(4, 'PizzaLuna', 'Restaurante de comida uruguaya', 'Carrer de Besalú, 46, Sant Martí, 08026 Barcelona', 41.41437436, 2.18404254, 'drive', 'https://drive.google.com/file/d/15phrfPZUHekR2HandeweRTUDVxY2zTYc/view', 'restaurante'),
(5, 'Pizzeria Montevideo Sant Boi', 'Restaurante de comida uruguaya', 'Ronda de Sant Ramon, 150, 08830 Sant Boi de Llobregat, Barcelona', 41.33718062, 2.03811881, 'pagina_web', 'https://montevideosantboi.com/carta/', 'restaurante'),
(6, 'El Arapey', 'Restaurante de comida uruguaya', 'Rambla de Pompeu Fabra, 85, 08850 Gavà, Barcelona', 41.30933454, 2.00241325, 'instagram', 'https://www.instagram.com/p/C8C4qpQMQGS/', 'restaurante'),
(7, 'Luna Gaucha', 'Restaurante de comida uruguaya', 'Plaça de l\'Ajuntament, 8, 08370 Calella, Barcelona', 41.61448061, 2.65641024, 'pagina_web', 'https://www.restaurantelunagaucha.com/', 'restaurante'),
(8, 'Punto UY', 'Restaurante de comida uruguaya', 'Pg. Marítim, 202, 08860 Castelldefels, Barcelona', 41.26877867, 1.97216183, 'instagram', 'https://www.instagram.com/punto_uy_restaurante/?hl=es', 'restaurante'),
(9, 'Chalito Maquinista', 'Restaurante de comida uruguaya', 'Carrer de São Paulo, 13, Sant Andreu, 08030 Barcelona', 41.44202196, 2.19851307, 'pagina_web', 'https://www.chalito.es/', 'restaurante'),
(10, 'Candombe', 'Restaurante de comida uruguaya', 'Av. de Catalunya, 378, 08184 Palau-solità i Plegamans, Barcelona', 41.59687086, 2.18169273, 'facebook', 'https://www.facebook.com/candomberestaurante', 'restaurante'),
(11, 'Reketepizza', 'Pizzería uruguaya', 'Carrer d\'Amadeu Torner, 85, 08902 L\'Hospitalet de Llobregat, Barcelona', 41.36381090, 2.12003605, 'pagina_web', 'https://reketepizza.com/?utm_source=GMB&utm_medium=web&utm_id=hospitalet', 'restaurante'),
(12, 'La Celeste', 'Restaurante de comida uruguaya', 'Carrer de Carles Buïgas, 34, 08980 Sant Feliu de Llobregat, Barcelona', 41.38751255, 2.05205815, 'instagram', 'https://www.instagram.com/la.celeste.sant.feliu/?hl=es', 'restaurante'),
(13, 'El Raconet Charrua', 'Restaurante de comida uruguaya', 'Av. de la Mare de Déu de Montserrat, 175, Horta-Guinardó, 08041 Barcelona', 41.42201907, 2.17016117, 'instagram', 'https://www.instagram.com/elraconetcharrua/?hl=es', 'restaurante'),
(14, 'Caracé', 'Restaurante de comida uruguaya', 'Carrer de Joaquim Rubió i Ors, 268, 08940 Cornellà de Llobregat, Barcelona', 41.35683597, 2.06830012, 'pagina_web', 'https://restaurantecarace.wordpress.com/', 'restaurante'),
(15, 'Los tres leños', 'Restaurante de comida uruguaya', 'Carrer de la Font d\'en Canyelles, 90, Nou Barris, 08042 Barcelona', 41.44117572, 2.17462513, 'instagram', 'https://www.instagram.com/los_3_lenyos/', 'restaurante'),
(16, 'La mano de Pablo', 'Restaurante de comida uruguaya', 'C. de Frómista, 14, Fuencarral-El Pardo, 28050 Madrid', 40.51148635, -3.67135407, 'pagina_web, instagram', 'https://lamanodepablo.com/carta-la-mano-de-pablo/, https://www.instagram.com/lamanodepablo', 'restaurante'),
(17, 'Charrúa', 'Restaurante de comida uruguaya', 'C. del Conde de Xiquena, 4, Centro, 28004 Madrid', 40.49504030, -3.70419961, 'pagina_web', 'https://charruamadrid.com/', 'restaurante'),
(18, 'El Arco', 'Pizzería, chivitería uruguaya', 'Pl. de Santiago Suárez \"Santi\", 7, Local 53, Jesús, 46017 Valencia', 39.47001433, -0.40522758, 'instagram', 'https://www.instagram.com/pizzeria_chiviteria_elarco/', 'restaurante'),
(19, 'El hispano', 'Restaurante de comida uruguaya', 'C. de San Agustin, 39, 46340 Requena, Valencia', 39.53359258, -1.11384571, 'pagina_web', 'http://www.hispanocarnesalapiedra.com/', 'restaurante'),
(20, 'La Costa UY', 'Restaurante de comida uruguaya', 'C/ de la Democràcia, 3, L\'Olivereta, 46018 València, Valencia', 39.51240629, -0.40522758, 'instagram', 'https://www.instagram.com/lacostauy2022/', 'restaurante'),
(21, 'Cabaña Grill', 'Restaurante de comida uruguaya', 'Carrer Poeta Carmelo Calvo, 15, 03004 Alacant, Alicante', 38.39322642, -0.49861136, 'pagina_web', 'https://cabañagrill.com/', 'restaurante'),
(22, 'Zitarrosa', 'Panadería uruguaya', 'Av. de la Constitució, 38, 08860 Castelldefels, Barcelona', 41.29039527, 1.98639634, 'pagina_web', 'https://grupozitarrosa.com/', 'panaderia'),
(23, 'El rincón uruguayo', 'Panadería y cafetería uruguaya', 'Rambla de Joaquim Ruyra, 57, 17300 Blanes, Girona', 41.67476466, 2.78969090, 'facebook', 'https://www.facebook.com/elrinconuruguayoblanes/', 'panaderia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `id_post` int(8) UNSIGNED NOT NULL,
  `status` tinyint(1) DEFAULT 1,
  `titulo` varchar(100) NOT NULL,
  `contenido` text NOT NULL,
  `categoria` varchar(50) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recoverytokens`
--

CREATE TABLE `recoverytokens` (
  `id` int(11) NOT NULL,
  `token` varchar(255) NOT NULL,
  `user_id` int(5) UNSIGNED NOT NULL,
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
  `photo` varchar(30) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
-- Indices de la tabla `emigrantes`
--
ALTER TABLE `emigrantes`
  ADD PRIMARY KEY (`id_datos`);

--
-- Indices de la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD PRIMARY KEY (`id_evento`);

--
-- Indices de la tabla `negocios`
--
ALTER TABLE `negocios`
  ADD PRIMARY KEY (`id_negocio`);

--
-- Indices de la tabla `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id_post`);

--
-- Indices de la tabla `recoverytokens`
--
ALTER TABLE `recoverytokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `token` (`token`),
  ADD UNIQUE KEY `recovery_tokens_token` (`token`),
  ADD UNIQUE KEY `token_61` (`token`),
  ADD UNIQUE KEY `token_2` (`token`),
  ADD UNIQUE KEY `token_3` (`token`),
  ADD UNIQUE KEY `token_4` (`token`),
  ADD UNIQUE KEY `token_5` (`token`),
  ADD UNIQUE KEY `token_6` (`token`),
  ADD UNIQUE KEY `token_7` (`token`),
  ADD UNIQUE KEY `token_8` (`token`),
  ADD UNIQUE KEY `token_9` (`token`),
  ADD UNIQUE KEY `token_10` (`token`),
  ADD UNIQUE KEY `token_11` (`token`),
  ADD UNIQUE KEY `token_12` (`token`),
  ADD UNIQUE KEY `token_13` (`token`),
  ADD UNIQUE KEY `token_14` (`token`),
  ADD UNIQUE KEY `token_15` (`token`),
  ADD UNIQUE KEY `token_16` (`token`),
  ADD UNIQUE KEY `token_17` (`token`),
  ADD UNIQUE KEY `token_18` (`token`),
  ADD UNIQUE KEY `token_19` (`token`),
  ADD UNIQUE KEY `token_20` (`token`),
  ADD UNIQUE KEY `token_21` (`token`),
  ADD UNIQUE KEY `token_22` (`token`),
  ADD UNIQUE KEY `token_23` (`token`),
  ADD UNIQUE KEY `token_24` (`token`),
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
  MODIFY `id_book` int(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=167;

--
-- AUTO_INCREMENT de la tabla `emigrantes`
--
ALTER TABLE `emigrantes`
  MODIFY `id_datos` int(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=303;

--
-- AUTO_INCREMENT de la tabla `eventos`
--
ALTER TABLE `eventos`
  MODIFY `id_evento` int(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `negocios`
--
ALTER TABLE `negocios`
  MODIFY `id_negocio` int(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `id_post` int(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `recoverytokens`
--
ALTER TABLE `recoverytokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_10` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_11` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_12` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_13` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_14` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_15` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_16` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_17` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_18` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_19` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_20` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_21` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_22` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_23` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_24` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_25` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_26` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_27` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_28` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_29` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_30` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_31` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_32` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_33` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_34` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_35` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_36` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_37` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_38` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_39` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_4` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_40` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_41` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_42` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_43` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_44` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_45` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_46` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_47` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_48` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_49` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_5` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_50` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_51` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_52` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_53` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_54` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_55` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_56` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_57` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_6` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_7` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_8` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `books_ibfk_9` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `recoverytokens`
--
ALTER TABLE `recoverytokens`
  ADD CONSTRAINT `recoverytokens_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_10` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_11` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_12` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_13` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_14` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_15` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_16` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_17` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_18` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_19` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_20` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_21` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_22` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_23` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_24` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_25` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_26` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_27` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_28` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_29` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_30` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_31` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_32` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_33` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_34` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_35` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_36` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_37` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_38` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_39` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_4` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_40` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_41` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_42` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_43` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_44` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_45` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_46` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_47` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_48` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_49` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_5` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_50` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_51` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_52` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_53` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_54` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_55` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_56` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_57` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_58` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_59` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_6` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_60` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_61` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_62` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_63` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_64` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_65` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_66` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_67` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_68` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_69` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_7` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_70` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_71` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_72` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_73` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_74` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_75` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_76` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_77` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_78` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_79` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_8` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_80` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_81` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_82` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_83` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_84` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_9` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
