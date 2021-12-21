import ClayIcon from "@clayui/icon";
import { ClayInput } from "@clayui/form";
import { useRepositories } from "../../contexts/repositories";

export default function SearchBar() {
  const { setSearchTerm } = useRepositories();
  return (
    <section className="search-bar">
      <ClayInput.Group>
        <ClayInput.GroupItem prepend>
          <ClayInput
            id="basicInputText"
            placeholder="Search"
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </ClayInput.GroupItem>
        <ClayInput.GroupItem shrink prepend>
          <ClayInput.GroupText>
            <ClayIcon symbol="search" />
          </ClayInput.GroupText>
        </ClayInput.GroupItem>
      </ClayInput.Group>
    </section>
  );
}
