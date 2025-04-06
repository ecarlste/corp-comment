type HashtagListProps = {
  companies: string[];
};

function HashtagList({ companies }: HashtagListProps) {
  return (
    <ul className="hashtags">
      {companies.map((company) => (
        <li key={company}>
          <button>#{company}</button>
        </li>
      ))}
    </ul>
  );
}

export default HashtagList;
