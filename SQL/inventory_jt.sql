-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 18, 2020 at 07:20 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.2.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inventory_jt`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2016_06_01_000001_create_oauth_auth_codes_table', 2),
(5, '2016_06_01_000002_create_oauth_access_tokens_table', 2),
(6, '2016_06_01_000003_create_oauth_refresh_tokens_table', 2),
(7, '2016_06_01_000004_create_oauth_clients_table', 2),
(8, '2016_06_01_000005_create_oauth_personal_access_clients_table', 2),
(9, '2020_02_23_104819_add_role_to_user', 3),
(10, '2020_03_03_022314_create_product_category_table', 4);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('0859668d87f3cf6ab35399cd86931a5258fbda449c42b24f61d446e275e9d52b08fbcafc085b0bfe', 1, 5, 'JayaTimur', '[]', 0, '2020-05-12 05:31:38', '2020-05-12 05:31:38', '2021-05-12 12:31:38'),
('09cc6a51f93d4e2a87b02c92322a22e498d3d523006068a3f7af982e6500e329e7a02674db476ce2', 1, 5, 'ePlZ1j8lT7ubbq4peqegST3dV112kj3XK6GobR8BfqNiLeZWEUhZsBTShpwq', '[]', 0, '2020-05-12 05:32:18', '2020-05-12 05:32:18', '2021-05-12 12:32:18'),
('214dec91223578145e0bee265493563074b564b5ef6d1705de4f76430a65672e7fb427028b761663', 1, 5, 'LQM1LwolC9ROqCS67Ojfx7psLYIIyuX0T8E6rspbei4y0AXqyqoq00U3gDcc', '[]', 0, '2020-06-11 00:03:40', '2020-06-11 00:03:40', '2021-06-11 07:03:40'),
('28a5f2648f58c2649ac1bd78a7ca858fe80b9c7e896345cb72df7d6fa3206060f812e30f71fde06c', 1, 3, 'JayaTimur', '[]', 0, '2020-02-25 02:04:48', '2020-02-25 02:04:48', '2021-02-25 09:04:48'),
('313c8a0fef3e190ee4ed490ca4aae4bf0ec6e8fad25060df583e7b302152ec6aa6eff798ea63e257', 1, 5, 'RXBmbcUYNiedZhNq2b15JYYBadsS2kztWvHMChETPJcGQCAs2JFQi6HrO7E9', '[]', 0, '2020-06-16 00:36:05', '2020-06-16 00:36:05', '2021-06-16 07:36:05'),
('5aecd7f370af56b4d6e4b9f1eab60ebe899346ce825338a7c0128aefb1ea7f42f38baee6419ac7cd', 1, 5, 'JayaTimur', '[]', 0, '2020-05-02 23:32:45', '2020-05-02 23:32:45', '2021-05-03 06:32:45'),
('5bb4884eadf5137e826b989d92ceab725c3585cb71ee629b22bafbe0fbf029ce80fb8484c3f30e9a', 1, 5, 'xzywjgQWZna9WtNT1QMZR0wHgp5noGLWt7i5ZdRtnkeEFB5JdJbOzOKZ13tL', '[]', 0, '2020-06-11 09:19:48', '2020-06-11 09:19:48', '2021-06-11 16:19:48'),
('5dfb6f6d7fc3cf33624c42b936bbcd3e63a8a8d50f41379e0debd0c580a962049d700f11af4b65e6', 1, 5, 'JayaTimur', '[]', 0, '2020-04-01 05:09:57', '2020-04-01 05:09:57', '2021-04-01 12:09:57'),
('65627726ae506cf049f0fce7de9bf8c800f103908528ce6922d673d77e785db0a7438f1fbed26fe5', 2, 5, 'JayaTimur', '[]', 0, '2020-02-27 08:31:56', '2020-02-27 08:31:56', '2021-02-27 15:31:56'),
('6ad768c932a804caae20ff4d53960407b17119d1f08d565005fd21201622d756fef832bb9f5a3fdd', 1, 5, 'JayaTimur', '[]', 0, '2020-03-01 00:00:56', '2020-03-01 00:00:56', '2021-03-01 07:00:56'),
('7a44bb96cd98f1d04cce91d0bcf0f7033a71478b8c1b98ad5be8feecd7946f34475f12b15291c500', 1, 5, 'JayaTimur', '[]', 0, '2020-05-02 23:55:22', '2020-05-02 23:55:22', '2021-05-03 06:55:22'),
('7c43662dd1d1e79ebbeb25a0c21dcc0c753d9b8373ef218698e434dddee45f907a71f43652208cbb', 1, 1, 'JayaTimur', '[]', 0, '2020-02-25 02:03:22', '2020-02-25 02:03:22', '2021-02-25 09:03:22'),
('7c8071ccc9b217f632f75710b8de3b4262e44f0b80a098d4282f93d0db7c9d0300e3b3c9a26fe3c7', 1, 5, 'JayaTimur', '[]', 0, '2020-02-27 07:21:03', '2020-02-27 07:21:03', '2021-02-27 14:21:03'),
('80bd9f1da2d3e19be9babcc5d134644c463efa2d9e08534839acaa1cadccf5452df89a0572fdbba5', 1, 5, 'JayaTimur', '[]', 0, '2020-02-25 02:36:22', '2020-02-25 02:36:22', '2021-02-25 09:36:22'),
('83dc86cea87b218ed57c8d94cc1604adca44cd350bc74720e7881d790d98c7f6f92b0ba2d4531fef', 1, 5, 'JayaTimur', '[]', 0, '2020-03-01 00:00:30', '2020-03-01 00:00:30', '2021-03-01 07:00:30'),
('87a020da5415714321b5639a16ae7defc4430a0240f2c7484e87b42c2436393972b2c0922bd7a15a', 1, 5, 'u27lkI4VHP1rPbkvlJvk7Gg9cUSWMT3g1fWhZv6bfC59wB8trexuH6VmvB6G', '[]', 0, '2020-06-14 00:43:20', '2020-06-14 00:43:20', '2021-06-14 07:43:20'),
('8b8ddd48535e104ebe19bac1244f738f8f543306b56869f2676b100c55fc21eb2ddcf5d2062647f6', 1, 5, 'JayaTimur', '[]', 0, '2020-03-06 20:00:03', '2020-03-06 20:00:03', '2021-03-07 03:00:03'),
('919fcd8ee214d2ec8a4a01814182770ab0c7e8ea79f1164b99fbdb0c9c51e8ba7ff1ee9da8617944', 1, 5, 'Mfe9bLym0MG1XXFVtMMmGlxwSgcwYecxK5LvtqLMFvi2jZzFfiSOXRNsoFHM', '[]', 0, '2020-05-12 05:35:02', '2020-05-12 05:35:02', '2021-05-12 12:35:02'),
('9cd725270d48463819bc025b84260c8f1fca59c9c320dc6f357c3742c86bfb723a6de2600b2df3b8', 1, 5, 'JayaTimur', '[]', 0, '2020-05-12 05:19:35', '2020-05-12 05:19:35', '2021-05-12 12:19:35'),
('ab804f519c91be6e3aac4e070943c9b64235d961498b0aaed9f719c48ad3eac5f33631a01c93356f', 1, 5, 'JayaTimur', '[]', 0, '2020-02-25 02:35:23', '2020-02-25 02:35:23', '2021-02-25 09:35:23'),
('af4453df5c544ae26f5b612b168c966fdaa51944decbf8eb041d3b2567e4970965670d37c5a30b25', 1, 5, 'JayaTimur', '[]', 0, '2020-03-18 08:28:26', '2020-03-18 08:28:26', '2021-03-18 15:28:26'),
('c01fb20cb0c14705eb4210e72f3a71bf302226dee397827fa5fb31edff604d3952c292b0f906c630', 1, 5, 'JayaTimur', '[]', 0, '2020-05-02 10:43:45', '2020-05-02 10:43:45', '2021-05-02 17:43:45'),
('c66e7b4b02a581157e7b12a21baad3a8505cb6c57551d08c312f86015163e20f70f0e6a658ecd3c9', 1, 5, 'JayaTimur', '[]', 0, '2020-05-02 10:44:36', '2020-05-02 10:44:36', '2021-05-02 17:44:36'),
('d8368c35dfaa7f3b764575992aa7a219627ab9cfd30f8fde07e17653cacd79635d61983aacc19e22', 1, 5, 'JayaTimur', '[]', 0, '2020-05-12 00:13:16', '2020-05-12 00:13:16', '2021-05-12 07:13:16'),
('d9fa276920df2dbd2936b857d33d563e7fdd083472d90888e6d5df470f2f5725c3b4df583afa0964', 1, 5, 'JayaTimur', '[]', 0, '2020-03-04 09:34:04', '2020-03-04 09:34:04', '2021-03-04 16:34:04'),
('df9e27b24ae3b6affb49ebad700e41748ee6255e5c6a07dfbce1fe7d5a915b058c4ad14b3c1f80ae', 1, 5, 'JayaTimur', '[]', 0, '2020-02-26 07:58:24', '2020-02-26 07:58:24', '2021-02-26 14:58:24'),
('e8bf545a34a93455242f4b9212bf94bcc009eb91eeec9da51de22893ec88b2b8545652d418cfaf10', 1, 5, 'MRDqBgJJHfoybnJP0YlCqMUO7vVjH2iSaBklu2W6Sr5mvcTa3d39kDkZJxjT', '[]', 0, '2020-05-12 05:34:23', '2020-05-12 05:34:23', '2021-05-12 12:34:23'),
('ea3a881d04184593a1fc93917e7b6e82f0712a635c184a4dbb375c65b6f10c9356e289409c01854a', 1, 5, 'tYcYWofo1WrmMMJ5UOQ0OjjmAxXBTC5nKseo1FZyou3C6dcXtLhEN7Yp1CEa', '[]', 0, '2020-06-08 08:54:05', '2020-06-08 08:54:05', '2021-06-08 15:54:05'),
('f228494da8a6e153c36915fece57235bb0797cf165d4e54370ecfed42979ae57778546416027fca0', 1, 5, 'JayaTimur', '[]', 0, '2020-02-25 02:27:34', '2020-02-25 02:27:34', '2021-02-25 09:27:34');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Inventory JT Personal Access Client', 'RhvkipT9JPgvbCabOOpCn0OTNjD8A4lOJtDFnAJZ', 'http://localhost', 1, 0, 0, '2020-02-25 02:02:42', '2020-02-25 02:02:42'),
(2, NULL, 'Inventory JT Password Grant Client', 'WmVcRSOcyUilSv4Gau4RCPUUIdwb1XGlHfwOYQmh', 'http://localhost', 0, 1, 0, '2020-02-25 02:02:42', '2020-02-25 02:02:42'),
(3, NULL, 'Laravel Personal Access Client', 'QilVUOAb7gFIrf3aB1wdyMv6BXPLnEIngEFlwq7q', 'http://localhost', 1, 0, 0, '2020-02-25 02:04:30', '2020-02-25 02:04:30'),
(4, NULL, 'Laravel Password Grant Client', 'i8Dze1aR0XsPgNWSAl8Reb2pErY2n29HHyYxm2w7', 'http://localhost', 0, 1, 0, '2020-02-25 02:04:31', '2020-02-25 02:04:31'),
(5, NULL, 'Laravel Personal Access Client', 'SMJJNHB7UtAqQEI0tgUclpJl5LGkt1rWZxo8dIUN', 'http://localhost', 1, 0, 0, '2020-02-25 02:26:53', '2020-02-25 02:26:53'),
(6, NULL, 'Laravel Password Grant Client', 'Rgplmvsk1rj4ExhAeCxW0iu7hb6eMtV2k1DFeGFc', 'http://localhost', 0, 1, 0, '2020-02-25 02:26:53', '2020-02-25 02:26:53');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2020-02-25 02:02:42', '2020-02-25 02:02:42'),
(2, 3, '2020-02-25 02:04:31', '2020-02-25 02:04:31'),
(3, 5, '2020-02-25 02:26:53', '2020-02-25 02:26:53');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `type`, `price`, `created_at`, `updated_at`) VALUES
(1, 'ACCU BATTERY 45 JUPITER', '2', 950000, NULL, NULL),
(7, 'JUPITER 1', '1', 950000, NULL, NULL),
(8, 'JUPITER 2', '1', 750000, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product_category`
--

