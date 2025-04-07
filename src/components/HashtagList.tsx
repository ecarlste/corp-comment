import { useFeedbackItemsStore } from "../stores/feedbackItemsStore";
import HashtagListItem from "./HashtagListItem";

function HashtagList() {
  const companyList = useFeedbackItemsStore((state) => state.companyList);
  const selectCompany = useFeedbackItemsStore((state) => state.selectCompany);

  console.log("companyList", companyList);

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
