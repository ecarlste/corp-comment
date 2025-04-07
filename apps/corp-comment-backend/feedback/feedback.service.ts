import { CreateFeedbackDto, FeedbackDto } from "./feedback.interface";
import { db } from "./feedback.db";
import { feedbackTable } from "./feedback.schema";

export const FeedbackService = {
  create: async (feedback: CreateFeedbackDto): Promise<FeedbackDto> => {
    const [createdFeedback] = await db
      .insert(feedbackTable)
      .values(feedback)
      .returning();

    return createdFeedback;
  },
};
