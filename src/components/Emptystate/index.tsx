import ClayEmptyState from "@clayui/empty-state";
import emptystate from "../../img/emptystate.svg";

export default function EmptyState() {
  return (
    <ClayEmptyState
      description="You don't have more notifications to review"
      imgProps={{ alt: "Alternative Text", title: "Hello World!" }}
      imgSrc={emptystate}
      title="There's nothing here yet!"
      className="empty"
    />
  );
}
