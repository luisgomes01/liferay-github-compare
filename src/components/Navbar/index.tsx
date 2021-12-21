import "@clayui/css/lib/css/atlas.css";
import "./Navbar.scss";

import github from "../../img/github.svg";
import RightIconsNavbar from "../RightIconsNavbar";
import FilterDropdown from "../FilterDropdown";
import SearchBar from "../SearchBar";

export default function Navbar() {
  return (
    <nav>
      <div className="menu">
        <section className="app-name">
          <img src={github} alt="github-logo.svg" />
          Github Compare
        </section>

        <FilterDropdown />

        <SearchBar />

        <RightIconsNavbar />
      </div>
    </nav>
  );
}
