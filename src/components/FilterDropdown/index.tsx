import ClayDropDown from "@clayui/drop-down";
import ClayIcon from "@clayui/icon";
import { useState } from "react";
import "./FilterDropdown.scss";

import { useSorts } from "../../contexts/sorts";
import "./FilterDropdown.scss";
import { useRepositories } from "../../contexts/repositories";

export default function FilterDropdown() {
  const [expandFilterAndOrder, setExpandFilterAndOrder] = useState(false);
  const { darkTheme } = useRepositories();
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
        className={darkTheme ? "dark-background text-white" : ""}
        trigger={
          <button className="unstyled-button">
            Fliter and Order{" "}
            <ClayIcon
              className={darkTheme ? "text-white" : ""}
              symbol="caret-bottom"
            />
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
        <ClayDropDown.ItemList
          className={darkTheme ? "dark-background text-white" : ""}
        >
          <ClayDropDown.Item
            className={
              darkTheme
                ? "dark-background text-white font-weight-bold"
                : "font-weight-bold"
            }
          >
            Order By
          </ClayDropDown.Item>
          <ClayDropDown.Item
            className={darkTheme ? "dark-background text-white" : ""}
            onClick={() => {
              sortByRepositoryStars();
              setExpandFilterAndOrder(false);
            }}
          >
            Stars
          </ClayDropDown.Item>
          <ClayDropDown.Item
            className={darkTheme ? "dark-background text-white" : ""}
            onClick={() => {
              sortByRepositoryForks();
              setExpandFilterAndOrder(false);
            }}
          >
            Forks
          </ClayDropDown.Item>
          <ClayDropDown.Item
            className={darkTheme ? "dark-background text-white" : ""}
            onClick={() => {
              sortByRepositoryOpenIssues();
              setExpandFilterAndOrder(false);
            }}
          >
            Open Issues
          </ClayDropDown.Item>
          <ClayDropDown.Item
            className={darkTheme ? "dark-background text-white" : ""}
            onClick={() => {
              sortByRepositoryAge();
              setExpandFilterAndOrder(false);
            }}
          >
            Age
          </ClayDropDown.Item>
          <ClayDropDown.Item
            className={darkTheme ? "dark-background text-white" : ""}
            onClick={() => {
              sortByRepositoryLastCommit();
              setExpandFilterAndOrder(false);
            }}
          >
            Last Commit
          </ClayDropDown.Item>
        </ClayDropDown.ItemList>
      </ClayDropDown>
    </section>
  );
}
