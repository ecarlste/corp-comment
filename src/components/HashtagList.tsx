import HashtagListItem from "./HashtagListItem";

type HashtagListProps = {
  companies: string[];
  handleSelectCompany: (company: string) => void;
};

function HashtagList({ companies, handleSelectCompany }: HashtagListProps) {
  return (
    <ul className="hashtags">
      {companies.map((company) => (
        <HashtagListItem
          key={company}
          company={company}
          onSelectCompany={handleSelectCompany}
        />
      ))}
    </ul>
  );
}

export default HashtagList;
