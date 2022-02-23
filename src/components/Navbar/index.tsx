import "./Navbar.scss";
import darkGithub from "../../img/dark-github.svg";
import github from "../../img/github.svg";
import RightIconsNavbar from "../RightIconsNavbar";
import FilterDropdown from "../FilterDropdown";
import SearchBar from "../SearchBar";
import { useRepositories } from "../../contexts/repositories";

export default function Navbar() {
  const { darkTheme } = useRepositories();
  return (
    <nav>
      <div className={darkTheme ? "dark-menu menu" : "menu"}>
        <section className="app-name flex-shrink-0">
          <img src={darkTheme ? darkGithub : github} alt="github-logo.svg" />
          Github Compare
        </section>

        <FilterDropdown />

        <SearchBar />

        <RightIconsNavbar />
      </div>
    </nav>
  );
}
