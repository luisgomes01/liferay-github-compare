import ClayIcon from "@clayui/icon";
import { useRepositories } from "../../contexts/repositories";
import { useSorts } from "../../contexts/sorts";
import AddRepositoryDropdown from "../AddRepositoryDropdown";
import ClayDropDown from "@clayui/drop-down";
import { useState } from "react";
import "./RightIconsNavbar.scss";

export default function RightIconsNavbar() {
  const { cardView, getRepositories, isFavorite, setIsFavorite, setCardView } =
    useRepositories();
  const { filterByFavoriteRepository } = useSorts();
  const [active, setActive] = useState(false);

  return (
    <section className="right-menu-icons">
      <button
        className="btn-unstyled nav-btn nav-btn-monospaced"
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
      >
        {isFavorite ? <ClayIcon symbol="star" /> : <ClayIcon symbol="star-o" />}
      </button>

      <button className="btn-unstyled nav-btn nav-btn-monospaced" type="button">
        <ClayIcon symbol="adjust" />
      </button>

      <ClayDropDown
        trigger={
          <button
            className="btn-unstyled nav-btn nav-btn-monospaced"
            type="button"
          >
            {cardView ? (
              <ClayIcon symbol="cards2" />
            ) : (
              <ClayIcon symbol="cards-full" />
            )}
          </button>
        }
        active={active}
        onActiveChange={setActive}
        menuElementAttrs={{
          className: "view-dropdown",
        }}
      >
        <ClayDropDown.ItemList>
          <ClayDropDown.Group>
            <ClayDropDown.Item>
              <button
                className="btn-unstyled"
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
                className="btn-unstyled"
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
