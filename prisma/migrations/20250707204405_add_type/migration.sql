/*
  Warnings:

  - Added the required column `type` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TYPE" AS ENUM ('TEAM', 'CLUB', 'REGION');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "type" "TYPE" NOT NULL;
