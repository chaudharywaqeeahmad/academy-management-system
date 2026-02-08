-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 08, 2026 at 11:50 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project2_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `assignments`
--

CREATE TABLE `assignments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `instructor` varchar(255) NOT NULL,
  `degree` varchar(255) NOT NULL,
  `program` varchar(255) NOT NULL,
  `class` varchar(255) NOT NULL,
  `upload_file` varchar(255) NOT NULL,
  `end_time` varchar(255) NOT NULL,
  `added_from` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `attendances`
--

CREATE TABLE `attendances` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `student_name` varchar(255) NOT NULL,
  `registeration_no` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `added_from` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `blog_title` varchar(255) NOT NULL,
  `blog_image` varchar(255) NOT NULL,
  `blog_description` longtext NOT NULL,
  `added_from` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `degree` varchar(255) NOT NULL,
  `program` varchar(255) NOT NULL,
  `class` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `added_from` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `degree`, `program`, `class`, `subject`, `added_from`, `created_at`, `updated_at`) VALUES
(5, '1', '2', '2', 'a:4:{i:0;s:7:\"Physics\";i:1;s:9:\"Chemistry\";i:2;s:7:\"Biology\";i:3;s:16:\"Computer Science\";}', '1', '2023-11-28 12:28:47', '2023-11-28 12:28:47'),
(6, '1', '1', '1', 'a:4:{i:0;s:7:\"Physics\";i:1;s:9:\"Chemistry\";i:2;s:7:\"Biology\";i:3;s:16:\"Computer Science\";}', '1', '2023-11-28 12:29:40', '2023-11-28 12:29:40'),
(7, '2', '3', '3', 'a:4:{i:0;s:7:\"Physics\";i:1;s:9:\"Chemistry\";i:2;s:7:\"Biology\";i:3;s:16:\"Computer Science\";}', '1', '2023-11-28 12:31:13', '2023-11-28 12:31:13'),
(8, '2', '4', '4', 'a:4:{i:0;s:7:\"Physics\";i:1;s:9:\"Chemistry\";i:2;s:7:\"Biology\";i:3;s:16:\"Computer Science\";}', '1', '2023-11-28 12:31:56', '2023-11-28 12:31:56');

-- --------------------------------------------------------

--
-- Table structure for table `classes`
--

CREATE TABLE `classes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `classes_name` varchar(255) NOT NULL,
  `classes_status` varchar(255) NOT NULL,
  `classes_description` longtext NOT NULL,
  `added_from` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `classes`
--

INSERT INTO `classes` (`id`, `classes_name`, `classes_status`, `classes_description`, `added_from`, `created_at`, `updated_at`) VALUES
(1, 'one', '1', 'Reserved For Middle', '1', '2023-11-16 06:18:21', '2023-11-16 06:18:21'),
(2, 'two', '1', 'Reserved For Matriculation', '1', '2023-11-16 06:18:39', '2023-11-16 06:18:39'),
(3, 'three', '1', 'This room is reserved for Eleventh Class.', '1', '2023-11-16 16:15:52', '2023-11-16 16:15:52'),
(4, 'four', '1', 'This room is reserved for Twelfth Class.', '1', '2023-11-16 16:16:23', '2023-11-16 16:16:23');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `contact_no` varchar(255) NOT NULL,
  `message` longtext NOT NULL,
  `date` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `course_title` varchar(255) NOT NULL,
  `course_degree` varchar(255) NOT NULL,
  `course_program` longtext NOT NULL,
  `course_status` varchar(255) NOT NULL,
  `course_description` longtext NOT NULL,
  `course_picture` longtext NOT NULL,
  `course_price` longtext NOT NULL,
  `course_duration` longtext NOT NULL,
  `course_benefits` longtext NOT NULL,
  `added_from` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `course_title`, `course_degree`, `course_program`, `course_status`, `course_description`, `course_picture`, `course_price`, `course_duration`, `course_benefits`, `added_from`, `created_at`, `updated_at`) VALUES
