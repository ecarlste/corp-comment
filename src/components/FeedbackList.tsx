import { FeedbackItem } from "../lib/types";
import FeedbackListItem from "./FeedbackListItem";
import { useEffect, useState } from "react";

function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
      );
      const data = await response.json();
      setFeedbackItems(data.feedbacks);
    };

    fetchData();
  }, []);

  return (
    <ol className="feedback-list">
      {feedbackItems.map((feedbackItem) => (
        <FeedbackListItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}

export default FeedbackList;
