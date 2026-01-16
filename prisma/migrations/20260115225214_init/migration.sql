-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateEnum
CREATE TYPE "Author" AS ENUM ('id', 'name', 'bio', 'created_at', 'updated_at');

-- CreateEnum
CREATE TYPE "Books" AS ENUM ('id', 'title', 'content', 'published', 'createdAt', 'updatedAt', 'authorId', 'autorId');
