import { sql } from "drizzle-orm";
import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const feedbackTable = pgTable("feedback", {
  id: uuid("id").primaryKey().defaultRandom(),
  upvoteCount: integer("upvote_count").notNull().default(0),
  badgeLetter: text("badge_letter").notNull(),
  companyName: text("company_name").notNull(),
  feedbackText: text("feedback_text").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .default(sql`null`)
    .$onUpdate(() => new Date()),
});
