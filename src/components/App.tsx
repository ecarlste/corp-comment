import { useEffect } from "react";
import Container from "./Container";
import Footer from "./Footer";
import HashtagList from "./HashtagList";
import { useFeedbackItemsStore } from "../stores/feedbackItemsStore";

function App() {
  const fetchFeedbackItems = useFeedbackItemsStore(
    (state) => state.fetchFeedbackItems
  );

  useEffect(() => {
    fetchFeedbackItems();
  }, [fetchFeedbackItems]);

  return (
    <div className="app">
      <Footer />
      <Container />
      <HashtagList />
    </div>
  );
}

export default App;
