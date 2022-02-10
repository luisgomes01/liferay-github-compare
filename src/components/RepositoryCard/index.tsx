import ClayCard from "@clayui/card";
import liferay from "../../img/liferay.svg";

import ClayIcon from "@clayui/icon";
import "./RepositoryCard.scss";
import { format } from "timeago.js";
import { DeleteModal } from "../../components/DeleteModal/index";
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
          <DeleteModal id={id} name={name} />
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
            <span> {format(createdAt)}</span>
          </li>
          <li>
            <strong>Last commit</strong>
            <span> {format(pushedAt)}</span>
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
