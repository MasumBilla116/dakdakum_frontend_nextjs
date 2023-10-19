-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 13, 2023 at 04:07 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.0.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dakdakum_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `advertising_rates`
--

CREATE TABLE `advertising_rates` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `advertising_rate` int(11) NOT NULL,
  `catagory_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `brand_name` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `catagories`
--

CREATE TABLE `catagories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `catagory_name` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active_catagory` tinyint(1) NOT NULL DEFAULT 1,
  `disabled_catagory` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `city_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active_city` tinyint(1) NOT NULL DEFAULT 1,
  `disabled_city` tinyint(1) NOT NULL DEFAULT 0,
  `country_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`id`, `city_name`, `active_city`, `disabled_city`, `country_id`, `created_at`, `updated_at`) VALUES
(1, 'Sayedpur', 1, 0, 1, '2021-09-23 23:14:05', '2021-09-23 23:14:05'),
(2, 'Rangpur', 1, 0, 1, '2021-09-23 23:29:48', '2021-09-23 23:29:48');

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `country_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active_country` tinyint(1) NOT NULL DEFAULT 0,
  `disabled_country` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `country_name`, `active_country`, `disabled_country`, `created_at`, `updated_at`) VALUES
(1, 'Bangladesh', 1, 0, '2021-09-23 12:09:52', '2021-09-23 12:09:52');

-- --------------------------------------------------------

--
-- Table structure for table `discounts`
--

CREATE TABLE `discounts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `discount` int(11) NOT NULL,
  `free_shipping` tinyint(1) NOT NULL DEFAULT 0,
  `free_return` tinyint(1) NOT NULL DEFAULT 0,
  `active_discount` tinyint(1) NOT NULL DEFAULT 1,
  `disabled_discount` tinyint(1) NOT NULL DEFAULT 0,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
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
(1, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(2, '2021_09_21_174022_create_countries_table', 1),
(3, '2021_09_21_175317_create_cities_table', 1),
(4, '2021_09_22_032920_create_zones_table', 1),
(5, '2014_10_12_000000_create_users_table', 2),
(6, '2014_10_12_100000_create_password_resets_table', 2),
(7, '2014_10_12_200000_add_two_factor_columns_to_users_table', 2),
(8, '2019_08_19_000000_create_failed_jobs_table', 2),
(9, '2020_05_21_100000_create_teams_table', 2),
(10, '2020_05_21_200000_create_team_user_table', 2),
(11, '2020_05_21_300000_create_team_invitations_table', 2),
(12, '2021_09_12_161538_create_sessions_table', 2),
(13, '2021_09_22_041837_create_catagories_table', 3),
(14, '2021_09_22_042331_create_sub_catagories_table', 4),
(15, '2021_09_22_042433_create_advertising_rates_table', 5),
(16, '2021_09_22_044030_create_shop_users_table', 5),
(17, '2021_09_22_052839_create_product_sizes_table', 6),
(18, '2021_09_22_052914_create_product_colors_table', 6),
(19, '2021_09_22_054000_create_products_table', 7),
(20, '2021_09_22_061139_create_sub_products_table', 8),
(21, '2021_09_22_061626_create_ratings_table', 9),
(22, '2021_09_22_061827_create_product_describtions_table', 9),
(23, '2021_09_22_063855_create_brands_table', 10),
(24, '2021_09_22_065122_create_product_descriptions_table', 11),
(25, '2021_09_22_065438_create_product_descriptions_table', 12),
(26, '2021_09_22_065608_create_reviews_table', 13),
(27, '2021_09_22_070056_create_orders_table', 14),
(28, '2021_09_22_102207_create_orders_table', 15),
(29, '2021_09_22_103705_create_discounts_table', 16),
(30, '2021_09_22_111733_create_shippings_table', 17),
(31, '2021_09_22_132643_create_product_orders_table', 18),
(32, '2021_09_22_134727_create_product_links_table', 19),
(33, '2021_09_23_175541_drop_country_zip_code_from_countries', 20),
(34, '2021_09_26_045227_add_column_agree_to_users', 21);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `order_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pending_order` tinyint(1) NOT NULL DEFAULT 1,
  `shipping_order` tinyint(1) NOT NULL DEFAULT 0,
  `delete_order` tinyint(1) NOT NULL DEFAULT 0,
  `confirm_order` tinyint(1) NOT NULL DEFAULT 0,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `shop_user_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
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
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photos_path` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  `purches_price` int(11) NOT NULL,
  `sell_price` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `minimum_order_quantity` int(11) NOT NULL DEFAULT 1,
  `approved` tinyint(1) NOT NULL DEFAULT 0,
  `product_size_id` bigint(20) UNSIGNED NOT NULL,
  `product_color_id` bigint(20) UNSIGNED NOT NULL,
  `catagory_id` bigint(20) UNSIGNED NOT NULL,
  `sub_catagory_id` bigint(20) UNSIGNED NOT NULL,
  `shop_user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product_colors`
--

CREATE TABLE `product_colors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_color_name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product_descriptions`
--

CREATE TABLE `product_descriptions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `weight` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `width` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `height` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `menufacture` varchar(550) COLLATE utf8mb4_unicode_ci NOT NULL,
  `describtion` varchar(550) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `brand_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product_links`
