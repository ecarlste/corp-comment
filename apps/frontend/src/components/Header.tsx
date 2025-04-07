import { useFeedbackItemsStore } from "../stores/feedbackItemsStore";
import FeedbackForm from "./FeedbackForm";
import Logo from "./Logo";
import PageHeading from "./PageHeading";
import Pattern from "./Pattern";

function Header() {
  const addItemToList = useFeedbackItemsStore((state) => state.addItemToList);

  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddItemToList={addItemToList} />
    </header>
  );
}

export default Header;
