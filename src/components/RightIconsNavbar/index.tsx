import ClayIcon from "@clayui/icon";
import { ClayButtonWithIcon } from "@clayui/button";
import { useRepositories } from "../../contexts/repositories";
import { useSorts } from "../../contexts/sorts";
import AddRepositoryDropdown from "../AddRepositoryDropdown";
import ClayDropDown from "@clayui/drop-down";
import { useState } from "react";
import "./RightIconsNavbar.scss";

export default function RightIconsNavbar() {
  const {
    cardView,
    darkTheme,
    getRepositories,
    isFavorite,
    setDarkTheme,
    setIsFavorite,
    setCardView,
  } = useRepositories();
  const { filterByFavoriteRepository } = useSorts();
  const [active, setActive] = useState(false);

  return (
    <section className="right-menu-icons">
      <ClayButtonWithIcon
        className={darkTheme ? "dark-background star" : ""}
        displayType="unstyled"
        onClick={() => {
          setIsFavorite(!isFavorite);
          if (!isFavorite) {
            filterByFavoriteRepository();
          }

          if (isFavorite) {
            getRepositories();
          }
        }}
        type="button"
        symbol={isFavorite ? "star" : "star-o"}
      />

      <ClayButtonWithIcon
        className={darkTheme ? "adjust" : ""}
        displayType="unstyled"
        onClick={() => setDarkTheme(!darkTheme)}
        type="button"
        symbol="adjust"
      />

      <ClayDropDown
        trigger={
          <ClayButtonWithIcon
            className={darkTheme ? "view" : ""}
            displayType="unstyled"
            type="button"
            symbol={cardView ? "cards2" : "cards-full"}
          />
        }
        active={active}
        onActiveChange={setActive}
        menuElementAttrs={{
          className: "view-dropdown",
        }}
      >
        <ClayDropDown.ItemList
          className={darkTheme ? "dark-background list" : ""}
        >
          <ClayDropDown.Group>
            <ClayDropDown.Item>
              <button
                className={
                  darkTheme ? "btn-unstyled dropdown-card-icon" : "btn-unstyled"
                }
                onClick={() => {
                  setCardView(true);
                  setActive(false);
                }}
              >
                <ClayIcon className="mr-2" symbol="cards2" />
                Cards
              </button>
            </ClayDropDown.Item>
            <ClayDropDown.Item>
              <button
                className={
                  darkTheme
                    ? "btn-unstyled dropdown-cards-full-icon"
                    : "btn-unstyled"
                }
                onClick={() => {
                  setCardView(false);
                  setActive(false);
                }}
              >
                <ClayIcon className="mr-2" symbol="cards-full" />
                List
              </button>
            </ClayDropDown.Item>
          </ClayDropDown.Group>
        </ClayDropDown.ItemList>
      </ClayDropDown>

      <AddRepositoryDropdown />
    </section>
  );
}
