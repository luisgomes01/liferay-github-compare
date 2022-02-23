import ClayCard from "@clayui/card";
import ClayIcon from "@clayui/icon";
import ClayLabel from "@clayui/label";
import { ClayTooltipProvider } from "@clayui/tooltip";
import "./RepositoryCard.scss";
import { format } from "timeago.js";
import { DeleteModal } from "../../components/DeleteModal/index";
import { useRepositories } from "../../contexts/repositories";
const RepositoryCard: React.FC<repositoryCard> = ({
  id,
  name,
  stars,
  forks,
  openIssues,
  createdAt,
  pushedAt,
  license,
  language,
  avatar,
  favorite,
}) => {
  const { cardView, darkTheme, repositories, favoriteRepositories } =
    useRepositories();

  const addFavoriteOnRepositories = () => {
    localStorage.setItem("repositories", JSON.stringify(repositories));
  };

  if (!cardView) {
    return (
      <div className="col-sm-10 col-md-10 col-xl-10 justify-content-center">
        <ClayCard className={darkTheme ? "dark-card" : ""}>
          <div className="d-flex w-100 justify-content-between">
            <ClayCard.Description
              displayType="title"
              tag="div"
              title=""
              truncate
            >
              <ClayTooltipProvider>
                <div
                  className={
                    darkTheme
                      ? "line-repository-title text-white"
                      : "line-repository-title"
                  }
                  data-tooltip-align="top"
                  title={name}
                >
                  <img
                    className="mx-2"
                    src={avatar}
                    alt="avatar"
                    width={45}
                    height={45}
                  />
                  {name}
                </div>
              </ClayTooltipProvider>
            </ClayCard.Description>
            <ClayCard.Description
              displayType="subtitle"
              tag="div"
              title=""
              truncate
            >
              <div
                className={
                  darkTheme
                    ? "dark-line-card-icons d-flex line-card-icons"
                    : "d-flex line-card-icons"
                }
              >
                <button
                  className="btn-unstyled nav-btn nav-btn-monospaced"
                  type="button"
                  onClick={() => {
                    favoriteRepositories(id);
                    addFavoriteOnRepositories();
                  }}
                >
                  {favorite ? (
                    <ClayIcon symbol="star" />
                  ) : (
                    <ClayIcon symbol="star-o" />
                  )}
                </button>
                <DeleteModal id={id} name={name} />
              </div>
            </ClayCard.Description>
          </div>
          <ClayCard.Body>
            <ClayCard.Description
              className="pl61"
              displayType="subtitle"
              tag="span"
              truncate={false}
              title=""
            >
              <ul
                className={
                  darkTheme
                    ? "d-inline-flex flex-wrap list-repository-info text-white"
                    : "d-inline-flex flex-wrap list-repository-info"
                }
              >
                <li>
                  <strong>Stars</strong>
                  <span> {stars}</span>
                </li>

                <li>
                  <strong>Forks</strong>
                  <span> {forks}</span>
                </li>

                <li>
                  <strong>Open Issues</strong>
                  <span> {openIssues}</span>
                </li>
                <li>
                  <strong>Age</strong>
                  <span> {format(createdAt)}</span>
                </li>
                <li>
                  <strong>Last commit</strong>
                  <span> {format(pushedAt)}</span>
                </li>
                <li>
                  <strong>License</strong>{" "}
                  <span>{license ? license : "N/A"}</span>
                </li>
              </ul>
            </ClayCard.Description>
            <ClayCard.Caption className="pl61">
              <ClayLabel
                className={darkTheme ? "dark-background" : "bg-white"}
                displayType="warning"
              >
                {language ? language.toUpperCase() : "No language"}
              </ClayLabel>
            </ClayCard.Caption>
          </ClayCard.Body>
        </ClayCard>
      </div>
    );
  }

  return (
    <ClayCard
      className={
        darkTheme ? "dark-card card-container text-white" : "card-container"
      }
    >
      <div className={darkTheme ? "card-title text-white" : "card-title"}>
        <ClayTooltipProvider>
          <div
            className="repository-title"
            data-tooltip-align="top"
            title={name}
          >
            <img
              className="mx-2"
              src={avatar}
              alt="avatar"
              width={45}
              height={45}
            />
            {name}
          </div>
        </ClayTooltipProvider>
        <div
          className={darkTheme ? "dark-card-icons card-icons" : "card-icons"}
        >
          <button
            className="btn-unstyled nav-btn nav-btn-monospaced"
            type="button"
            onClick={() => {
              favoriteRepositories(id);
              addFavoriteOnRepositories();
            }}
          >
            {favorite ? (
              <ClayIcon symbol="star" />
            ) : (
              <ClayIcon symbol="star-o" />
            )}
          </button>
          <DeleteModal id={id} name={name} />
        </div>
      </div>
      <ClayCard.Body>
        <ul>
          <ClayCard.Description truncate displayType="text" title="">
            <li>
              <strong>Stars</strong>
              <span> {stars}</span>
            </li>

            <li>
              <strong>Forks</strong>
              <span> {forks}</span>
            </li>

            <li>
              <strong>Open Issues</strong>
              <span> {openIssues}</span>
            </li>
            <li>
              <strong>Age</strong>
              <span> {format(createdAt)}</span>
            </li>
            <li>
              <strong>Last commit</strong>
              <span> {format(pushedAt)}</span>
            </li>
            <li>
              <strong>License</strong> <span>{license ? license : "N/A"}</span>
            </li>

            <li>
              <ClayLabel
                className={darkTheme ? "dark-background" : "bg-white"}
                displayType="warning"
                large
              >
                {language ? language.toUpperCase() : "No language"}
              </ClayLabel>
            </li>
          </ClayCard.Description>
        </ul>
      </ClayCard.Body>
    </ClayCard>
  );
};

export default RepositoryCard;
