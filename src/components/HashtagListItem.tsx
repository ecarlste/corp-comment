type HashtagListItemProps = {
  company: string;
  onSelectCompany: (company: string) => void;
};

function HashtagListItem({ company, onSelectCompany }: HashtagListItemProps) {
  return (
    <li onClick={() => onSelectCompany(company)}>
      <button>#{company}</button>
    </li>
  );
}

export default HashtagListItem;
