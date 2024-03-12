/*
  Warnings:

  - You are about to drop the column `description` on the `Request` table. All the data in the column will be lost.
  - Added the required column `dangerClass` to the `Request` table without a default value. This is not possible if the table is not empty.
  - Added the required column `distance` to the `Request` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Request` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Request" DROP COLUMN "description",
ADD COLUMN     "dangerClass" TEXT NOT NULL,
ADD COLUMN     "distance" TEXT NOT NULL,
ADD COLUMN     "value" TEXT NOT NULL,
ADD COLUMN     "weight" TEXT NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'Ожидание';
