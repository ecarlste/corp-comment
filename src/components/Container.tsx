import { FeedbackItem } from "../lib/types";
import FeedbackList from "./FeedbackList";
import Header from "./Header";

type ContainerProps = {
  feedbackItems: FeedbackItem[];
  handleAddToList: (text: string) => void;
  isLoading: boolean;
  errorMessage?: string;
};

function Container({
  feedbackItems,
  handleAddToList,
  isLoading,
  errorMessage,
}: ContainerProps) {
  return (
    <div className="container">
      <Header handleAddToList={handleAddToList} />
      <FeedbackList
        feedbackItems={feedbackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
    </div>
  );
}

export default Container;
