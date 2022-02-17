import ClayIcon from "@clayui/icon";
import { useRepositories } from "../../contexts/repositories";
import { useSorts } from "../../contexts/sorts";
import AddRepositoryDropdown from "../AddRepositoryDropdown";

export default function RightIconsNavbar() {
  const { isFavorite, setIsFavorite } = useRepositories();
  const { sortByFavoriteRepository } = useSorts();

  return (
    <section className="right-menu-icons">
      <button
        className="btn-unstyled nav-btn nav-btn-monospaced"
        onClick={() => {
          setIsFavorite(!isFavorite);
          if (!isFavorite) {
            sortByFavoriteRepository();
          }
        }}
        type="button"
      >
        {isFavorite ? <ClayIcon symbol="star" /> : <ClayIcon symbol="star-o" />}
      </button>

      <button className="btn-unstyled nav-btn nav-btn-monospaced" type="button">
        <ClayIcon symbol="adjust" />
      </button>

      <button className="btn-unstyled nav-btn nav-btn-monospaced" type="button">
        <ClayIcon symbol="cards2" />
      </button>

      <AddRepositoryDropdown />
    </section>
  );
}
