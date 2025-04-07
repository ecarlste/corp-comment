CREATE TABLE "feedback" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"upvote_count" integer DEFAULT 0 NOT NULL,
	"badge_letter" text NOT NULL,
	"company_name" text NOT NULL,
	"feedback_text" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT null
);
