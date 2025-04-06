import FeedbackListItem from "./FeedbackListItem";

function FeedbackList() {
  return (
    <ol className="feedback-list">
      <FeedbackListItem />
      <FeedbackListItem />
      <FeedbackListItem />
    </ol>
  );
}

export default FeedbackList;
