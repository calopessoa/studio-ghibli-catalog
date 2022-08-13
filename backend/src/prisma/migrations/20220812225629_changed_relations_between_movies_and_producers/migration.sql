/*
  Warnings:

  - You are about to drop the `Director` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Movie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Producer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Movie` DROP FOREIGN KEY `Movie_directorId_fkey`;

-- DropForeignKey
ALTER TABLE `Movie` DROP FOREIGN KEY `Movie_producerId_fkey`;

-- DropTable
DROP TABLE `Director`;

-- DropTable
DROP TABLE `Movie`;

-- DropTable
DROP TABLE `Producer`;

-- CreateTable
CREATE TABLE `movies` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `description` VARCHAR(191) NULL,
    `directorId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `directors` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `producers` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `moviesOnProducers` (
    `movieId` VARCHAR(191) NOT NULL,
    `producerId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`movieId`, `producerId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `movies` ADD CONSTRAINT `movies_directorId_fkey` FOREIGN KEY (`directorId`) REFERENCES `directors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `moviesOnProducers` ADD CONSTRAINT `moviesOnProducers_movieId_fkey` FOREIGN KEY (`movieId`) REFERENCES `movies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `moviesOnProducers` ADD CONSTRAINT `moviesOnProducers_producerId_fkey` FOREIGN KEY (`producerId`) REFERENCES `producers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
