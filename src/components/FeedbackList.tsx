import { v4 as uuidv4 } from "uuid";
import { FeedbackItem } from "../lib/types";
import FeedbackListItem from "./FeedbackListItem";

const feedbackItemList: FeedbackItem[] = [
  {
    id: uuidv4(),
    upvoteCount: 423,
    badgeLetter: "G",
    companyName: "Google",
    text: "The #Google guys are amazing! I love their service and the support is top-notch.",
    daysAgo: 4,
  },
  {
    id: uuidv4(),
    upvoteCount: 596,
    badgeLetter: "S",
    companyName: "Starbucks",
    text: "I had a great experience with #Starbucks. Their coffee is fantastic and the staff are friendly.",
    daysAgo: 3,
  },
];

function FeedbackList() {
  return (
    <ol className="feedback-list">
      {feedbackItemList.map((feedbackItem) => (
        <FeedbackListItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}

export default FeedbackList;
