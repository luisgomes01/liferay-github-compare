import EmptyState from "../Emptystate";
import "./Main.scss";
import { useRepositories } from "../../contexts/repositories";
import ClayCard from "@clayui/card";
import ClayButton from "@clayui/button";
import liferay from "../../img/liferay.svg";
export default function Main() {
  const { repositories } = useRepositories();

  if (repositories.length === 0) {
    return (
      <main>
        <div className="emptystate-container">
          <EmptyState />
        </div>
      </main>
    );
  }

  return (
    <main>
      {repositories.map((repository, key) => {
        return (
          <ClayCard key={key} className="card-container">
            <ClayCard.Body>
              <ClayCard.Description displayType="title" className="card-title">
                <img src={liferay} alt="liferay-logo.svg" />
                {repository.full_name}
              </ClayCard.Description>
              <ul>
                <li>
                  <p>
                    Stars <span>{repository.stars}</span>
                  </p>
                </li>

                <li>
                  <p>
                    Forks <span>{repository.forks}</span>
                  </p>
                </li>

                <li>
                  <p>
                    Open Issues <span>{repository.openIssues}</span>
                  </p>
                </li>
                <li>
                  <p>
                    Age <span>{repository.age}</span>
                  </p>
                </li>
                <li>
                  <p>
                    Last commit
                    <span>{repository.lastCommit}</span>
                  </p>
                </li>
                <li>
                  <p>
                    License <span>{repository.license}</span>
                  </p>
                </li>
              </ul>
            </ClayCard.Body>
          </ClayCard>
        );
      })}
    </main>
  );
}