(1, 'amazon virtual assistant', '4', '5', '1', 'An Amazon Virtual Assistant (VA) Course is designed to equip individuals with the skills needed to efficiently manage tasks related to selling products on Amazon. This includes product research, listing optimization, order processing, customer service, and inventory management. Participants learn to navigate Amazon Seller Central, implement effective marketing strategies, and utilize tools for successful e-commerce operations. The course aims to empower virtual assistants to support Amazon sellers in optimizing their businesses and maximizing sales.', '11868.webp', '30000-40000', '2', 'An Amazon VA Course provides a comprehensive skill set, teaching efficient navigation of Amazon Seller Central, listing optimization, product research, and customer service. Participants gain expertise in managing inventory, implementing marketing strategies, and understanding Amazon policies. The course offers valuable remote work skills and networking opportunities within the Amazon Virtual Assistant community.', '1', '2023-11-16 05:47:40', '2023-11-22 10:12:12'),
(2, 'shopify mastery', '4', '5', '1', 'This perfectly designed course emphasizes delivering variable methodologies, concept building, and advanced tools to revolutionize the state of the art. These mastery courses will guide you in building an e-commerce store for financially rewarding business development.', '36599.jpg', '30000-40000', '2', 'A Shopify Mastery Course provides essential skills for effectively setting up, managing, and growing an e-commerce store on the Shopify platform. Participants gain expertise in store configuration, product management, marketing strategies, and analytics. The course facilitates a deep understanding of Shopify\'s features, enabling users to optimize their online business and stay current with platform updates.', '1', '2023-11-16 05:48:19', '2023-11-22 10:10:48'),
(3, 'graphic designing', '4', '5', '1', 'This course combines design principles and software, typography, digital illustration, digital imaging, page layout, and prepress techniques with a focus on design processes from the point of visualization to production.', '41212.jpeg', '30000-40000', '2', 'Here are the benefits of graphic designing Course such as:\r\n1) Turning Your Passion into Your Profession. Many people used to like drawing and creative stuff in their childhood.\r\n2) Personal Branding.\r\n3) Improved Communication Skills. \r\n4) Personal Development.\r\n5) Get Paid for Being a Creative Designer.', '1', '2023-11-16 05:49:15', '2023-11-22 10:10:02');

-- --------------------------------------------------------

--
-- Table structure for table `day__books`
--

CREATE TABLE `day__books` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `amount` varchar(255) NOT NULL,
  `remark` varchar(255) NOT NULL,
  `added_from` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `day__book__categories`
--

CREATE TABLE `day__book__categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `category_type` varchar(255) NOT NULL,
  `added_from` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `day__book__categories`
--

INSERT INTO `day__book__categories` (`id`, `category_name`, `category_type`, `added_from`, `created_at`, `updated_at`) VALUES
(1, 'INCOME', 'Revenue', '1', '2023-11-18 04:51:54', '2023-11-18 04:51:54'),
(2, 'EXPENDITURE', 'Expenses', '1', '2023-11-18 04:52:08', '2023-11-18 04:52:08');

-- --------------------------------------------------------

--
-- Table structure for table `degrees`
--

CREATE TABLE `degrees` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `degree_name` varchar(255) NOT NULL,
  `degree_status` varchar(255) NOT NULL,
  `degree_description` longtext NOT NULL,
  `added_from` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `degrees`
--

INSERT INTO `degrees` (`id`, `degree_name`, `degree_status`, `degree_description`, `added_from`, `created_at`, `updated_at`) VALUES
(1, 'matriculation', '1', '10 Years Of Education', '1', '2023-11-16 04:22:48', '2023-11-16 04:22:48'),
(2, 'intermediate', '1', '12 Years Of Education', '1', '2023-11-16 04:23:09', '2023-11-16 04:23:09'),
(4, 'courses', '1', 'This includes short courses.', '1', '2023-11-16 04:23:36', '2023-11-16 04:23:36'),
(6, 'middle', '1', 'This includes grade 6, 7 & 8.', '1', '2023-12-09 01:19:16', '2023-12-09 01:19:16');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `fees`
--

CREATE TABLE `fees` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `fee_receipt_no` varchar(255) NOT NULL,
  `due_date` varchar(255) NOT NULL,
  `month` varchar(255) NOT NULL,
  `room` varchar(255) NOT NULL,
  `batch` varchar(255) NOT NULL,
  `student_id` varchar(255) NOT NULL,
  `fee_status` varchar(255) NOT NULL,
  `message_sent` varchar(255) DEFAULT NULL,
  `added_from` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `fee__reminders`
--

CREATE TABLE `fee__reminders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `reminder_name` varchar(255) DEFAULT NULL,
  `from_date` varchar(255) DEFAULT NULL,
  `to_date` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `added_from` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `fee__reminders`
--

INSERT INTO `fee__reminders` (`id`, `reminder_name`, `from_date`, `to_date`, `status`, `description`, `type`, `added_from`, `created_at`, `updated_at`) VALUES
(1, 'Fee Reminder', '2023-11-15', '2023-11-20', 'Scheduling', 'Kindly Deposit Your Fee Immediately, If Already Paid Then Ignore. Thank You!', 'Late Fee Reminder', '1', '2023-11-27 01:09:55', '2023-12-07 00:27:07');

-- --------------------------------------------------------

--
-- Table structure for table `holidays__reminders`
--

