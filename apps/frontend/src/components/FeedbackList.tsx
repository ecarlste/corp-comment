import FeedbackListItem from "./FeedbackListItem";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import { useFeedbackItemsStore } from "../stores/feedbackItemsStore";
import { useShallow } from "zustand/shallow";

function FeedbackList() {
  const isLoading = useFeedbackItemsStore((state) => state.isLoading);
  const errorMessage = useFeedbackItemsStore((state) => state.errorMessage);
  const filteredFeedbackItems = useFeedbackItemsStore(
    useShallow((state) => state.getFilteredFeedbackItems())
  );

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}

      {errorMessage && <ErrorMessage message={errorMessage} />}

      {filteredFeedbackItems.map((feedbackItem) => (
        <FeedbackListItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}

export default FeedbackList;
