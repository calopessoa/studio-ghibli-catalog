/*
  Warnings:

  - Made the column `description` on table `movies` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `movies` MODIFY `description` LONGTEXT NOT NULL;
