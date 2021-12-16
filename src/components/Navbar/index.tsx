import { useState } from "react";
import ClayIcon from "@clayui/icon";
import { ClayInput } from "@clayui/form";
import ClayDropDown from "@clayui/drop-down";
import "@clayui/css/lib/css/atlas.css";
import "./Navbar.scss";

import github from "../../img/github.svg";
import RightIconsNavbar from "../RightIconsNavbar";

export default function Navbar() {
  const [expandFilterAndOrder, setExpandFilterAndOrder] = useState(false);

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
        <RightIconsNavbar />
      </div>
    </nav>
  );
}
