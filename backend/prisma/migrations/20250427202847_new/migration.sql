-- CreateTable
CREATE TABLE "User" (
    "firebase_uid" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "auth_provider" TEXT NOT NULL DEFAULT 'email',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("firebase_uid")
);

-- CreateTable
CREATE TABLE "UserProfile" (
    "firebase_uid" TEXT NOT NULL,
    "what_you_want_to_do" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT,
    "age" INTEGER,
    "gender" TEXT,
    "height" INTEGER,
    "contacts" JSONB,
    "photos" JSONB,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("firebase_uid")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_firebase_uid_fkey" FOREIGN KEY ("firebase_uid") REFERENCES "User"("firebase_uid") ON DELETE CASCADE ON UPDATE CASCADE;
