import ClayCard from "@clayui/card";
import ClayButton from "@clayui/button";
import liferay from "../../img/liferay.svg";
import * as timeago from "timeago.js";
import ClayIcon from "@clayui/icon";
import "./RepositoryCard.scss";
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
}) => {
  const { deleteRepository } = useRepositories();
  return (
    <ClayCard className="card-container">
      <div className="card-title">
        <div className="repository-title">
          <img src={liferay} alt="liferay-logo.svg" width={45} height={45} />
          {name}
        </div>
        <div className="card-icons">
          <button
            className="btn-unstyled nav-btn nav-btn-monospaced"
            type="button"
          >
            <ClayIcon symbol="star-o" />
          </button>
          <button
            className="btn-unstyled nav-btn nav-btn-monospaced"
            type="button"
            onClick={() => deleteRepository(id)}
          >
            <ClayIcon symbol="trash" />
          </button>
        </div>
      </div>
      <ClayCard.Body>
        <ul>
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
            <span> {timeago.format(createdAt)}</span>
          </li>
          <li>
            <strong>Last commit</strong>
            <span> {timeago.format(pushedAt)}</span>
          </li>
          <li>
            <strong>License</strong> <span>{license ? license : "N/A"}</span>
          </li>
          <div className="language">
            <li>
              <span>{language ? language.toUpperCase() : "No language"}</span>
            </li>
          </div>
        </ul>
      </ClayCard.Body>
    </ClayCard>
  );
};

export default RepositoryCard;
