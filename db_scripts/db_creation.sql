CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `first_name` varchar(255),
  `last_name_f` varchar(255),
  `last_name_m` varchar(255),
  `mail` varchar(255),
  `phone` varchar(255),
  `password` varchar(255),
  `password_recovery_code` varchar(255),
  `created_at` timestamp,
  `modified_at` timestamp,
  `address` varchar(255),
  `status` ENUM ('active', 'inactive', 'deleted'),
  `rol` ENUM ('buyer', 'seller')
);

CREATE TABLE `stores` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `address` varchar(255),
  `created_at` varchar(255),
  `modified_at` varchar(255),
  `status` char
);

CREATE TABLE `categories` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255)
);

CREATE TABLE `products` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `description` varchar(255),
  `created_at` varchar(255),
  `modified_at` varchar(255),
  `brand` varchar(255),
  `category_id` int
);

CREATE TABLE `stocks` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `store_id` int,
  `product_id` int,
  `size` varchar(255),
  `color` varchar(255),
  `price` float,
  `quantity` int,
  `status` ENUM ('active', 'inactive', 'deleted'),
  `created_at` varchar(255),
  `modified_at` varchar(255)
);

ALTER TABLE `products` ADD FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

ALTER TABLE `stocks` ADD FOREIGN KEY (`store_id`) REFERENCES `stores` (`id`);

ALTER TABLE `stocks` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);
