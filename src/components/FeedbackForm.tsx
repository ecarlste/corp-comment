import { ChangeEvent, useState } from "react";
import { maxFeedbackLength } from "../lib/constants";

function FeedbackForm() {
  const [text, setText] = useState("");

  const remainingCharCount = maxFeedbackLength - text.length;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;

    if (newText.length <= maxFeedbackLength) {
      setText(newText);
    }
  };

  return (
    <form className="form">
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
