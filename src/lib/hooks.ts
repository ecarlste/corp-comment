import { useEffect, useState } from "react";
import { FeedbackItem } from "./types";

export function useFeedbackItems() {
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItem[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          "http://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();

        setFeedbackItems(data.feedbacks);
      } catch {
        setErrorMessage("Something went wrong.");
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return {
    feedbackItems,
    setFeedbackItems,
    errorMessage,
    isLoading,
  };
}
