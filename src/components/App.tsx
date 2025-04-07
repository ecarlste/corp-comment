import { useMemo, useState } from "react";
import Container from "./Container";
import Footer from "./Footer";
import HashtagList from "./HashtagList";
import { FeedbackItem } from "../lib/types";
import { useFeedbackItems } from "../lib/hooks";

function App() {
  const [selectedCompany, setSelectedCompany] = useState("");
  const { feedbackItems, setFeedbackItems, errorMessage, isLoading } =
    useFeedbackItems();

  const filteredFeedbackItems = useMemo(
    () =>
      selectedCompany === ""
        ? feedbackItems
        : feedbackItems.filter((item) => item.company === selectedCompany),
    [feedbackItems, selectedCompany]
  );
  const uniqueCompanies = useMemo(
    () => [...new Set(feedbackItems.map((item) => item.company))],
    [feedbackItems]
  );

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

  const handleSelectCompany = (company: string) => {
    setSelectedCompany(company);
  };

  return (
    <div className="app">
      <Footer />

      <Container
        feedbackItems={filteredFeedbackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}
        handleAddToList={handleAddToList}
      />

      <HashtagList
        companies={uniqueCompanies}
        handleSelectCompany={handleSelectCompany}
      />
    </div>
  );
}

export default App;
