-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "certificate_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "roll_number" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "team_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_certificate_id_key" ON "User"("certificate_id");

-- CreateIndex
CREATE INDEX "idx_user_certificate_id" ON "User"("certificate_id");