CREATE TABLE `holidays__reminders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `holiday_name` varchar(255) DEFAULT NULL,
  `reminder_name` varchar(255) DEFAULT NULL,
  `from_date` varchar(255) DEFAULT NULL,
  `to_date` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `added_from` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `leaves`
--

CREATE TABLE `leaves` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `student_id` varchar(255) NOT NULL,
  `from_date` varchar(255) NOT NULL,
  `to_date` varchar(255) NOT NULL,
  `leave_type` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `reason` varchar(255) NOT NULL,
  `added_from` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `materials`
--

CREATE TABLE `materials` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `instructor` varchar(255) NOT NULL,
  `degree` varchar(255) NOT NULL,
  `program` varchar(255) NOT NULL,
  `class` varchar(255) NOT NULL,
  `upload_file` varchar(255) NOT NULL,
  `added_from` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_10_01_173212_create_degrees_table', 1),
(6, '2023_10_01_173227_create_programs_table', 1),
(7, '2023_10_01_173244_create_courses_table', 1),
(8, '2023_10_02_180207_create_classes_table', 1),
(9, '2023_10_16_183810_create_books_table', 1),
(10, '2023_10_16_183903_create_test__schedules_table', 1),
(11, '2023_10_16_183932_create_time__tables_table', 1),
(12, '2023_10_16_183953_create_notices_table', 1),
(13, '2023_10_16_184016_create_blogs_table', 1),
(14, '2023_10_16_190635_create_syllabi_table', 1),
(15, '2023_10_16_191918_create_contacts_table', 1),
(16, '2023_10_22_195718_create_assignments_table', 1),
(17, '2023_10_22_195738_create_materials_table', 1),
(18, '2023_10_28_100921_create_fees_table', 1),
(19, '2023_10_29_071903_create_attendances_table', 1),
(20, '2023_11_07_203640_create_leaves_table', 1),
(21, '2023_11_07_212433_create_day__books_table', 1),
(22, '2023_11_07_212534_create_day__book__categories_table', 1),
(23, '2023_11_09_113244_create_holidays__reminders_table', 1),
(24, '2023_11_11_212450_create_teacher__attendances_table', 1),
(25, '2023_11_12_042602_create_teacher__salaries_table', 1),
(26, '2023_11_23_192109_create_fee__reminders_table', 2),
(27, '2014_10_12_100000_create_password_resets_table', 3),
(28, '2026_02_07_191640_create_sessions_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `notices`
--

CREATE TABLE `notices` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `notice_name` varchar(255) NOT NULL,
  `notice_description` longtext NOT NULL,
  `notice_status` varchar(255) NOT NULL,
  `added_from` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `programs`
--

CREATE TABLE `programs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `program_degree` varchar(255) NOT NULL,
  `program_name` varchar(255) NOT NULL,
  `program_status` varchar(255) NOT NULL,
  `program_description` longtext NOT NULL,
  `added_from` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `programs`
--

