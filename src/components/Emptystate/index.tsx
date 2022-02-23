import ClayEmptyState from "@clayui/empty-state";
import { useRepositories } from "../../contexts/repositories";
import emptystate from "../../img/emptystate.svg";

export default function EmptyState() {
  const { darkTheme } = useRepositories();

  return (
    <ClayEmptyState
      className={darkTheme ? "empty text-light" : ""}
      description="Add new repositories by clicking the blue plus icon"
      imgProps={{ alt: "Alternative Text" }}
      imgSrc={emptystate}
      title="There's nothing here yet!"
    />
  );
}
