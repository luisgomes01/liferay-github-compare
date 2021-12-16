import ClayIcon from "@clayui/icon";
import AddRepositoryDropdown from "../AddRepositoryDropdown";

export default function RightIconsNavbar() {
  return (
    <section className="right-menu-icons">
      <button className="btn-unstyled nav-btn nav-btn-monospaced" type="button">
        <ClayIcon symbol="star-o" />
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