INSERT INTO `programs` (`id`, `program_degree`, `program_name`, `program_status`, `program_description`, `added_from`, `created_at`, `updated_at`) VALUES
(1, '1', 'ninth', '1', 'SSC-I (9 Years Of Education)', '1', '2023-11-16 04:24:28', '2023-11-16 04:24:28'),
(2, '1', 'tenth', '1', 'SSC-II (10 Years Of Education)', '1', '2023-11-16 04:24:42', '2023-11-16 04:24:42'),
(3, '2', 'eleventh', '1', 'HSSC-I (11 Years Of Education)', '1', '2023-11-16 04:25:02', '2023-11-16 04:25:02'),
(4, '2', 'twelfth', '1', 'HSSC-II (12 Years Of Education)', '1', '2023-11-16 04:25:29', '2023-11-16 04:25:29'),
(5, '4', 'short courses', '1', 'Short courses play vital role in enhancing skills of students.', '1', '2023-11-16 04:25:56', '2023-11-18 17:23:17'),
(7, '6', 'seventh', '1', '7 Years Of Education.', '1', '2023-12-09 01:23:01', '2023-12-09 01:23:01'),
(8, '6', 'eighth', '1', '8 Years Of Education.', '1', '2023-12-09 01:23:43', '2023-12-09 01:23:43');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('hEWUu6o0YvjpKalS32puisyLET0cBZOgKBXQU6re', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieGNpVVBPTGdyOWkyUFhTbkp6TkhLWlcwOFRQRGFsN056dXhEYVhOUiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1770579698),
('kv5Ur9u2hCXGOVr4BFJotZz6Ec03Z7IZ9YAG2pVD', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', 'YTo0OntzOjk6Il9wcmV2aW91cyI7YToxOntzOjM6InVybCI7czoyOToiaHR0cDovL2xvY2FsaG9zdDo4MDAwL3RlYWNoZXIiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjY6Il90b2tlbiI7czo0MDoiUTlEWkZXNjdvTW1HMUdrbld5dkdpcXI2Z1RPSlhDSmZJOThOdGJtQiI7czoxMDoidXNlcl9hZGRlZCI7aToxO30=', 1770581776),
('LcfY3qjcVM8TMrqkyGQnx20QMIt7aeQEiaRr7Cnv', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', 'YToyOntzOjk6Il9wcmV2aW91cyI7YToxOntzOjM6InVybCI7czoyODoiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2xvZ291dCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1770568211),
('rkjX1WpyeNbMDQcvFeeVxu8D3HQN7K3Rk7Z4oqXJ', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', 'YToyOntzOjk6Il9wcmV2aW91cyI7YToxOntzOjM6InVybCI7czoyODoiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2xvZ291dCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1770568264),
('UG1S4ac96IyJmRWCcrG0cXU43PV8KXqQSdIJcMO9', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36', 'YToyOntzOjk6Il9wcmV2aW91cyI7YToxOntzOjM6InVybCI7czozOToiaHR0cDovL2xvY2FsaG9zdC9wcm9qZWN0Mi9wdWJsaWMvbG9nb3V0Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1770497382);

-- --------------------------------------------------------

--
-- Table structure for table `syllabi`
--

CREATE TABLE `syllabi` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `instructor` varchar(255) NOT NULL,
  `degree` varchar(255) NOT NULL,
  `program` varchar(255) NOT NULL,
  `class` varchar(255) NOT NULL,
  `upload_image` varchar(255) NOT NULL,
  `added_from` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `teacher__attendances`
--

CREATE TABLE `teacher__attendances` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `teacher_id` varchar(255) NOT NULL,
  `in_time` varchar(255) NOT NULL,
  `out_time` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `attendance_status` varchar(255) NOT NULL,
  `added_from` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `teacher__salaries`
--

CREATE TABLE `teacher__salaries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `voucher_number` varchar(255) NOT NULL,
  `voucher_date` varchar(255) NOT NULL,
  `month` varchar(255) NOT NULL,
  `teacher_id` varchar(255) NOT NULL,
  `designation` varchar(255) NOT NULL,
  `payment_method` varchar(255) NOT NULL,
  `from_date` varchar(255) NOT NULL,
  `to_date` varchar(255) NOT NULL,
  `present` varchar(255) NOT NULL,
  `absent` varchar(255) NOT NULL,
  `net_salary` varchar(255) NOT NULL,
  `academy_expences` varchar(255) NOT NULL,
  `added_from` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `test__schedules`
--

CREATE TABLE `test__schedules` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `instructor` varchar(255) DEFAULT NULL,
  `degree` varchar(255) DEFAULT NULL,
  `program` varchar(255) DEFAULT NULL,
  `class` varchar(255) DEFAULT NULL,
  `book` varchar(255) DEFAULT NULL,
  `batch` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `added_from` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `test__schedules`
--

INSERT INTO `test__schedules` (`id`, `instructor`, `degree`, `program`, `class`, `book`, `batch`, `date`, `added_from`, `created_at`, `updated_at`) VALUES
(1, '7', '1', '2', 'Physics', NULL, NULL, '2023-11-30', '7', '2023-12-07 00:53:34', '2023-12-07 00:53:34'),
(2, '7', '1', '1', 'Physics', NULL, NULL, '2023-11-30', '7', '2023-12-07 00:54:04', '2023-12-07 00:54:04'),
(3, '6', '1', '1', 'Economics', NULL, NULL, '2023-11-30', '6', '2023-12-07 00:54:23', '2023-12-07 00:54:23'),
(4, '6', '1', '2', 'Economics', NULL, NULL, '2023-11-30', '6', '2023-12-07 00:54:42', '2023-12-07 00:54:42'),
(5, '6', '1', '1', 'General Mathematics', NULL, NULL, '2023-12-04', '6', '2023-12-07 00:55:31', '2023-12-07 00:55:31'),
(6, '6', '1', '2', 'General Mathematics', NULL, NULL, '2023-12-04', '6', '2023-12-07 00:55:51', '2023-12-07 00:55:51'),
(7, '7', '1', '1', 'Mathematics', NULL, NULL, '2023-12-04', '7', '2023-12-07 00:56:22', '2023-12-07 00:56:22'),
(8, '7', '1', '2', 'Mathematics', NULL, NULL, '2023-12-04', '7', '2023-12-07 00:56:42', '2023-12-07 00:56:42'),
(9, '10', '1', '1', 'Chemistry', NULL, NULL, '2023-12-07', '10', '2023-12-07 00:57:04', '2023-12-07 00:57:04'),
(10, '10', '1', '2', 'Chemistry', NULL, NULL, '2023-12-07', '10', '2023-12-07 00:57:23', '2023-12-07 00:57:23'),
(11, '6', '1', '2', 'General Science', NULL, NULL, '2023-12-07', '6', '2023-12-07 00:57:49', '2023-12-07 00:57:49'),
(12, '7', '1', '1', 'Physics', NULL, NULL, '2023-12-30', '7', '2023-12-14 13:46:40', '2023-12-14 13:46:40');

-- --------------------------------------------------------

--
-- Table structure for table `time__tables`
--

CREATE TABLE `time__tables` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `instructor` varchar(255) NOT NULL,
  `degree` varchar(255) NOT NULL,
  `program` varchar(255) NOT NULL,
  `class` varchar(255) NOT NULL,
  `book` varchar(255) NOT NULL,
  `batch` varchar(255) NOT NULL,
  `day` varchar(255) NOT NULL,
  `start_time` varchar(255) NOT NULL,
  `end_time` varchar(255) NOT NULL,
  `added_from` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `time__tables`
--

INSERT INTO `time__tables` (`id`, `instructor`, `degree`, `program`, `class`, `book`, `batch`, `day`, `start_time`, `end_time`, `added_from`, `created_at`, `updated_at`) VALUES
(2, '10', '1', '2', '2', 'Chemistry', 'NULL', 'a:5:{i:0;s:6:\"monday\";i:1;s:7:\"tuesday\";i:2;s:9:\"wednesday\";i:3;s:8:\"thursday\";i:4;s:6:\"friday\";}', '16:00 PM', '16:30 PM', '1', '2023-11-28 12:59:47', '2023-11-28 13:19:50'),
(4, '7', '1', '1', '1', 'Physics', 'NULL', 'a:5:{i:0;s:6:\"monday\";i:1;s:7:\"tuesday\";i:2;s:9:\"wednesday\";i:3;s:8:\"thursday\";i:4;s:6:\"friday\";}', '16:00 PM', '16:30 PM', '1', '2023-11-28 13:21:42', '2023-11-28 13:21:42'),
(5, '7', '1', '1', '1', 'Mathematics', 'NULL', 'a:5:{i:0;s:6:\"monday\";i:1;s:7:\"tuesday\";i:2;s:9:\"wednesday\";i:3;s:8:\"thursday\";i:4;s:6:\"friday\";}', '16:30 PM', '17:00 PM', '1', '2023-11-28 13:23:29', '2023-11-28 13:23:29'),
(6, '6', '1', '2', '2', 'Computer Science', 'NULL', 'a:5:{i:0;s:6:\"monday\";i:1;s:7:\"tuesday\";i:2;s:9:\"wednesday\";i:3;s:8:\"thursday\";i:4;s:6:\"friday\";}', '16:30 PM', '17:00 PM', '1', '2023-11-28 13:25:16', '2023-11-28 13:25:16'),
(7, '7', '1', '2', '2', 'Mathematics', 'NULL', 'a:5:{i:0;s:6:\"monday\";i:1;s:7:\"tuesday\";i:2;s:9:\"wednesday\";i:3;s:8:\"thursday\";i:4;s:6:\"friday\";}', '17:00 PM', '17:30 PM', '1', '2023-11-28 13:27:05', '2023-11-28 13:27:05'),
(8, '10', '1', '1', '1', 'Chemistry', 'NULL', 'a:5:{i:0;s:6:\"monday\";i:1;s:7:\"tuesday\";i:2;s:9:\"wednesday\";i:3;s:8:\"thursday\";i:4;s:6:\"friday\";}', '17:00 PM', '17:30 PM', '1', '2023-11-28 13:28:31', '2023-11-28 13:28:31'),
(9, '8', '2', '3', '3', 'English', 'NULL', 'a:5:{i:0;s:6:\"monday\";i:1;s:7:\"tuesday\";i:2;s:9:\"wednesday\";i:3;s:8:\"thursday\";i:4;s:6:\"friday\";}', '17:00 PM', '17:30 PM', '1', '2023-11-28 13:30:17', '2023-11-28 13:30:17'),
(10, '9', '1', '1', '1', 'Urdu', 'NULL', 'a:3:{i:0;s:6:\"monday\";i:1;s:7:\"tuesday\";i:2;s:9:\"wednesday\";}', '17:30 PM', '18:00 PM', '1', '2023-11-28 13:32:32', '2023-11-28 13:32:32'),
(11, '9', '1', '1', '1', 'Islamiyat', 'NULL', 'a:2:{i:0;s:8:\"thursday\";i:1;s:6:\"friday\";}', '17:30 PM', '18:00 PM', '1', '2023-11-28 13:33:32', '2023-11-28 13:33:32'),
(12, '7', '1', '2', '2', 'Physics', 'NULL', 'a:5:{i:0;s:6:\"monday\";i:1;s:7:\"tuesday\";i:2;s:9:\"wednesday\";i:3;s:8:\"thursday\";i:4;s:6:\"friday\";}', '17:30 PM', '18:00 PM', '1', '2023-11-28 13:37:42', '2023-11-28 13:37:42'),
(13, '6', '2', '3', '3', 'Computer Science', 'NULL', 'a:5:{i:0;s:6:\"monday\";i:1;s:7:\"tuesday\";i:2;s:9:\"wednesday\";i:3;s:8:\"thursday\";i:4;s:6:\"friday\";}', '17:30 PM', '18:00 PM', '1', '2023-11-28 13:40:16', '2023-11-28 13:40:16'),
(14, '6', '1', '1', '1', 'Computer Science', 'NULL', 'a:5:{i:0;s:6:\"monday\";i:1;s:7:\"tuesday\";i:2;s:9:\"wednesday\";i:3;s:8:\"thursday\";i:4;s:6:\"friday\";}', '18:00 PM', '18:30 PM', '1', '2023-11-28 13:43:37', '2023-11-28 13:43:37'),
(15, '8', '1', '2', '2', 'English', 'NULL', 'a:3:{i:0;s:6:\"monday\";i:1;s:7:\"tuesday\";i:2;s:9:\"wednesday\";}', '18:00 PM', '18:30 PM', '1', '2023-11-28 13:47:39', '2023-11-28 13:47:39'),
(16, '8', '1', '2', '2', 'Pakistan Studies', 'NULL', 'a:2:{i:0;s:8:\"thursday\";i:1;s:6:\"friday\";}', '18:00 PM', '18:30 PM', '1', '2023-11-28 13:49:16', '2023-11-28 13:49:16'),
(17, '7', '2', '3', '3', 'Physics', 'NULL', 'a:5:{i:0;s:6:\"monday\";i:1;s:7:\"tuesday\";i:2;s:9:\"wednesday\";i:3;s:8:\"thursday\";i:4;s:6:\"friday\";}', '18:00 PM', '18:30 PM', '1', '2023-11-28 13:51:08', '2023-11-28 13:51:08'),
(18, '10', '2', '4', '4', 'Chemistry', 'NULL', 'a:5:{i:0;s:6:\"monday\";i:1;s:7:\"tuesday\";i:2;s:9:\"wednesday\";i:3;s:8:\"thursday\";i:4;s:6:\"friday\";}', '18:00 PM', '18:30 PM', '1', '2023-11-28 13:53:23', '2023-11-28 13:53:23'),
(19, '8', '1', '1', '1', 'English', 'NULL', 'a:3:{i:0;s:6:\"monday\";i:1;s:7:\"tuesday\";i:2;s:9:\"wednesday\";}', '18:30 PM', '19:00 PM', '1', '2023-11-28 13:56:27', '2023-11-28 13:56:27'),
(20, '8', '1', '1', '1', 'Pakistan Studies', 'NULL', 'a:2:{i:0;s:8:\"thursday\";i:1;s:6:\"friday\";}', '18:30 PM', '19:00 PM', '1', '2023-11-28 13:57:30', '2023-11-28 14:06:37'),
(21, '9', '1', '2', '2', 'Urdu', 'NULL', 'a:3:{i:0;s:6:\"monday\";i:1;s:7:\"tuesday\";i:2;s:9:\"wednesday\";}', '18:30 PM', '19:00 PM', '1', '2023-11-28 14:08:37', '2023-11-28 14:08:37'),
(22, '9', '1', '2', '2', 'Islamiyat', 'NULL', 'a:2:{i:0;s:8:\"thursday\";i:1;s:6:\"friday\";}', '18:30 PM', '19:00 PM', '1', '2023-11-28 14:09:30', '2023-11-28 14:09:30'),
(23, '7', '2', '3', '3', 'Mathematics', 'NULL', 'a:5:{i:0;s:6:\"monday\";i:1;s:7:\"tuesday\";i:2;s:9:\"wednesday\";i:3;s:8:\"thursday\";i:4;s:6:\"friday\";}', '18:30 PM', '19:00 PM', '1', '2023-11-28 14:11:26', '2023-11-28 14:13:51'),
(24, '6', '2', '4', '4', 'Computer Science', 'NULL', 'a:5:{i:0;s:6:\"monday\";i:1;s:7:\"tuesday\";i:2;s:9:\"wednesday\";i:3;s:8:\"thursday\";i:4;s:6:\"friday\";}', '18:30 PM', '19:00 PM', '1', '2023-11-28 14:14:50', '2023-11-28 14:14:50'),
(25, '10', '2', '3', '3', 'Chemistry', 'NULL', 'a:5:{i:0;s:6:\"monday\";i:1;s:7:\"tuesday\";i:2;s:9:\"wednesday\";i:3;s:8:\"thursday\";i:4;s:6:\"friday\";}', '19:00 PM', '19:30 PM', '1', '2023-11-28 14:16:48', '2023-11-28 14:16:48'),
(26, '7', '2', '4', '4', 'Physics', 'NULL', 'a:5:{i:0;s:6:\"monday\";i:1;s:7:\"tuesday\";i:2;s:9:\"wednesday\";i:3;s:8:\"thursday\";i:4;s:6:\"friday\";}', '19:00 PM', '19:30 PM', '1', '2023-11-28 14:18:45', '2023-11-28 14:21:08'),
(27, '7', '2', '4', '4', 'Mathematics', 'NULL', 'a:5:{i:0;s:6:\"monday\";i:1;s:7:\"tuesday\";i:2;s:9:\"wednesday\";i:3;s:8:\"thursday\";i:4;s:6:\"friday\";}', '19:30 PM', '20:00 PM', '1', '2023-11-28 14:19:56', '2023-11-28 14:19:56');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `registeration_no` varchar(255) DEFAULT NULL,
  `degree` varchar(255) DEFAULT NULL,
  `program` varchar(255) DEFAULT NULL,
  `session` varchar(255) DEFAULT NULL,
  `class` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `father_name` varchar(255) DEFAULT NULL,
  `start_date` varchar(255) DEFAULT NULL,
  `cnic` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email_verified_at` varchar(255) DEFAULT NULL,
  `contact_no` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `date_of_birth` varchar(255) DEFAULT NULL,
  `student_status` varchar(255) DEFAULT NULL,
  `batch` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `guadian_name` varchar(255) DEFAULT NULL,
  `guadian_cnic` varchar(255) DEFAULT NULL,
  `guadian_number` varchar(255) DEFAULT NULL,
  `relation_guadian` varchar(255) DEFAULT NULL,
  `occupation` varchar(255) DEFAULT NULL,
  `deals` varchar(255) DEFAULT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `last_attended_class` varchar(255) DEFAULT NULL,
  `institute` varchar(255) DEFAULT NULL,
  `student_total_subjects` longtext DEFAULT NULL,
  `student_total_fee` varchar(255) DEFAULT NULL,
  `student_discount_fee` varchar(255) DEFAULT NULL,
  `student_after_discount_fee` varchar(255) DEFAULT NULL,
  `total_marks` varchar(255) DEFAULT NULL,
  `obt_marks` varchar(255) DEFAULT NULL,
  `percentage` varchar(255) DEFAULT NULL,
  `year` varchar(255) DEFAULT NULL,
  `sibling_name` varchar(255) DEFAULT NULL,
  `sibling_class` varchar(255) DEFAULT NULL,
  `sibling_institute` varchar(255) DEFAULT NULL,
  `profession` varchar(255) DEFAULT NULL,
  `organization` varchar(255) DEFAULT NULL,
  `is_active` varchar(255) DEFAULT NULL,
  `enrollment` varchar(255) DEFAULT NULL,
  `permanent` varchar(255) DEFAULT NULL,
  `contract` varchar(255) DEFAULT NULL,
  `teacher_degree` varchar(255) DEFAULT NULL,
  `teacher_percentage` varchar(255) DEFAULT NULL,
  `teacher_program` varchar(255) DEFAULT NULL,
  `teacher_degree_status` varchar(255) DEFAULT NULL,
  `teacher_university` varchar(255) DEFAULT NULL,
  `teacher_year` varchar(255) DEFAULT NULL,
  `teacher_professional_field` longtext DEFAULT NULL,
  `teacher_experience` varchar(255) DEFAULT NULL,
  `teacher_picture` varchar(255) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `enter_type` varchar(255) DEFAULT NULL COMMENT '1 = student, 2 = query, 3 = teacher, 4 = staff',
  `added_from` varchar(255) DEFAULT NULL,
  `is_email_verified` varchar(255) DEFAULT NULL,
  `emailToken` varchar(255) DEFAULT NULL,
  `reset_token` varchar(255) DEFAULT NULL,
  `role_assign` varchar(255) DEFAULT NULL,
  `fees_paid_status` varchar(255) DEFAULT NULL,
  `fees_giving_date` varchar(255) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `registeration_no`, `degree`, `program`, `session`, `class`, `name`, `father_name`, `start_date`, `cnic`, `email`, `password`, `email_verified_at`, `contact_no`, `gender`, `date_of_birth`, `student_status`, `batch`, `address`, `guadian_name`, `guadian_cnic`, `guadian_number`, `relation_guadian`, `occupation`, `deals`, `designation`, `last_attended_class`, `institute`, `student_total_subjects`, `student_total_fee`, `student_discount_fee`, `student_after_discount_fee`, `total_marks`, `obt_marks`, `percentage`, `year`, `sibling_name`, `sibling_class`, `sibling_institute`, `profession`, `organization`, `is_active`, `enrollment`, `permanent`, `contract`, `teacher_degree`, `teacher_percentage`, `teacher_program`, `teacher_degree_status`, `teacher_university`, `teacher_year`, `teacher_professional_field`, `teacher_experience`, `teacher_picture`, `description`, `enter_type`, `added_from`, `is_email_verified`, `emailToken`, `reset_token`, `role_assign`, `fees_paid_status`, `fees_giving_date`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, NULL, NULL, NULL, NULL, NULL, 'admin', 'ADMIN', NULL, '98765-4321098-7', 'admin@example.com', '$2y$10$zwc/jGe/VgKgJgss3kM8yebIh/OV1RgzVWvEMjpxMKX5mivF2qk0G', '2023-11-16 03:55:26', '0312-74829332', 'Male', '01,Oct,2000', NULL, NULL, 'pqr', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, '1', NULL, NULL, 'Admin', NULL, NULL, NULL, '2023-11-16 11:55:26', '2023-11-22 10:09:06'),
