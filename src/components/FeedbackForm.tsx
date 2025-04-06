import { ChangeEvent, FormEvent, useState } from "react";
import { maxFeedbackLength } from "../lib/constants";

type FeedbackFormProps = {
  onAddToList: (text: string) => void;
};

function FeedbackForm({ onAddToList }: FeedbackFormProps) {
  const [text, setText] = useState("");

  const remainingCharCount = maxFeedbackLength - text.length;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;

    if (newText.length <= maxFeedbackLength) {
      setText(newText);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text.trim() === "") {
      return;
    }

    onAddToList(text);

    setText("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
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
