import { FeedbackItem } from "../lib/types";
import FeedbackListItem from "./FeedbackListItem";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          "http://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );
        const data = await response.json();

        setFeedbackItems(data.feedbacks);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {feedbackItems.map((feedbackItem) => (
        <FeedbackListItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}

export default FeedbackList;