--

CREATE TABLE `product_links` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_link` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_photos_src_link` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product_orders`
--

CREATE TABLE `product_orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `total_quantity` int(11) NOT NULL DEFAULT 1,
  `payable_amount` double(8,2) NOT NULL,
  `paid_amount` double(8,2) NOT NULL DEFAULT 0.00,
  `unpaid_amount` double(8,2) NOT NULL DEFAULT 0.00,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `shop_user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product_sizes`
--

CREATE TABLE `product_sizes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_size` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ratings`
--

CREATE TABLE `ratings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `one_star` int(11) NOT NULL,
  `two_star` int(11) NOT NULL,
  `three_star` int(11) NOT NULL,
  `four_star` int(11) NOT NULL,
  `five_star` int(11) NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `review` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active_review` tinyint(1) NOT NULL DEFAULT 0,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payload` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('4s6tuyPz5duZ2JmORI1EkDcSlr3qYFKLgY3wDQ9a', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0', 'YTo2OntzOjY6Il90b2tlbiI7czo0MDoiS3JJRzBqNWVsZXRFTktkb0R3Z1ZCdWtHUmJVRVVhTjM0cXNCUWcwNSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjY6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9jaXR5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTtzOjE3OiJwYXNzd29yZF9oYXNoX3dlYiI7czo2MDoiJDJ5JDEwJHIzM3FJd3dRMktod29wL0dQUTJ5Y3VHVVVIekJFYmVHRTFjaXp1aXZKd2ZMNUV0VnF5Rm11IjtzOjIxOiJwYXNzd29yZF9oYXNoX3NhbmN0dW0iO3M6NjA6IiQyeSQxMCRyMzNxSXd3UTJLaHdvcC9HUFEyeWN1R1VVSHpCRWJlR0UxY2l6dWl2SndmTDVFdFZxeUZtdSI7fQ==', 1632461388),
('pmwO4xfCrTK3MAusXNeJhOU4M0iAA8rtKl6TUw8x', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0', 'YTo2OntzOjY6Il90b2tlbiI7czo0MDoiTUg3WnV0V2Fxa1psbGt4eEVYYUlZU2hUUm1BS2xlNE9Dc0FMZHppYiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9kYXNoYm9hcmQiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToxO3M6MTc6InBhc3N3b3JkX2hhc2hfd2ViIjtzOjYwOiIkMnkkMTAkcjMzcUl3d1EyS2h3b3AvR1BRMnljdUdVVUh6QkViZUdFMWNpenVpdkp3Zkw1RXRWcXlGbXUiO3M6MjE6InBhc3N3b3JkX2hhc2hfc2FuY3R1bSI7czo2MDoiJDJ5JDEwJHIzM3FJd3dRMktod29wL0dQUTJ5Y3VHVVVIekJFYmVHRTFjaXp1aXZKd2ZMNUV0VnF5Rm11Ijt9', 1632497703),
('q1m9cf2bN29yoh77sTKyQitkT2hVnRdjyeFuMxkh', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0', 'YTo2OntzOjY6Il90b2tlbiI7czo0MDoidld3b1NyaW5zdVJ4eGJFMEdQeHI0akR5UVEzcDByY3ZWOFAwd3J4aSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjY6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC91c2VyIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTtzOjE3OiJwYXNzd29yZF9oYXNoX3dlYiI7czo2MDoiJDJ5JDEwJHIzM3FJd3dRMktod29wL0dQUTJ5Y3VHVVVIekJFYmVHRTFjaXp1aXZKd2ZMNUV0VnF5Rm11IjtzOjIxOiJwYXNzd29yZF9oYXNoX3NhbmN0dW0iO3M6NjA6IiQyeSQxMCRyMzNxSXd3UTJLaHdvcC9HUFEyeWN1R1VVSHpCRWJlR0UxY2l6dWl2SndmTDVFdFZxeUZtdSI7fQ==', 1632487855),
('TvHsuFEmStLm7xRThPcYQh2NiilD6gnYOP4QuULs', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiaTVjbWs1a1c1bzc3WWNBeFhRSXo5UjBONmFPN2FKVWxUY05WVGlsdiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjc6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9sb2dpbiI7fX0=', 1633323097),
('x71dqnX2TdMM15wgjs7UYoHu2g5FJPoGaZVPjmnI', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZjlTb3lscDU1cTZjZEgwQ0I4VXF6SkNFNHZtMlh0aGNqUkVUbWw3cyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjc6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9sb2dpbiI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1632546549),
('Xn5iVA3cG6MqcdGNpi3UcRW23SaKBOZxPYgNHvat', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiN0c1QlE2V2k1YXY3VUJkRU9OUm14cXU3Z2MyOFlKeXdSUkwyZ3IzaSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjc6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9sb2dpbiI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1632633197),
('XoJoGU0uR4BgBAz1j1PQb08lFFnQTqbWPO0QimQM', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0', 'YTo2OntzOjY6Il90b2tlbiI7czo0MDoiV1dZOUZKVncyWU9SSGhsVmYzNGJnVGk4UEpVUDhyVWQwZXRBSFZDZSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjY6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9jaXR5Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTtzOjE3OiJwYXNzd29yZF9oYXNoX3dlYiI7czo2MDoiJDJ5JDEwJHIzM3FJd3dRMktod29wL0dQUTJ5Y3VHVVVIekJFYmVHRTFjaXp1aXZKd2ZMNUV0VnF5Rm11IjtzOjIxOiJwYXNzd29yZF9oYXNoX3NhbmN0dW0iO3M6NjA6IiQyeSQxMCRyMzNxSXd3UTJLaHdvcC9HUFEyeWN1R1VVSHpCRWJlR0UxY2l6dWl2SndmTDVFdFZxeUZtdSI7fQ==', 1632478095);

-- --------------------------------------------------------

--
-- Table structure for table `shippings`
--

CREATE TABLE `shippings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `shipping_charge` int(11) NOT NULL,
  `shipping_time` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shop_user_id` bigint(20) UNSIGNED NOT NULL,
  `country_id` bigint(20) UNSIGNED NOT NULL,
  `city_id` bigint(20) UNSIGNED NOT NULL,
  `zone_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `shop_users`
--

CREATE TABLE `shop_users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `show_owner_name` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shop_name` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bank_ac` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bkash_ac` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roket_ac` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nogod_ac` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `upay_ac` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `verified_shop` tinyint(1) NOT NULL DEFAULT 0,
  `active_shop` tinyint(1) NOT NULL DEFAULT 0,
  `disabled_shop` tinyint(1) NOT NULL DEFAULT 0,
  `temporari_lock` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `shop_users`
--

INSERT INTO `shop_users` (`id`, `show_owner_name`, `shop_name`, `bank_ac`, `bkash_ac`, `roket_ac`, `nogod_ac`, `upay_ac`, `verified_shop`, `active_shop`, `disabled_shop`, `temporari_lock`, `created_at`, `updated_at`) VALUES
(1, '', '', '', '', '', '', '', 0, 0, 0, 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sub_catagories`
--

CREATE TABLE `sub_catagories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sub_catagory_name` varchar(350) COLLATE utf8mb4_unicode_ci NOT NULL,
  `catagory_id` bigint(20) UNSIGNED NOT NULL,
  `active_sub_catagory` tinyint(1) NOT NULL DEFAULT 1,
  `disabled_sub_catagory` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sub_products`
--

CREATE TABLE `sub_products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sub_product_photos_path` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_team` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`id`, `user_id`, `name`, `personal_team`, `created_at`, `updated_at`) VALUES
(1, 1, 'Masum\'s Team', 1, '2021-09-22 22:23:37', '2021-09-22 22:23:37');

-- --------------------------------------------------------

--
-- Table structure for table `team_invitations`
--

CREATE TABLE `team_invitations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `team_id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `team_user`
--

CREATE TABLE `team_user` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `team_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` int(11) NOT NULL DEFAULT 1,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `two_factor_secret` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `two_factor_recovery_codes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `current_team_id` bigint(20) UNSIGNED DEFAULT NULL,
  `profile_photo_path` varchar(2048) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nid_front_part_photo_path` varchar(2048) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nid_back_part_photo_path` varchar(2048) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `permanent_phone_number` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `alternate_phone_number` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `active_user` tinyint(1) NOT NULL DEFAULT 1,
  `disabled_user` tinyint(1) NOT NULL DEFAULT 0,
  `temporary_lock` tinyint(1) NOT NULL DEFAULT 0,
  `country_id` bigint(20) UNSIGNED DEFAULT NULL,
  `city_id` bigint(20) UNSIGNED DEFAULT NULL,
  `zone_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `agree` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `role`, `email_verified_at`, `password`, `two_factor_secret`, `two_factor_recovery_codes`, `remember_token`, `current_team_id`, `profile_photo_path`, `nid_front_part_photo_path`, `nid_back_part_photo_path`, `permanent_phone_number`, `alternate_phone_number`, `active_user`, `disabled_user`, `temporary_lock`, `country_id`, `city_id`, `zone_id`, `created_at`, `updated_at`, `agree`) VALUES
(1, 'Masum Billa', 'masumbillacse@gmail.com', 1, NULL, '$2y$10$r33qIwwQ2Khwop/GPQ2ycuGUUHzBEbeGE1cizuivJwfL5EtVqyFmu', NULL, NULL, NULL, 1, 'profile-photos/jBxbIUde67dLn4XhchrWDgVQ1H9FOOXteh2iPlH4.jpg', NULL, NULL, NULL, NULL, 1, 0, 0, NULL, NULL, NULL, '2021-09-22 22:23:37', '2021-09-22 22:44:29', 1),
(4, 'Masum', 'masum@gmail.com', 3, NULL, 'eyJpdiI6IllBSTZPbGxvRjJ5enRoZGk0N0hBZFE9PSIsInZhbHVlIjoiUHFEWjRWZlJvYkF6MTJLUGZwajd3Zz09IiwibWFjIjoiNTI4ZmFhNjYyNDZmNzBjOWRiZmQ5ZmFhMmUwNjU1YzE2M2M2ZDhhYzVmYWViZjA0MTFkNGQzNjcxMjNlMjcwMCIsInRhZyI6IiJ9', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01700000000', NULL, 1, 0, 0, NULL, NULL, NULL, '2021-10-05 00:52:29', '2021-10-05 00:52:29', 1),
(5, 'billa', 'billa@gmail.com', 3, NULL, '$2y$10$idGGZfyssCCS2H7WjodA0Opsuh4mVIaCiOEARJafWy4cONyGleA2.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01700000000', NULL, 1, 0, 0, NULL, NULL, NULL, '2021-10-05 01:27:25', '2021-10-05 01:27:25', 1),
(6, 'jon', 'jon@gmail.com', 3, NULL, '$2y$10$2DM1hRzs/UgUSUiYGOZRAeMNIKIu4RhgxrsgAhGDrJeijwnYag4ym', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01700000000', NULL, 1, 0, 0, NULL, NULL, NULL, '2021-10-05 01:31:22', '2021-10-05 01:31:22', 1),
(7, 'Sumi', 'sumi@gmail.com', 3, NULL, '$2y$10$4l3n5LEHgHuzYyQ8tGH.UeOjVNpBurQs4QV3Zo33NFooySuPz7dtW', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01758479568', NULL, 1, 0, 0, NULL, NULL, NULL, '2021-10-06 01:18:12', '2021-10-06 01:18:12', 1),
(8, 'jak', 'jak@gmail.com', 3, NULL, '$2y$10$ELgLHskhBFoZOQlJWlvlmuFfuRFfuGuoOjtMs3clMioV/2Um/fMEG', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01785469587', NULL, 1, 0, 0, NULL, NULL, NULL, '2021-10-07 00:22:11', '2021-10-07 00:22:11', 1);

-- --------------------------------------------------------

--
-- Table structure for table `zones`
--

CREATE TABLE `zones` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `zone_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country_id` bigint(20) UNSIGNED NOT NULL,
  `city_id` bigint(20) UNSIGNED NOT NULL,
  `active_zone` tinyint(1) NOT NULL DEFAULT 1,
  `disabled_zone` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `advertising_rates`
--
ALTER TABLE `advertising_rates`
  ADD PRIMARY KEY (`id`),
  ADD KEY `advertising_rates_catagory_id_foreign` (`catagory_id`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `brands_brand_name_unique` (`brand_name`);

--
-- Indexes for table `catagories`
--
ALTER TABLE `catagories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cities_country_id_foreign` (`country_id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `countries_country_name_unique` (`country_name`);

--
-- Indexes for table `discounts`
--
ALTER TABLE `discounts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `discounts_product_id_foreign` (`product_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_product_id_foreign` (`product_id`),
  ADD KEY `orders_shop_user_id_foreign` (`shop_user_id`),
  ADD KEY `orders_user_id_foreign` (`user_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_product_size_id_foreign` (`product_size_id`),
  ADD KEY `products_product_color_id_foreign` (`product_color_id`),
  ADD KEY `products_catagory_id_foreign` (`catagory_id`),
  ADD KEY `products_sub_catagory_id_foreign` (`sub_catagory_id`),
  ADD KEY `products_shop_user_id_foreign` (`shop_user_id`);

--
-- Indexes for table `product_colors`
--
ALTER TABLE `product_colors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_descriptions`
--
ALTER TABLE `product_descriptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_descriptions_brand_id_foreign` (`brand_id`),
  ADD KEY `product_descriptions_product_id_foreign` (`product_id`);

--
-- Indexes for table `product_links`
--
ALTER TABLE `product_links`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `product_links_product_link_unique` (`product_link`) USING HASH,
  ADD KEY `product_links_product_id_foreign` (`product_id`);

--
-- Indexes for table `product_orders`
--
ALTER TABLE `product_orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_orders_order_id_foreign` (`order_id`),
  ADD KEY `product_orders_user_id_foreign` (`user_id`),
  ADD KEY `product_orders_shop_user_id_foreign` (`shop_user_id`);

--
-- Indexes for table `product_sizes`
--
ALTER TABLE `product_sizes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ratings`
--
ALTER TABLE `ratings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ratings_product_id_foreign` (`product_id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reviews_product_id_foreign` (`product_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `shippings`
--
ALTER TABLE `shippings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `shippings_shop_user_id_foreign` (`shop_user_id`),
  ADD KEY `shippings_country_id_foreign` (`country_id`),
  ADD KEY `shippings_city_id_foreign` (`city_id`),
  ADD KEY `shippings_zone_id_foreign` (`zone_id`);

--
-- Indexes for table `shop_users`
--
ALTER TABLE `shop_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `shop_users_shop_name_unique` (`shop_name`);

--
-- Indexes for table `sub_catagories`
--
ALTER TABLE `sub_catagories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sub_catagories_catagory_id_foreign` (`catagory_id`);

--
-- Indexes for table `sub_products`
--
ALTER TABLE `sub_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sub_products_product_id_foreign` (`product_id`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`),
  ADD KEY `teams_user_id_index` (`user_id`);

--
-- Indexes for table `team_invitations`
--
ALTER TABLE `team_invitations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `team_invitations_team_id_email_unique` (`team_id`,`email`);

--
-- Indexes for table `team_user`
--
ALTER TABLE `team_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `team_user_team_id_user_id_unique` (`team_id`,`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_country_id_foreign` (`country_id`),
  ADD KEY `users_city_id_foreign` (`city_id`),
  ADD KEY `users_zone_id_foreign` (`zone_id`);

--
-- Indexes for table `zones`
--
ALTER TABLE `zones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `zones_country_id_foreign` (`country_id`),
  ADD KEY `zones_city_id_foreign` (`city_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `advertising_rates`
--
ALTER TABLE `advertising_rates`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `catagories`
--
ALTER TABLE `catagories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `discounts`
--
ALTER TABLE `discounts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_colors`
--
ALTER TABLE `product_colors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_descriptions`
--
ALTER TABLE `product_descriptions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_links`
--
ALTER TABLE `product_links`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_orders`
--
ALTER TABLE `product_orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_sizes`
--
ALTER TABLE `product_sizes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ratings`
--
ALTER TABLE `ratings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `shippings`
--
ALTER TABLE `shippings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `shop_users`
--
ALTER TABLE `shop_users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sub_catagories`
--
ALTER TABLE `sub_catagories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sub_products`
--
ALTER TABLE `sub_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `team_invitations`
--
ALTER TABLE `team_invitations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `team_user`
--
ALTER TABLE `team_user`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `zones`
--
ALTER TABLE `zones`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `advertising_rates`
--
ALTER TABLE `advertising_rates`
  ADD CONSTRAINT `advertising_rates_catagory_id_foreign` FOREIGN KEY (`catagory_id`) REFERENCES `catagories` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `cities`
--
ALTER TABLE `cities`
  ADD CONSTRAINT `cities_country_id_foreign` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `discounts`
--
ALTER TABLE `discounts`
  ADD CONSTRAINT `discounts_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `orders_shop_user_id_foreign` FOREIGN KEY (`shop_user_id`) REFERENCES `shop_users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_catagory_id_foreign` FOREIGN KEY (`catagory_id`) REFERENCES `catagories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `products_product_color_id_foreign` FOREIGN KEY (`product_color_id`) REFERENCES `product_colors` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `products_product_size_id_foreign` FOREIGN KEY (`product_size_id`) REFERENCES `product_sizes` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `products_shop_user_id_foreign` FOREIGN KEY (`shop_user_id`) REFERENCES `shop_users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `products_sub_catagory_id_foreign` FOREIGN KEY (`sub_catagory_id`) REFERENCES `sub_catagories` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `product_descriptions`
--
ALTER TABLE `product_descriptions`
  ADD CONSTRAINT `product_descriptions_brand_id_foreign` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `product_descriptions_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `product_links`
--
ALTER TABLE `product_links`
  ADD CONSTRAINT `product_links_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `product_orders`
--
ALTER TABLE `product_orders`
  ADD CONSTRAINT `product_orders_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `product_orders_shop_user_id_foreign` FOREIGN KEY (`shop_user_id`) REFERENCES `shop_users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `product_orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `ratings`
--
ALTER TABLE `ratings`
  ADD CONSTRAINT `ratings_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `shippings`
--
ALTER TABLE `shippings`
  ADD CONSTRAINT `shippings_city_id_foreign` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `shippings_country_id_foreign` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `shippings_shop_user_id_foreign` FOREIGN KEY (`shop_user_id`) REFERENCES `shop_users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `shippings_zone_id_foreign` FOREIGN KEY (`zone_id`) REFERENCES `zones` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sub_catagories`
--
ALTER TABLE `sub_catagories`
  ADD CONSTRAINT `sub_catagories_catagory_id_foreign` FOREIGN KEY (`catagory_id`) REFERENCES `catagories` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sub_products`
--
ALTER TABLE `sub_products`
  ADD CONSTRAINT `sub_products_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `team_invitations`
--
ALTER TABLE `team_invitations`
  ADD CONSTRAINT `team_invitations_team_id_foreign` FOREIGN KEY (`team_id`) REFERENCES `teams` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_city_id_foreign` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `users_country_id_foreign` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `users_zone_id_foreign` FOREIGN KEY (`zone_id`) REFERENCES `zones` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `zones`
--
ALTER TABLE `zones`
  ADD CONSTRAINT `zones_city_id_foreign` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`),
  ADD CONSTRAINT `zones_country_id_foreign` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
