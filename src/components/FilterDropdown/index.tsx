import ClayDropDown from "@clayui/drop-down";
import ClayIcon from "@clayui/icon";
import { useState } from "react";
import "./FilterDropdown.scss";

import { useSorts } from "../../contexts/sorts";
import "./FilterDropdown.scss";

export default function FilterDropdown() {
  const [expandFilterAndOrder, setExpandFilterAndOrder] = useState(false);

  const {
    sortByRepositoryStars,
    sortByRepositoryForks,
    sortByRepositoryOpenIssues,
    sortByRepositoryAge,
    sortByRepositoryLastCommit,
  } = useSorts();

  return (
    <section className="filter-dropdown mr-2">
      <ClayDropDown
        trigger={
          <button className="unstyled-button">
            Fliter and Order <ClayIcon symbol="caret-bottom" />
          </button>
        }
        active={expandFilterAndOrder}
        onActiveChange={setExpandFilterAndOrder}
        menuElementAttrs={{
          className: "filter-dropdown",
          containerProps: {
            className: "dropdown-menu-react-portal-div",
            id: "dropdownMenuReactPortalDiv",
          },
        }}
      >
        <ClayDropDown.ItemList>
          <ClayDropDown.Group header="ORDER BY">
            <ClayDropDown.Item
              onClick={() => {
                sortByRepositoryStars();
                setExpandFilterAndOrder(false);
              }}
            >
              Stars
            </ClayDropDown.Item>
            <ClayDropDown.Item
              onClick={() => {
                sortByRepositoryForks();
                setExpandFilterAndOrder(false);
              }}
            >
              Forks
            </ClayDropDown.Item>
            <ClayDropDown.Item
              onClick={() => {
                sortByRepositoryOpenIssues();
                setExpandFilterAndOrder(false);
              }}
            >
              Open Issues
            </ClayDropDown.Item>
            <ClayDropDown.Item
              onClick={() => {
                sortByRepositoryAge();
                setExpandFilterAndOrder(false);
              }}
            >
              Age
            </ClayDropDown.Item>
            <ClayDropDown.Item
              onClick={() => {
                sortByRepositoryLastCommit();
                setExpandFilterAndOrder(false);
              }}
            >
              Last Commit
            </ClayDropDown.Item>
          </ClayDropDown.Group>
        </ClayDropDown.ItemList>
      </ClayDropDown>
    </section>
  );
}
