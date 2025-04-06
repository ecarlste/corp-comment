import { TriangleUpIcon } from "@radix-ui/react-icons";
import { FeedbackItem } from "../lib/types";

type FeedbackListItemProps = {
  feedbackItem: FeedbackItem;
};

function FeedbackListItem({ feedbackItem }: FeedbackListItemProps) {
  return (
    <li className="feedback">
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