(6, '1', NULL, 'a:7:{i:0;s:1:\"8\";i:1;s:1:\"7\";i:2;s:1:\"5\";i:3;s:1:\"4\";i:4;s:1:\"3\";i:5;s:1:\"2\";i:6;s:1:\"1\";}', NULL, 'a:4:{i:0;s:1:\"6\";i:1;s:1:\"4\";i:2;s:1:\"2\";i:3;s:1:\"1\";}', 'dummy teacher', 'dummy', NULL, '12345-6789012-3', 'teacher@example.com', '$2y$10$pHIKs74Ahl0dsgI65oosB.seHQ1B5DnI/8ftTLZFmQwKkC7eBh2lG', '2023-11-16 10:02:38', '+92-3212345678', 'Male', NULL, NULL, NULL, 'abc', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', 'permanent', NULL, NULL, 'Bachelors', '0.65', NULL, 'complete', 'XYZ', NULL, 'a:6:{i:0;s:19:\"General Mathematics\";i:1;s:9:\"Economics\";i:2;s:15:\"General Science\";i:3;s:16:\"Computer Science\";i:4;s:18:\"Junior Mathematics\";i:5;s:15:\"Computer Course\";}', '5 years', '15702.png', 'I am passionate about inspiring the next generation of scientists. My dynamic teaching style emphasizes hands-on experimentation, real-world applications, and collaborative learning. I strive to create an environment that nurtures curiosity, critical thinking, and a genuine love for the subject matter.', '3', '1', '1', NULL, NULL, 'Teacher', NULL, NULL, NULL, '2023-11-16 09:02:38', '2026-02-08 15:16:15'),
(14, '1', '1', '2', 'Evening', '2', 'dummy student', 'dummy', NULL, NULL, 'Student@example.com', '$2y$10$i2pvZE1zZb9b0ZUrlJrxeOV0KhE2MO.ZIJmf1PvkGGWAp1TOEeb/6', '2023-11-16 20:02:05', '+92-3123456789', 'Female', NULL, 'Old', '2023-2024', 'xyz', 'dummy', NULL, '+92-3123456789', 'Father', 'abc', NULL, NULL, NULL, NULL, 'a:4:{s:15:\"dummy student_0\";s:11:\"Mathematics\";s:15:\"dummy student_1\";s:7:\"Physics\";s:15:\"dummy student_2\";s:9:\"Chemistry\";s:15:\"dummy student_3\";s:7:\"Biology\";}', '14000', '6000', '8000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '42084.jpeg', '', '1', '1', '1', NULL, NULL, 'Student', '0', NULL, NULL, '2023-11-16 15:02:05', '2023-12-15 06:38:23');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `assignments`
--
ALTER TABLE `assignments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `attendances`
--
ALTER TABLE `attendances`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `classes_classes_name_unique` (`classes_name`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `courses_course_title_unique` (`course_title`);

--
-- Indexes for table `day__books`
--
ALTER TABLE `day__books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `day__book__categories`
--
ALTER TABLE `day__book__categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `degrees`
--
ALTER TABLE `degrees`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `degrees_degree_name_unique` (`degree_name`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `fees`
--
ALTER TABLE `fees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fee__reminders`
--
ALTER TABLE `fee__reminders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `holidays__reminders`
--
ALTER TABLE `holidays__reminders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leaves`
--
ALTER TABLE `leaves`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `materials`
--
ALTER TABLE `materials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notices`
--
ALTER TABLE `notices`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `programs`
--
ALTER TABLE `programs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `programs_program_name_unique` (`program_name`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `syllabi`
--
ALTER TABLE `syllabi`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teacher__attendances`
--
ALTER TABLE `teacher__attendances`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teacher__salaries`
--
ALTER TABLE `teacher__salaries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `test__schedules`
--
ALTER TABLE `test__schedules`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `time__tables`
--
ALTER TABLE `time__tables`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_password_unique` (`password`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `assignments`
--
ALTER TABLE `assignments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `attendances`
--
ALTER TABLE `attendances`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `classes`
--
ALTER TABLE `classes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `day__books`
--
ALTER TABLE `day__books`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `day__book__categories`
--
ALTER TABLE `day__book__categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `degrees`
--
ALTER TABLE `degrees`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fees`
--
ALTER TABLE `fees`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fee__reminders`
--
ALTER TABLE `fee__reminders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `holidays__reminders`
--
ALTER TABLE `holidays__reminders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `leaves`
--
ALTER TABLE `leaves`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `materials`
--
ALTER TABLE `materials`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `notices`
--
ALTER TABLE `notices`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `programs`
--
ALTER TABLE `programs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `syllabi`
--
ALTER TABLE `syllabi`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `teacher__attendances`
--
ALTER TABLE `teacher__attendances`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `teacher__salaries`
--
ALTER TABLE `teacher__salaries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `test__schedules`
--
ALTER TABLE `test__schedules`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `time__tables`
--
ALTER TABLE `time__tables`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
