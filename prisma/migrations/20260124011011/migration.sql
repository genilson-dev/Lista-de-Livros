/*
  Warnings:

  - You are about to drop the column `autorId` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `books` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `authors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdById` to the `books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "books" DROP CONSTRAINT "books_authorId_fkey";

-- DropForeignKey
ALTER TABLE "books" DROP CONSTRAINT "books_autorId_fkey";

-- AlterTable
ALTER TABLE "authors" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "books" DROP COLUMN "autorId",
DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "createdById" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- DropEnum
DROP TYPE "Author";

-- DropEnum
DROP TYPE "Books";

-- DropEnum
DROP TYPE "Role";

-- DropEnum
DROP TYPE "Status";

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "authors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
