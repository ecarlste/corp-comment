import { api } from "encore.dev/api";
import { CreateFeedbackDto, FeedbackResponse } from "./feedback.interface";
import { FeedbackService } from "./feedback.service";

export const create = api<CreateFeedbackDto, FeedbackResponse>(
  { expose: true, method: "POST", path: "/feedback" },
  async (data: CreateFeedbackDto) => {
    const feedback = await FeedbackService.create(data);

    return { feedback };
  }
);
