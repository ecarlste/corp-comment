import HashtagListItem from "./HashtagListItem";

type HashtagListProps = {
  companies: string[];
};

function HashtagList({ companies }: HashtagListProps) {
  return (
    <ul className="hashtags">
      {companies.map((company) => (
        <HashtagListItem key={company} company={company} />
      ))}
    </ul>
  );
}

export default HashtagList;
