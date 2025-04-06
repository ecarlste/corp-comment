type HashtagListItemProps = {
  company: string;
};

function HashtagListItem({ company }: HashtagListItemProps) {
  return (
    <li>
      <button>#{company}</button>
    </li>
  );
}

export default HashtagListItem;
