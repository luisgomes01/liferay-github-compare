import { ClayInput } from "@clayui/form";
import { ClayButtonWithIcon } from "@clayui/button";

import ClayManagementToolbar from "@clayui/management-toolbar";
import { useRepositories } from "../../contexts/repositories";

export default function SearchBar() {
  const { darkTheme, setSearchTerm } = useRepositories();
  return (
    <section className="search-bar mr-sm-5 mr-md-0 mr-lg-0">
      <nav
        className={
          darkTheme
            ? "management-bar navbar navbar-expand-md management-bar-dark"
            : "management-bar navbar navbar-expand-md management-bar-light"
        }
      >
        <div className="container-fluid container-fluid-max-xl">
          <ClayManagementToolbar.Search showMobile>
            <ClayInput.Group>
              <ClayInput.GroupItem>
                <ClayInput
                  className={
                    darkTheme
                      ? "dark-background dark-search-bar form-control input-group-inset input-group-inset-after minh-40 text-white"
                      : "form-control input-group-inset input-group-inset-after minh-40"
                  }
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search"
                  type="text"
                />
                <ClayInput.GroupInsetItem
                  after
                  className={darkTheme ? "dark-background" : ""}
                  tag="span"
                >
                  <ClayButtonWithIcon
                    className={darkTheme ? "dark-background magnifier" : ""}
                    displayType="unstyled"
                    symbol="search"
                    type="button"
                  />
                </ClayInput.GroupInsetItem>
              </ClayInput.GroupItem>
            </ClayInput.Group>
          </ClayManagementToolbar.Search>
        </div>
      </nav>
    </section>
  );
}
