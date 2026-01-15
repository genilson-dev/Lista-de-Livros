/*
  Warnings:

  - You are about to drop the `autors` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "books" DROP CONSTRAINT "books_autorId_fkey";

-- DropTable
DROP TABLE "autors";

-- CreateTable
CREATE TABLE "authors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT,

    CONSTRAINT "authors_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "authors"("id") ON DELETE SET NULL ON UPDATE CASCADE;
