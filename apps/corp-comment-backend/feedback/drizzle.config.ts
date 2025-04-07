import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "feedback/migrations",
  schema: "feedback/feedback.schema.ts",
  dialect: "postgresql",
});
