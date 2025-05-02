CREATE TABLE "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"clerkId" text NOT NULL,
	"email" text NOT NULL,
	"name" text NOT NULL,
	"handle" text NOT NULL,
	"avatarUrl" text,
	"bio" text,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX "Post_name_idx" ON "posts" USING btree ("name");--> statement-breakpoint
CREATE INDEX "User_email_idx" ON "users" USING btree ("email");