import ClayEmptyState from "@clayui/empty-state";
import emptystate from "../../img/emptystate.svg";

export default function EmptyState() {
  return (
    <ClayEmptyState
      description="Add new repositories by clicking the blue plus icon"
      imgProps={{ alt: "Alternative Text" }}
      imgSrc={emptystate}
      title="There's nothing here yet!"
      className="empty"
    />
  );
}
