/*
  Warnings:

  - Added the required column `banner` to the `movies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `movies` ADD COLUMN `banner` VARCHAR(191) NOT NULL;
