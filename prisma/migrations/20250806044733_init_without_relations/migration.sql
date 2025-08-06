/*
  Warnings:

  - You are about to drop the column `tagId` on the `Link` table. All the data in the column will be lost.
  - Added the required column `tags` to the `Link` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Link" DROP CONSTRAINT "Link_tagId_fkey";

-- AlterTable
ALTER TABLE "public"."Link" DROP COLUMN "tagId",
ADD COLUMN     "tags" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Tag" ADD COLUMN     "link" TEXT;
