-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-01-2025 a las 18:09:16
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

DROP TABLE IF EXISTS `books`;
CREATE TABLE IF NOT EXISTS `books` (
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

DROP TABLE IF EXISTS `emigrantes`;
CREATE TABLE IF NOT EXISTS `emigrantes` (
  `id_datos` int(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `año` int(11) NOT NULL,
  `emigrantes_hombres` int(11) DEFAULT NULL,
  `emigrantes_mujeres` int(11) DEFAULT NULL,
  `total_emigrantes_españa` int(11) DEFAULT NULL,
  `total_emigrantes_mundo` int(11) DEFAULT NULL,
  `pais_destino` varchar(50) DEFAULT NULL,
  `provincia_destino` varchar(50) DEFAULT NULL,
  `total_emigrantes_pais` int(11) DEFAULT NULL,
  `nacionalidad_extranjera` int(11) DEFAULT NULL,
  `nacionalidad_española` int(11) DEFAULT NULL,
  `total_emigrantes_provincia` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_datos`)
) ENGINE=InnoDB AUTO_INCREMENT=155 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `emigrantes`
--

INSERT INTO `emigrantes` (`id_datos`, `año`, `emigrantes_hombres`, `emigrantes_mujeres`, `total_emigrantes_españa`, `total_emigrantes_mundo`, `pais_destino`, `provincia_destino`, `total_emigrantes_pais`, `nacionalidad_extranjera`, `nacionalidad_española`, `total_emigrantes_provincia`) VALUES
(1, 2000, NULL, NULL, 17700, NULL, NULL, NULL, NULL, 5454, 12246, NULL),
(2, 2009, NULL, NULL, 89540, NULL, NULL, NULL, NULL, 62238, 27302, NULL),
(3, 2022, NULL, NULL, 83601, NULL, NULL, NULL, NULL, 38047, 45554, NULL),
(4, 2010, 161309, 177129, NULL, 338438, 'Argentina', NULL, 115039, NULL, NULL, NULL),
(5, 2010, 161309, 177129, NULL, NULL, 'España', NULL, 84809, NULL, NULL, NULL),
(6, 2010, 161309, 177129, NULL, NULL, 'Estados Unidos', NULL, 51776, NULL, NULL, NULL),
(7, 2010, 161309, 177129, NULL, NULL, 'Brasil', NULL, 23843, NULL, NULL, NULL),
(8, 2010, 161309, 177129, NULL, NULL, 'Australia', NULL, 10630, NULL, NULL, NULL),
(9, 2010, 161309, 177129, NULL, NULL, 'Italia', NULL, 7912, NULL, NULL, NULL),
(10, 2010, 161309, 177129, NULL, NULL, 'Canadá', NULL, 6600, NULL, NULL, NULL),
(11, 2010, 161309, 177129, NULL, NULL, 'Israel', NULL, 6184, NULL, NULL, NULL),
(12, 2010, 161309, 177129, NULL, NULL, 'Venezuela', NULL, 4700, NULL, NULL, NULL),
(13, 2010, 161309, 177129, NULL, NULL, 'Chile', NULL, 4480, NULL, NULL, NULL),
(14, 2010, 161309, 177129, NULL, NULL, 'Paraguay', NULL, 2997, NULL, NULL, NULL),
(15, 2010, 161309, 177129, NULL, NULL, 'Alemania', NULL, 2747, NULL, NULL, NULL),
(16, 2010, 161309, 177129, NULL, NULL, 'México', NULL, 2372, NULL, NULL, NULL),
(17, 2010, 161309, 177129, NULL, NULL, 'Francia', NULL, 2287, NULL, NULL, NULL),
(18, 2010, 161309, 177129, NULL, NULL, 'Suecia', NULL, 2270, NULL, NULL, NULL),
(19, 2010, 161309, 177129, NULL, NULL, 'Suiza', NULL, 1552, NULL, NULL, NULL),
(20, 2020, 174801, 192259, NULL, 367060, 'Argentina', NULL, 134043, NULL, NULL, NULL),
(21, 2020, 174801, 192259, NULL, NULL, 'España', NULL, 81427, NULL, NULL, NULL),
(22, 2020, 174801, 192259, NULL, NULL, 'Estados Unidos', NULL, 50274, NULL, NULL, NULL),
(23, 2020, 174801, 192259, NULL, NULL, 'Brasil', NULL, 30537, NULL, NULL, NULL),
(24, 2020, 174801, 192259, NULL, NULL, 'Australia', NULL, 11449, NULL, NULL, NULL),
(25, 2020, 174801, 192259, NULL, NULL, 'Italia', NULL, 7383, NULL, NULL, NULL),
(26, 2020, 174801, 192259, NULL, NULL, 'Canadá', NULL, 7036, NULL, NULL, NULL),
(27, 2020, 174801, 192259, NULL, NULL, 'Israel', NULL, 6193, NULL, NULL, NULL),
(28, 2020, 174801, 192259, NULL, NULL, 'Chile', NULL, 5652, NULL, NULL, NULL),
(29, 2020, 174801, 192259, NULL, NULL, 'Venezuela', NULL, 4519, NULL, NULL, NULL),
(30, 2020, 174801, 192259, NULL, NULL, 'Alemania', NULL, 3782, NULL, NULL, NULL),
(31, 2020, 174801, 192259, NULL, NULL, 'México', NULL, 3469, NULL, NULL, NULL),
(32, 2020, 174801, 192259, NULL, NULL, 'Paraguay', NULL, 3168, NULL, NULL, NULL),
(33, 2020, 174801, 192259, NULL, NULL, 'Francia', NULL, 2784, NULL, NULL, NULL),
(34, 2020, 174801, 192259, NULL, NULL, 'Suecia', NULL, 2249, NULL, NULL, NULL),
(35, 2020, 174801, 192259, NULL, NULL, 'Suiza', NULL, 1645, NULL, NULL, NULL),
(36, 2022, NULL, NULL, NULL, 527462, 'Argentina', NULL, 212800, NULL, NULL, NULL),
(37, 2022, NULL, NULL, NULL, NULL, 'España', NULL, 83601, NULL, NULL, NULL),
(38, 2022, NULL, NULL, NULL, NULL, 'Estados Unidos', NULL, 69380, NULL, NULL, NULL),
(39, 2022, NULL, NULL, NULL, NULL, 'Brasil', NULL, 49519, NULL, NULL, NULL),
(40, 2022, NULL, NULL, NULL, NULL, 'Australia', NULL, 10111, NULL, NULL, NULL),
(41, 2022, NULL, NULL, NULL, NULL, 'Italia', NULL, 6883, NULL, NULL, NULL),
(42, 2022, NULL, NULL, NULL, NULL, 'Canadá', NULL, 21600, NULL, NULL, NULL),
(43, 2022, NULL, NULL, NULL, NULL, 'Israel', NULL, 15000, NULL, NULL, NULL),
(44, 2022, NULL, NULL, NULL, NULL, 'Chile', NULL, 6136, NULL, NULL, NULL),
(45, 2022, NULL, NULL, NULL, NULL, 'Venezuela', NULL, 8000, NULL, NULL, NULL),
(46, 2022, NULL, NULL, NULL, NULL, 'Alemania', NULL, 4041, NULL, NULL, NULL),
(47, 2022, NULL, NULL, NULL, NULL, 'México', NULL, 10000, NULL, NULL, NULL),
(48, 2022, NULL, NULL, NULL, NULL, 'Paraguay', NULL, 12000, NULL, NULL, NULL),
(49, 2022, NULL, NULL, NULL, NULL, 'Reino Unido', NULL, 5000, NULL, NULL, NULL),
(50, 2022, NULL, NULL, NULL, NULL, 'Suecia', NULL, 3250, NULL, NULL, NULL),
(51, 2022, NULL, NULL, NULL, NULL, 'Suiza', NULL, 4000, NULL, NULL, NULL),
(120, 2000, 115418, 120223, NULL, 235641, NULL, NULL, NULL, NULL, NULL, NULL),
(121, 1990, 116499, 120987, NULL, 237486, NULL, NULL, NULL, NULL, NULL, NULL),
(122, 2000, NULL, NULL, NULL, NULL, 'Argentina', NULL, 113827, NULL, NULL, NULL),
(123, 2000, NULL, NULL, NULL, NULL, 'Estados Unidos', NULL, 25673, NULL, NULL, NULL),
(124, 2000, NULL, NULL, NULL, NULL, 'Brasil', NULL, 24799, NULL, NULL, NULL),
(125, 2000, NULL, NULL, NULL, NULL, 'España', NULL, 17700, NULL, NULL, NULL),
(126, 2000, NULL, NULL, NULL, NULL, 'Australia', NULL, 10570, NULL, NULL, NULL),
(127, 2000, NULL, NULL, NULL, NULL, 'Canadá', NULL, 6240, NULL, NULL, NULL),
(128, 2000, NULL, NULL, NULL, NULL, 'Israel', NULL, 5280, NULL, NULL, NULL),
(129, 2000, NULL, NULL, NULL, NULL, 'Venezuela', NULL, 4692, NULL, NULL, NULL),
(130, 2000, NULL, NULL, NULL, NULL, 'Paraguay', NULL, 3303, NULL, NULL, NULL),
(131, 2000, NULL, NULL, NULL, NULL, 'Italia', NULL, 2596, NULL, NULL, NULL),
(132, 2000, NULL, NULL, NULL, NULL, 'Chile', NULL, 2238, NULL, NULL, NULL),
(133, 2000, NULL, NULL, NULL, NULL, 'Suecia', NULL, 2227, NULL, NULL, NULL),
(134, 2000, NULL, NULL, NULL, NULL, 'Francia', NULL, 2198, NULL, NULL, NULL),
(135, 2000, NULL, NULL, NULL, NULL, 'República Dominicana', NULL, 1985, NULL, NULL, NULL),
(136, 2000, NULL, NULL, NULL, NULL, 'México', NULL, 1966, NULL, NULL, NULL),
(137, 2000, NULL, NULL, NULL, NULL, 'Suiza', NULL, 1175, NULL, NULL, NULL),
(138, 2000, NULL, NULL, NULL, NULL, 'Reino Unido', NULL, 935, NULL, NULL, NULL),
(139, 1990, NULL, NULL, NULL, NULL, 'Argentina', NULL, 136906, NULL, NULL, NULL),
(140, 1990, NULL, NULL, NULL, NULL, 'Brasil', NULL, 23363, NULL, NULL, NULL),
(141, 1990, NULL, NULL, NULL, NULL, 'Estados Unidos', NULL, 20766, NULL, NULL, NULL),
(142, 1990, NULL, NULL, NULL, NULL, 'Australia', NULL, 11795, NULL, NULL, NULL),
(143, 1990, NULL, NULL, NULL, NULL, 'España', NULL, 10922, NULL, NULL, NULL),
(144, 1990, NULL, NULL, NULL, NULL, 'Venezuela', NULL, 6076, NULL, NULL, NULL),
(145, 1990, NULL, NULL, NULL, NULL, 'Canadá', NULL, 5033, NULL, NULL, NULL),
(146, 1990, NULL, NULL, NULL, NULL, 'Israel', NULL, 4315, NULL, NULL, NULL),
(147, 1990, NULL, NULL, NULL, NULL, 'Paraguay', NULL, 3293, NULL, NULL, NULL),
(148, 1990, NULL, NULL, NULL, NULL, 'Francia', NULL, 2065, NULL, NULL, NULL),
(149, 1990, NULL, NULL, NULL, NULL, 'Suecia', NULL, 1749, NULL, NULL, NULL),
(150, 1990, NULL, NULL, NULL, NULL, 'República Dominicana', NULL, 1625, NULL, NULL, NULL),
(151, 1990, NULL, NULL, NULL, NULL, 'Chile', NULL, 1393, NULL, NULL, NULL),
(152, 1990, NULL, NULL, NULL, NULL, 'México', NULL, 1113, NULL, NULL, NULL),
(153, 1990, NULL, NULL, NULL, NULL, 'Suiza', NULL, 950, NULL, NULL, NULL),
(154, 1990, NULL, NULL, NULL, NULL, 'Alemania', NULL, 830, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--

DROP TABLE IF EXISTS `eventos`;
CREATE TABLE IF NOT EXISTS `eventos` (
  `id_evento` int(8) UNSIGNED NOT NULL AUTO_INCREMENT,
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
  `updatedAt` datetime NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_evento`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `eventos`
--

INSERT INTO `eventos` (`id_evento`, `titulo`, `descripcion`, `fecha`, `fecha_fin`, `hora_inicio`, `hora_fin`, `color`, `entrada`, `precio`, `ubicacion`, `createdAt`, `updatedAt`, `photo`) VALUES
(1, 'Aires de candombe', 'JAM session', '2024-12-02 00:00:00', NULL, '19:00:00', NULL, NULL, 'con precio', 10, 'Pl. Reial, 17, Ciutat Vella, 08002 Barcelona Sala 1', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(2, 'Despedida Casa del Uruguay', 'Casa del Uruguay despide el año en su sede', '2024-11-29 00:00:00', NULL, '17:00:00', NULL, 'pastelIndigo', 'Gratuito', NULL, 'Diputació 215, Entlo 1, 08011, Barcelona', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(3, 'Miguel Ángel Cufos', 'Gira por España', '2024-12-14 00:00:00', NULL, '23:00:00', NULL, NULL, 'con precio', 15, 'Carrer de Carles Buïgas 6, Salou, Tarragona', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(4, 'La Vela Puerca', 'La vela puerca participa en el festival Empremtes ‘25', '2025-11-10 00:00:00', NULL, '21:15:00', NULL, NULL, 'con precio', 30, 'Poble Espanyol', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(5, 'Agarrame fuerte', 'La película uruguaya nominada al Goya la podremos disfrutar en Cines Girona', '2025-01-02 00:00:00', NULL, '20:20:00', NULL, 'pastelYellow', 'Pago', 9, 'Carrer de Girona 175, Barcelona', '2025-01-03 18:24:32', '2025-01-03 18:24:32', 'photo-1735928672351.jpg'),
(6, 'Aniversario Asociación \"Los Botijas\"', 'El 23º aniversario de la Asociación \"Los Botijas\" nacida en Rubí se celebra en Barcelona. El precio incluye porción de una buseca al estilo uruguayo, bebida, pan y espectáculo.', '2024-12-15 00:00:00', NULL, '12:00:00', NULL, 'pastelGreen', 'Pago', 12, 'Casal de Barri La Verneda, Barcelona', '2025-01-03 18:32:07', '2025-01-03 18:32:07', 'photo-1735929127969.jpg'),
(7, 'Homenaje a Carlos Gardel - Tango Sur', 'Homenaje al cantante, de la mano de Tango Sur. La entrada es una colaboración para construir un monumento a Carlos Gardel.', '2024-11-29 00:00:00', NULL, '20:36:00', NULL, 'pastelRed', 'Pago', 12, 'Carrer d\'En Font, 25, 08201 Sabadell, Barcelona', '2025-01-03 18:37:35', '2025-01-03 18:37:35', 'photo-1735929455663.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `negocios`
--

DROP TABLE IF EXISTS `negocios`;
CREATE TABLE IF NOT EXISTS `negocios` (
  `id_negocio` int(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `latitud` decimal(10,8) DEFAULT NULL,
  `longitud` decimal(11,8) DEFAULT NULL,
  `tipoRedSocial` varchar(255) DEFAULT NULL,
  `urlRedSocial` varchar(255) DEFAULT NULL,
  `categoria` varchar(255) NOT NULL,
  PRIMARY KEY (`id_negocio`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `negocios`
--

INSERT INTO `negocios` (`id_negocio`, `nombre`, `descripcion`, `direccion`, `latitud`, `longitud`, `tipoRedSocial`, `urlRedSocial`, `categoria`) VALUES
(3, 'El boliche del gordo Cabrera', 'Restaurante de comida uruguaya', 'Carrer del Consell de Cent, 338, L\'Eixample, 08009 Barcelona', 41.39315956, 2.16842653, 'pagina_web', 'https://www.elbolichedelgordo.com/', 'restaurante'),
(4, 'Montevideo', 'Restaurante de comida uruguaya', 'Av. de la Constitució, 30, 32, 08860 Castelldefels, Barcelona', 41.28717465, 1.98778520, 'pagina_web', 'https://www.montevideocastelldefels.com/', 'restaurante'),
(5, 'PizzaLuna', 'Restaurante de comida uruguaya', 'Carrer de Besalú, 46, Sant Martí, 08026 Barcelona', 41.41437436, 2.18404254, 'pagina_web', 'https://drive.google.com/file/d/15phrfPZUHekR2HandeweRTUDVxY2zTYc/view', 'restaurante'),
(6, 'Pizzeria Montevideo Sant Boi', 'Restaurante de comida uruguaya', 'Ronda de Sant Ramon, 150, 08830 Sant Boi de Llobregat, Barcelona', 41.33718062, 2.03811881, 'pagina_web', 'https://montevideosantboi.com/carta/', 'restaurante'),
(7, 'El Arapey', 'Restaurante de comida uruguaya', 'Rambla de Pompeu Fabra, 85, 08850 Gavà, Barcelona', 41.30933454, 2.00241325, 'instagram', 'https://www.instagram.com/p/C8C4qpQMQGS/', 'restaurante'),
(8, 'Luna Gaucha', 'Restaurante de comida uruguaya', 'Plaça de l\'Ajuntament, 8, 08370 Calella, Barcelona', 41.61448061, 2.65641024, 'pagina_web', 'https://www.restaurantelunagaucha.com/', 'restaurante'),
(9, 'Punto UY', 'Restaurante de comida uruguaya', 'Pg. Marítim, 202, 08860 Castelldefels, Barcelona', 41.26877867, 1.97216183, 'instagram', 'https://www.instagram.com/punto_uy_restaurante/?hl=es', 'restaurante'),
(10, 'Chalito Maquinista', 'Restaurante de comida uruguaya', 'Carrer de São Paulo, 13, Sant Andreu, 08030 Barcelona', 41.44202196, 2.19851307, 'pagina_web', 'https://www.chalito.es/', 'restaurante'),
(11, 'Candombe', 'Restaurante de comida uruguaya', 'Av. de Catalunya, 378, 08184 Palau-solità i Plegamans, Barcelona', 41.59687086, 2.18169273, 'facebook', 'https://www.facebook.com/candomberestaurante', 'restaurante'),
(12, 'Reketepizza', 'Pizzería uruguaya', 'Carrer d\'Amadeu Torner, 85, 08902 L\'Hospitalet de Llobregat, Barcelona', 41.36381090, 2.12003605, 'pagina_web', 'https://reketepizza.com/?utm_source=GMB&utm_medium=web&utm_id=hospitalet', 'pizzeria'),
(13, 'La Celeste', 'Restaurante de comida uruguaya', 'Carrer de Carles Buïgas, 34, 08980 Sant Feliu de Llobregat, Barcelona', 41.38751255, 2.05205815, 'instagram', 'https://www.instagram.com/la.celeste.sant.feliu/?hl=es', 'restaurante'),
(14, 'El Raconet Charrua', 'Restaurante de comida uruguaya', 'Av. de la Mare de Déu de Montserrat, 175, Horta-Guinardó, 08041 Barcelona', 41.42201907, 2.17016117, 'instagram', 'https://www.instagram.com/elraconetcharrua/?hl=es', 'restaurante'),
(15, 'Caracé', 'Restaurante de comida uruguaya', 'Carrer de Joaquim Rubió i Ors, 268, 08940 Cornellà de Llobregat, Barcelona', 41.35683597, 2.06830012, 'pagina_web', 'https://restaurantecarace.wordpress.com/', 'restaurante'),
(16, 'Los tres leños', 'Restaurante de comida uruguaya', 'Carrer de la Font d\'en Canyelles, 90, Nou Barris, 08042 Barcelona', 41.44117572, 2.17462513, 'instagram', 'https://www.instagram.com/los_3_lenyos/', 'restaurante'),
(17, 'La mano de Pablo', 'Restaurante de comida uruguaya', 'C. de Frómista, 14, Fuencarral-El Pardo, 28050 Madrid', 40.51148635, -3.67135407, 'pagina web, instagram', 'https://lamanodepablo.com/carta-la-mano-de-pablo/, https://www.instagram.com/lamanodepablo', 'restaurante'),
(18, 'Charrúa', 'Restaurante de comida uruguaya', 'C. del Conde de Xiquena, 4, Centro, 28004 Madrid', 40.49504030, -3.70419961, 'pagina web', 'https://charruamadrid.com/', 'restaurante'),
(19, 'El Arco', 'Pizzería, chivitería uruguaya', 'Pl. de Santiago Suárez \"Santi\", 7, Local 53, Jesús, 46017 Valencia', 39.47001433, -0.40522758, 'instagram', 'https://www.instagram.com/pizzeria_chiviteria_elarco/', 'restaurante'),
(20, 'El hispano', 'Restaurante de comida uruguaya', 'C. de San Agustin, 39, 46340 Requena, Valencia', 39.53359258, -1.11384571, 'pagina web', 'http://www.hispanocarnesalapiedra.com/', 'restaurante'),
(21, 'La Costa UY', 'Restaurante de comida uruguaya', 'C/ de la Democràcia, 3, L\'Olivereta, 46018 València, Valencia', 39.51240629, -0.40522758, 'instagram', 'https://www.instagram.com/lacostauy2022/', 'restaurante'),
(22, 'Cabaña Grill', 'Restaurante de comida uruguaya', 'Carrer Poeta Carmelo Calvo, 15, 03004 Alacant, Alicante', 38.39322642, -0.49861136, 'pagina web', 'https://cabañagrill.com/', 'restaurante'),
(23, 'Zitarrosa', 'Panadería uruguaya', 'Av. de la Constitució, 38, 08860 Castelldefels, Barcelona', 41.29039527, 1.98639634, 'pagina web', 'https://grupozitarrosa.com/', 'panaderia'),
(24, 'El rincón uruguayo', 'Panadería y cafetería uruguaya', 'Rambla de Joaquim Ruyra, 57, 17300 Blanes, Girona', 41.67476466, 2.78969090, 'facebook', 'https://www.facebook.com/elrinconuruguayoblanes/', 'panaderia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

DROP TABLE IF EXISTS `posts`;
CREATE TABLE IF NOT EXISTS `posts` (
  `id_blog` int(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL,
  `contenido` text NOT NULL,
  `categoria` varchar(50) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `autor` varchar(100) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_blog`),
  UNIQUE KEY `posts_titulo` (`titulo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`id_blog`, `titulo`, `contenido`, `categoria`, `status`, `createdAt`, `updatedAt`, `autor`, `photo`) VALUES
(1, 'Aniversario de Rafael Barradas', '<p>Rafael Barradas (Montevideo, 1890&ndash;1929) fue un destacado pintor y dibujante uruguayo cuya trayectoria estuvo profundamente influida por Espa&ntilde;a, &iquest;sabias esto?</p>\r\n<p>Mi intenci&oacute;n en este proyecto es reconectar los hilos que han quedado a lo largo de esta historia entre estos 2 pa&iacute;ses. Nos sorprender&iacute;amos si descubrimos la cantidad de relaci&oacute;n que existe, porque una cosa es saber que hemos sido colonizados por Espa&ntilde;a pero otra es comenzar a investigar sobre ello y su influencia.</p>\r\n<p>Barradas en 1913 viaj&oacute; a Europa, he inici&oacute; un recorrido que lo llev&oacute; a conectar con los futuristas italianos y a impregnarse de las vanguardias de Par&iacute;s. En 1914 se estableci&oacute; en Barcelona, donde entabl&oacute; amistad con poetas y artistas j&oacute;venes, destacando su relaci&oacute;n con Joaqu&iacute;n Torres Garc&iacute;a, otro uruguayo en este pa&iacute;s y el cu&aacute;l transform&oacute; su obra tras conocer el vibracionismo de Barradas. Su estilo, caracterizado por la expresividad crom&aacute;tica, tuvo un impacto notable en la escena art&iacute;stica local.</p>\r\n<p>En Zaragoza, donde se cas&oacute; en 1915, retrat&oacute; personajes rurales con un enfoque expresivo que se distanci&oacute; de su etapa vibracionista. Su vida en Madrid desde 1919 lo llev&oacute; a las tertulias art&iacute;sticas, colaborando con figuras como Lorca, Dal&iacute; y Bu&ntilde;uel. Dise&ntilde;&oacute; escenograf&iacute;as para el Teatro Eslava y particip&oacute; activamente en revistas de vanguardia. En Catalu&ntilde;a, desarroll&oacute; la serie \"Los M&iacute;sticos\" y organiz&oacute; encuentros art&iacute;sticos en su hogar.</p>\r\n<p>Regres&oacute; a Montevideo en 1928 gravemente enfermo y falleci&oacute; en 1929. Su obra, resguardada por su familia, pas&oacute; a formar parte del patrimonio cultural uruguayo y se exhibe en el Museo Nacional de Artes Visuales. Barradas simboliza el intercambio cultural entre Uruguay y Espa&ntilde;a, dejando un legado que fusiona ambas tradiciones art&iacute;sticas.</p>\r\n<p>Poco a poco comenzaremos a descubrir m&aacute;s detalles sobre &eacute;l y otros artistas, te parece interesante? Comunicate con nosotros y dejanos tu opini&oacute;n, tu historia, lo que quieras compartir!</p>', 'biografias', 1, '2025-01-02 16:19:43', '2025-01-02 16:19:43', 'Paola Miramontes', 'photo-1735834783951.png'),
(2, 'La Vela Puerca en Barcelona', '<p>Desde su debut en la vereda de un bar montevideano en 1995, La Vela Puerca no ha dejado de crecer. Aquella grabaci&oacute;n casera que los llev&oacute; a ganar el concurso Generaci&oacute;n 95 fue solo el inicio de una carrera que los ha convertido en referentes del rock rioplatense y de la m&uacute;sica uruguaya en el mundo.</p>\r\n<p>Con su &uacute;ltimo &aacute;lbum, <strong>\"Discop&aacute;tico\"</strong>, la banda est&aacute; en plena gira internacional y har&aacute; una parada en Barcelona para ofrecer a sus seguidores una dosis de su inconfundible energ&iacute;a, letras profundas y una conexi&oacute;n que solo La Vela sabe transmitir.</p>\r\n<p>Aunque a&uacute;n no se sabe si La Vela Puerca a&ntilde;adir&aacute; m&aacute;s fechas en Europa, este concierto es una oportunidad &uacute;nica para disfrutar de su m&uacute;sica en vivo.</p>\r\n<p><strong>&iexcl;No te quedes fuera!</strong> Hazte con tus entradas y prep&aacute;rate para una noche llena de rock, pasi&oacute;n y grandes emociones. 🎶</p>', 'Musica', 1, '2025-01-03 17:35:36', '2025-01-03 17:35:36', 'Paola Miramontes', 'photo-1735925736123.jpeg'),
(3, 'El departamento 20', '<p>&iquest;Sab&iacute;as que de los aproximadamente 3 millones y medio de uruguayos, m&aacute;s de 500 mil vivimos fuera de nuestro pa&iacute;s? Este fen&oacute;meno no solo refleja historias individuales de sue&ntilde;os, oportunidades y desaf&iacute;os, sino que tambi&eacute;n es un espejo de nuestra identidad como naci&oacute;n y de c&oacute;mo esta se expande por el mundo.</p>\r\n<p>En nuestra p&aacute;gina web, hemos creado una secci&oacute;n especial con una gr&aacute;fica interactiva que muestra las estad&iacute;sticas de uruguayos por el mundo, incluyendo un an&aacute;lisis detallado de los que vivimos en Espa&ntilde;a. A trav&eacute;s de esta herramienta, podr&aacute;s visualizar c&oacute;mo ha crecido la migraci&oacute;n en los &uacute;ltimos a&ntilde;os, los principales pa&iacute;ses de destino y c&oacute;mo nos integramos en cada lugar.</p>\r\n<p>Te invitamos a explorar esta secci&oacute;n y descubrir datos que reflejan nuestra historia migratoria. Entender estos n&uacute;meros es una forma de reconocernos, compartir nuestras experiencias y mantenernos conectados como comunidad global.</p>\r\n<p><strong>&iexcl;Haz clic en la secci&oacute;n de estad&iacute;sticas y descubre c&oacute;mo los uruguayos seguimos dejando huella alrededor del mundo!</strong> 🌍</p>', 'Uruguayos por el mundo', 1, '2025-01-03 17:46:12', '2025-01-03 17:46:12', 'Paola Miramontes', 'photo-1735926372619.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recoverytokens`
--

DROP TABLE IF EXISTS `recoverytokens`;
CREATE TABLE IF NOT EXISTS `recoverytokens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(255) NOT NULL,
  `user_id` int(5) UNSIGNED NOT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `token` (`token`),
  UNIQUE KEY `recovery_tokens_token` (`token`),
  UNIQUE KEY `token_2` (`token`),
  UNIQUE KEY `token_3` (`token`),
  UNIQUE KEY `token_4` (`token`),
  UNIQUE KEY `token_5` (`token`),
  UNIQUE KEY `token_6` (`token`),
  UNIQUE KEY `token_7` (`token`),
  UNIQUE KEY `token_8` (`token`),
  UNIQUE KEY `token_9` (`token`),
  UNIQUE KEY `token_10` (`token`),
  UNIQUE KEY `token_11` (`token`),
  UNIQUE KEY `token_12` (`token`),
  UNIQUE KEY `token_13` (`token`),
  UNIQUE KEY `token_14` (`token`),
  UNIQUE KEY `token_15` (`token`),
  UNIQUE KEY `token_16` (`token`),
  UNIQUE KEY `token_17` (`token`),
  UNIQUE KEY `token_18` (`token`),
  UNIQUE KEY `token_19` (`token`),
  UNIQUE KEY `token_20` (`token`),
  UNIQUE KEY `token_21` (`token`),
  UNIQUE KEY `token_22` (`token`),
  UNIQUE KEY `token_23` (`token`),
  UNIQUE KEY `token_24` (`token`),
  UNIQUE KEY `token_25` (`token`),
  UNIQUE KEY `token_26` (`token`),
  UNIQUE KEY `token_27` (`token`),
  UNIQUE KEY `token_28` (`token`),
  UNIQUE KEY `token_29` (`token`),
  UNIQUE KEY `token_30` (`token`),
  UNIQUE KEY `token_31` (`token`),
  UNIQUE KEY `token_32` (`token`),
  UNIQUE KEY `token_33` (`token`),
  UNIQUE KEY `token_34` (`token`),
  UNIQUE KEY `token_35` (`token`),
  UNIQUE KEY `token_36` (`token`),
  UNIQUE KEY `token_37` (`token`),
  UNIQUE KEY `token_38` (`token`),
  UNIQUE KEY `token_39` (`token`),
  UNIQUE KEY `token_40` (`token`),
  UNIQUE KEY `token_41` (`token`),
  UNIQUE KEY `token_42` (`token`),
  UNIQUE KEY `token_43` (`token`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id_user` int(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `apellidos` varchar(30) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `roles` enum('admin','user') NOT NULL DEFAULT 'user',
  `photo` varchar(30) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `users_email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id_user`, `nombre`, `apellidos`, `email`, `password`, `roles`, `photo`, `created_at`, `updated_at`) VALUES
(2, 'prueba', 'prueba', 'pruebagatito@gmail.com', '$2b$10$/m2YMy12bhFXTZ6vxe4Rz.zBgDA3HmUaDvOuimHr3WmMgBEHN8qNu', 'user', 'photo-1734803737644.jpeg', '2024-12-21 17:55:37', '2024-12-21 17:55:37'),
(3, 'Gatito', 'De Prueba', 'gatitodeprueba@gmail.com', '$2b$10$1aDSAq2sRmvvbL8ukIG92Oa42CJLyLRhH5iQEZQ5KQqoaaeWlLj8O', 'admin', 'photo-1734804332547.jpeg', '2024-12-21 18:05:32', '2024-12-21 18:05:32'),
(5, 'Ana Paola', 'Miramontes Ojeda', 'pmiramonteso@gmail.com', '$2b$10$WoCf7FfSEFk2BYl7HHmBTu5VwvXFxb7phuJpaqWzvAbUrfT8iInVi', 'admin', 'photo-1735418104431.jpeg', '2024-12-28 20:35:04', '2024-12-28 20:35:04'),
(6, 'Ana Paola', 'Miramontes Ojeda', 'pmiramo@gmail.com', '$2b$10$0Q4Ba8wiLe1Icmh6lTmWBuEHwk87D8u9kOcPAoB7.kMiEe5PWvgBq', 'user', NULL, '2024-12-28 23:24:39', '2024-12-28 23:24:39'),
(7, 'Paola', 'Miramontes', 'ana@gmail.com', '$2b$10$tZz9IiW1GRChRxc.RNF5t.RKoqn.VUDjEPuJBS3kwOHwukncvXpja', 'user', NULL, '2024-12-30 17:13:01', '2024-12-30 17:13:01'),
(8, 'Ana Paola', 'Miramontes Ojeda', 'prueba@gmail.com', '$2b$10$jAh/sW0UDu93kGXPcf3t4O0TkNdKlLBz.cZIMdmL62gmyCTpr/EO.', 'admin', NULL, '2025-01-02 16:07:54', '2025-01-02 16:07:54');

--
-- Restricciones para tablas volcadas
--

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
  ADD CONSTRAINT `recoverytokens_ibfk_5` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_6` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_7` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_8` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recoverytokens_ibfk_9` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
