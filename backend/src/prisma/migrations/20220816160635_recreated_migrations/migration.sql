-- CreateTable
CREATE TABLE "movies" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "banner" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "directorId" TEXT NOT NULL,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "directors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "directors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "producers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "producers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "moviesOnProducers" (
    "movieId" TEXT NOT NULL,
    "producerId" TEXT NOT NULL,

    CONSTRAINT "moviesOnProducers_pkey" PRIMARY KEY ("movieId","producerId")
);

-- AddForeignKey
ALTER TABLE "movies" ADD CONSTRAINT "movies_directorId_fkey" FOREIGN KEY ("directorId") REFERENCES "directors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "moviesOnProducers" ADD CONSTRAINT "moviesOnProducers_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "moviesOnProducers" ADD CONSTRAINT "moviesOnProducers_producerId_fkey" FOREIGN KEY ("producerId") REFERENCES "producers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
