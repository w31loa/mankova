-- AlterTable
ALTER TABLE "Request" ADD COLUMN     "request_from" TEXT NOT NULL DEFAULT '_',
ADD COLUMN     "request_to" TEXT NOT NULL DEFAULT '_';
