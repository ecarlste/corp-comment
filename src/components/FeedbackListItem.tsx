import { TriangleUpIcon } from "@radix-ui/react-icons";
import { FeedbackItem } from "../lib/types";
import { useState } from "react";

type FeedbackListItemProps = {
  feedbackItem: FeedbackItem;
};

function FeedbackListItem({ feedbackItem }: FeedbackListItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      onClick={() => setIsOpen((prev) => !prev)}
      className={`feedback ${isOpen ? "feedback--expand" : ""}`}
    >
      <button>
        <TriangleUpIcon />
        <span>{feedbackItem.upvoteCount}</span>
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
