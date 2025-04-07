import { v4 as uuidv4 } from "uuid";
import { CreateFeedbackDto, FeedbackDto } from "./feedback.interface";

export const FeedbackService = {
  create: (feedback: CreateFeedbackDto): FeedbackDto => {
    const newFeedback: FeedbackDto = {
      ...feedback,
      id: uuidv4(),
      upvoteCount: 0,
      createdAt: new Date(),
      updatedAt: null,
    };

    return newFeedback;
  },
};
