import ClayDropDown from "@clayui/drop-down";
import ClayIcon from "@clayui/icon";
import { useState } from "react";

export default function FilterDropdown() {
  const [expandFilterAndOrder, setExpandFilterAndOrder] = useState(false);

  return (
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
  );
}
