/* mysql -u root < [このファイル] */
CREATE DATABASE kemono_development CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'kemono_development'@'localhost' IDENTIFIED BY 'password';
GRANT ALL ON kemono_development.* TO 'kemono_development'@'localhost';
