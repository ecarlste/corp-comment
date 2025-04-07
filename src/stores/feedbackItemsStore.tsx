import { create } from "zustand";
import { FeedbackItem } from "../lib/types";

type FeedbackItemsStoreState = {
  feedbackItems: FeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
  selectedCompany: string;
  companyList: string[];
};

type FeedbackItemsStoreActions = {
  getFilteredFeedbackItems: () => FeedbackItem[];
  addItemToList: (text: string) => Promise<void>;
  selectCompany: (company: string) => void;
  fetchFeedbackItems: () => Promise<void>;
};

type FeedbackItemsStore = FeedbackItemsStoreState & FeedbackItemsStoreActions;

export const useFeedbackItemsStore = create<FeedbackItemsStore>((set, get) => ({
  feedbackItems: [],
  isLoading: false,
  errorMessage: "",
  selectedCompany: "",
  companyList: [],

  getFilteredFeedbackItems: () => {
    const { feedbackItems, selectedCompany } = get();

    return selectedCompany === ""
      ? feedbackItems
      : feedbackItems.filter((item) => item.company === selectedCompany);
  },

  addItemToList: async (text: string) => {
    const company = text
      .split(" ")
      .find((word) => word.startsWith("#"))
      ?.substring(1);

    const newFeedbackItem: FeedbackItem = {
      id: new Date().getTime().toString(),
      upvoteCount: 0,
      badgeLetter: company?.substring(0, 1).toUpperCase() || "",
      company: company || "Unknown",
      text,
      daysAgo: 0,
    };

    set((state) => ({
      feedbackItems: [...state.feedbackItems, newFeedbackItem],
    }));

    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        body: JSON.stringify(newFeedbackItem),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
  },

  selectCompany: (company: string) => {
    set(() => ({
      selectedCompany: company,
    }));
  },

  fetchFeedbackItems: async () => {
    set(() => ({ isLoading: true }));

    try {
      const response = await fetch(
        "http://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
      );

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();

      set(() => ({
        feedbackItems: data.feedbacks,
        errorMessage: "",
        companyList: Array.from(
          new Set(
            data.feedbacks.map((feedback: FeedbackItem) => feedback.company)
          )
        ),
      }));
    } catch {
      set(() => ({
        errorMessage: "Something went wrong.",
      }));
    } finally {
      set(() => ({ isLoading: false }));
    }
  },
}));
