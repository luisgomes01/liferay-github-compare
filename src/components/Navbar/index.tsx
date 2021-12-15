import { FormEvent, useState } from "react";
import ClayIcon from "@clayui/icon";
import { ClayInput } from "@clayui/form";
import ClayDropDown from "@clayui/drop-down";
import ClayButton from "@clayui/button";
import ClayCard from "@clayui/card";
import "@clayui/css/lib/css/atlas.css";
import github from "../../img/github.svg";
import "./Navbar.scss";
import { useRepositories } from "../../contexts/repositories";

export default function Navbar() {
  const [expandFilterAndOrder, setExpandFilterAndOrder] = useState(false);
  const [expandAddRepository, setExpandAddRepository] = useState(false);
  const { addRepository, addAllUserRepositories, urlEnding, setUrlEnding } =
    useRepositories();

  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (urlEnding.length === 0) {
      return false;
    }

    if (urlEnding.split("/").length > 1) {
      addRepository();
      return true;
    }

    addAllUserRepositories();
    return true;
  };

  return (
    <nav>
      <div className="menu">
        <section className="app-name">
          <img src={github} alt="github-logo.svg" />
          Github Compare
        </section>

        <section className="filter-dropdown">
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
                {[
                  { href: "#one", label: "Stars" },
                  { href: "#two", label: "Forks" },
                  { href: "#three", label: "Open Issues" },
                  { href: "#three", label: "Age" },
                  { href: "#three", label: "Last Commit" },
                ].map((item, i) => (
                  <ClayDropDown.Item href={item.href} key={i}>
                    {item.label}
                  </ClayDropDown.Item>
                ))}
              </ClayDropDown.Group>
            </ClayDropDown.ItemList>
          </ClayDropDown>
        </section>

        <section className="search-bar">
          <ClayInput.Group>
            <ClayInput.GroupItem prepend>
              <ClayInput id="basicInputText" placeholder="Search" type="text" />
            </ClayInput.GroupItem>
            <ClayInput.GroupItem shrink prepend>
              <ClayInput.GroupText>
                <ClayIcon symbol="search" />
              </ClayInput.GroupText>
            </ClayInput.GroupItem>
          </ClayInput.Group>
        </section>

        <section className="right-menu-icons">
          <button
            className="btn-unstyled nav-btn nav-btn-monospaced"
            type="button"
          >
            <ClayIcon symbol="star-o" />
          </button>

          <button
            className="btn-unstyled nav-btn nav-btn-monospaced"
            type="button"
          >
            <ClayIcon symbol="adjust" />
          </button>

          <button
            className="btn-unstyled nav-btn nav-btn-monospaced"
            type="button"
          >
            <ClayIcon symbol="cards2" />
          </button>

          <ClayDropDown
            active={expandAddRepository}
            onActiveChange={setExpandAddRepository}
            trigger={
              <button
                className="btn btn-unstyled nav-btn nav-btn-monospaced unstyled-button plus-icon-button"
                type="button"
              >
                <ClayIcon symbol="plus" />
              </button>
            }
          >
            <form onSubmit={onSubmitForm}>
              <ClayCard>
                <ClayCard.Body>
                  <ClayCard.Description displayType="title">
                    {"New Repository"}
                  </ClayCard.Description>
                  <label htmlFor="repository">
                    Repository <span>*</span>
                  </label>
                  <ClayInput.Group>
                    <ClayInput
                      className="add-repository-input"
                      value={urlEnding}
                      type="text"
                      onChange={(e) => setUrlEnding(e.target.value)}
                    />
                  </ClayInput.Group>
                </ClayCard.Body>
              </ClayCard>
              <div className="dropdown-action-buttons">
                <ClayButton
                  displayType="secondary"
                  onClick={() => setExpandAddRepository(false)}
                >
                  Cancel
                </ClayButton>
                <ClayButton displayType="primary" type="submit">
                  Add Repository
                </ClayButton>
              </div>
            </form>
          </ClayDropDown>
        </section>
      </div>
    </nav>
  );
}
