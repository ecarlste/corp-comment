import { useEffect, useState } from "react";
import Container from "./Container";
import Footer from "./Footer";
import HashtagList from "./HashtagList";
import { FeedbackItem } from "../lib/types";

function App() {
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItem[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const uniqueCompanies = [
    ...new Set(feedbackItems.map((item) => item.company)),
  ];

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          "http://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();

        setFeedbackItems(data.feedbacks);
      } catch {
        setErrorMessage("Something went wrong.");
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleAddToList = async (text: string) => {
    const company = text
      .split(" ")
      .find((word) => word.startsWith("#"))
      ?.substring(1);

    const newFeedbackItem: FeedbackItem = {
      id: new Date().getTime().toString(),
      upvoteCount: 0,
      badgeLetter: company?.substring(0, 1).toUpperCase() || "",
      company: company || "Unknown",
      text,
      daysAgo: 0,
    };

    setFeedbackItems([...feedbackItems, newFeedbackItem]);

    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        body: JSON.stringify(newFeedbackItem),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <div className="app">
      <Footer />

      <Container
        feedbackItems={feedbackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}
        handleAddToList={handleAddToList}
      />

      <HashtagList companies={uniqueCompanies} />
    </div>
  );
}

export default App;
