import { ChangeEvent, FormEvent, useState } from "react";
import { maxFeedbackLength } from "../lib/constants";

type FeedbackFormProps = {
  onAddItemToList: (text: string) => void;
};

function FeedbackForm({ onAddItemToList }: FeedbackFormProps) {
  const [text, setText] = useState("");
  const [showValidIndicator, setShowValidIndicator] = useState(false);
  const [showInvalidIndicator, setShowInvalidIndicator] = useState(false);

  const remainingCharCount = maxFeedbackLength - text.length;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;

    if (newText.length <= maxFeedbackLength) {
      setText(newText);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text.includes("#") && text.length >= 5) {
      setShowValidIndicator(true);
      setTimeout(() => setShowValidIndicator(false), 2000);
    } else {
      setShowInvalidIndicator(true);
      setTimeout(() => setShowInvalidIndicator(false), 2000);
      return;
    }

    onAddItemToList(text);
    setText("");
  };

  return (
    <form
      className={`form ${showValidIndicator ? "form--valid" : ""} ${
        showInvalidIndicator ? "form--invalid" : ""
      }`}
      onSubmit={handleSubmit}
    >
      <textarea
        value={text}
        onChange={handleChange}
        id="feedback-textarea"
        placeholder="generic"
        spellCheck={false}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remeber to #hashtag the company
      </label>
      <div>
        <p className="u-italic">{remainingCharCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}

export default FeedbackForm;