CREATE TABLE `product_category` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_category`
--

INSERT INTO `product_category` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Jupiter', NULL, NULL),
(2, 'SG A', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product_stock`
--

CREATE TABLE `product_stock` (
  `product_id` int(11) NOT NULL,
  `location` int(11) NOT NULL COMMENT '1 : store, 2 : warehouse',
  `qty_stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product_stock`
--

INSERT INTO `product_stock` (`product_id`, `location`, `qty_stock`) VALUES
(1, 1, 65),
(1, 2, 47),
(7, 1, 3),
(7, 2, 42),
(8, 1, 42),
(8, 2, 17);

-- --------------------------------------------------------

--
-- Table structure for table `request_stock_detail`
--

CREATE TABLE `request_stock_detail` (
  `id` int(11) NOT NULL,
  `rs_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `qty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `request_stock_detail`
--

INSERT INTO `request_stock_detail` (`id`, `rs_id`, `product_id`, `qty`) VALUES
(1, 1, 8, 10);

-- --------------------------------------------------------

--
-- Table structure for table `request_stock_form`
--

CREATE TABLE `request_stock_form` (
  `id` int(11) NOT NULL,
  `rsf_number` varchar(25) NOT NULL,
  `prepared_by` int(11) NOT NULL,
  `status` varchar(25) NOT NULL DEFAULT 'new' COMMENT 'new, sent, fulfilled',
  `remark` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `request_stock_form`
--

INSERT INTO `request_stock_form` (`id`, `rsf_number`, `prepared_by`, `status`, `remark`, `created_at`, `updated_at`) VALUES
(1, 'NYKMIUKG-2020', 1, 'fulfilled', NULL, '2020-06-16 06:48:07', '2020-06-16 06:48:28');

-- --------------------------------------------------------

--
-- Table structure for table `stock_out_detail`
--

CREATE TABLE `stock_out_detail` (
  `id` int(11) NOT NULL,
  `sof_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `qty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `stock_out_detail`
--

INSERT INTO `stock_out_detail` (`id`, `sof_id`, `product_id`, `qty`) VALUES
(1, 1, 1, 2),
(2, 2, 1, 2),
(3, 3, 8, 2);

-- --------------------------------------------------------

--
-- Table structure for table `stock_out_form`
--

CREATE TABLE `stock_out_form` (
  `id` int(11) NOT NULL,
  `form_number` varchar(25) NOT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `stock_out_form`
--

INSERT INTO `stock_out_form` (`id`, `form_number`, `remark`, `created_at`, `updated_at`) VALUES
(1, 'AYKALOIP-2020', NULL, '2020-06-08 16:16:48', '2020-06-08 16:16:48'),
(2, 'NPYE2CBE-2020', NULL, '2020-06-16 07:13:44', '2020-06-16 07:13:44'),
(3, 'EDTFHXLE-2020', NULL, '2020-06-16 07:14:57', '2020-06-16 07:14:57');

-- --------------------------------------------------------

--
-- Table structure for table `transfer_stock`
--

CREATE TABLE `transfer_stock` (
  `id` int(11) NOT NULL,
  `do_number` int(11) NOT NULL,
  `prepared_by` int(11) NOT NULL,
  `status` varchar(25) NOT NULL DEFAULT 'prepared' COMMENT 'prepared, sent, completed',
  `remark` text DEFAULT NULL,
  `request_stock_form_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `transfer_stock_detail`
--

CREATE TABLE `transfer_stock_detail` (
  `id` int(11) NOT NULL,
  `tf_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `qty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'admin, stockman, storeman'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `role`) VALUES
(1, 'Stevan', 'stevan@mail.com', NULL, '$2y$10$2bRC/qoMA34lU5cDC.6wQODmx8KfLrsI81eyB90QueZvkf7ftMC/i', NULL, '2020-02-15 23:03:51', '2020-02-15 23:03:51', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_category`
--
ALTER TABLE `product_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_stock`
--
ALTER TABLE `product_stock`
  ADD PRIMARY KEY (`product_id`,`location`) USING BTREE;

--
-- Indexes for table `request_stock_detail`
--
ALTER TABLE `request_stock_detail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `request_stock_form`
--
ALTER TABLE `request_stock_form`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stock_out_detail`
--
ALTER TABLE `stock_out_detail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stock_out_form`
--
ALTER TABLE `stock_out_form`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transfer_stock`
--
ALTER TABLE `transfer_stock`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transfer_stock_detail`
--
ALTER TABLE `transfer_stock_detail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `product_category`
--
ALTER TABLE `product_category`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `request_stock_detail`
--
ALTER TABLE `request_stock_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `request_stock_form`
--
ALTER TABLE `request_stock_form`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `stock_out_detail`
--
ALTER TABLE `stock_out_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `stock_out_form`
--
ALTER TABLE `stock_out_form`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `transfer_stock`
--
ALTER TABLE `transfer_stock`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `transfer_stock_detail`
--
ALTER TABLE `transfer_stock_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
