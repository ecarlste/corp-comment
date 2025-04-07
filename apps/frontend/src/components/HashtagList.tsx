import { useShallow } from "zustand/shallow";
import { useFeedbackItemsStore } from "../stores/feedbackItemsStore";
import HashtagListItem from "./HashtagListItem";

function HashtagList() {
  const companyList = useFeedbackItemsStore(
    useShallow((state) => state.getCompanyList())
  );
  const selectCompany = useFeedbackItemsStore((state) => state.selectCompany);

  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagListItem
          key={company}
          company={company}
          onSelectCompany={() => selectCompany(company)}
        />
      ))}
    </ul>
  );
}

export default HashtagList;
