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
  const { favoriteRepositories } = useRepositories();

  return (
    <ClayCard className="card-container">
      <div className="card-title">
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
        <div className="card-icons">
          <button
            className="btn-unstyled nav-btn nav-btn-monospaced"
            type="button"
            onClick={() => favoriteRepositories(id)}
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
              <ClayLabel displayType="warning" large>
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
