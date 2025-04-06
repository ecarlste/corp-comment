import FeedbackListItem from "./FeedbackListItem";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import { FeedbackItem } from "../lib/types";

type FeedbackListProps = {
  feedbackItems: FeedbackItem[];
  isLoading: boolean;
  errorMessage?: string;
};

function FeedbackList({
  feedbackItems,
  isLoading,
  errorMessage,
}: FeedbackListProps) {
  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}

      {errorMessage && <ErrorMessage message={errorMessage} />}

      {feedbackItems.map((feedbackItem) => (
        <FeedbackListItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}

export default FeedbackList;
