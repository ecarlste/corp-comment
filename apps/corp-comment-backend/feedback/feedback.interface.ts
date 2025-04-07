export type FeedbackDto = {
  id: string;
  upvoteCount: number;
  badgeLetter: string;
  companyName: string;
  feedbackText: string;
  createdAt: Date;
  updatedAt: Date | null;
};

export type FeedbackResponse = {
  feedback: FeedbackDto;
};

export type FeedbackListResponse = {
  feedbacks: FeedbackDto[];
};

export type CreateFeedbackDto = Omit<
  FeedbackDto,
  "id" | "upvoteCount" | "createdAt" | "updatedAt"
>;
