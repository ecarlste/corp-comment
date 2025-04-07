import { TriangleUpIcon } from "@radix-ui/react-icons";
import { FeedbackItem } from "../lib/types";
import { MouseEvent, useState } from "react";

type FeedbackListItemProps = {
  feedbackItem: FeedbackItem;
};

function FeedbackListItem({ feedbackItem }: FeedbackListItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(feedbackItem.upvoteCount);

  const handleUpvote = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setUpvoteCount((prev) => ++prev);
    event.currentTarget.disabled = true;
  };

  return (
    <li
      onClick={() => setIsOpen((prev) => !prev)}
      className={`feedback ${isOpen ? "feedback--expand" : ""}`}
    >
      <button onClick={handleUpvote}>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>

      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>

      <div>
        <p>{feedbackItem.company}</p>
        <p>{feedbackItem.text}</p>
      </div>

      <p>{feedbackItem.daysAgo === 0 ? "NEW" : `${feedbackItem.daysAgo}d`}</p>
    </li>
  );
}

export default FeedbackListItem;
