import EmptyState from "../Emptystate";
import "./Main.scss";
import { useRepositories } from "../../contexts/repositories";

import RepositoryCard from "../RepositoryCard";

export default function Main() {
  const { cardView, darkTheme, repositories, searchTerm } = useRepositories();

  if (repositories.length === 0) {
    return (
      <main className={darkTheme ? "main-dark-background" : ""}>
        <div className="emptystate-container">
          <EmptyState />
        </div>
      </main>
    );
  }

  if (!cardView) {
    return (
      <main
        className={
          darkTheme
            ? "main-dark-background container-fluid pt-3"
            : "container-fluid pt-3"
        }
      >
        <div className="col">
          {repositories
            .filter((repository) => {
              if (searchTerm === "") {
                return repository;
              } else if (
                repository.full_name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return repository;
              }
              return 0;
            })
            .map((repository, key) => (
              <div
                className="d-flex justify-content-center row-xl-3 line-repository-card"
                key={key}
              >
                <RepositoryCard
                  key={key}
                  id={repository.id}
                  name={repository.full_name}
                  stars={repository.stargazers_count}
                  forks={repository.forks}
                  openIssues={repository.open_issues}
                  createdAt={repository.created_at}
                  pushedAt={repository.pushed_at}
                  license={repository.license?.name || "N/A"}
                  language={repository.language}
                  avatar={repository.owner.avatar_url}
                  favorite={repository.favorite}
                />
              </div>
            ))}
        </div>
      </main>
    );
  }

  return (
    <main
      className={
        darkTheme ? "main-dark-background container-fluid" : "container-fluid"
      }
    >
      <div className="row">
        {repositories
          .filter((repository) => {
            if (searchTerm === "") {
              return repository;
            } else if (
              repository.full_name
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
              return repository;
            }
            return 0;
          })
          .map((repository, key) => (
            <div
              className="col-xl-3  d-flex justify-content-center card-row"
              key={key}
            >
              <RepositoryCard
                key={key}
                id={repository.id}
                name={repository.full_name}
                stars={repository.stargazers_count}
                forks={repository.forks}
                openIssues={repository.open_issues}
                createdAt={repository.created_at}
                pushedAt={repository.pushed_at}
                license={repository.license?.name || "N/A"}
                language={repository.language}
                avatar={repository.owner.avatar_url}
                favorite={repository.favorite}
              />
            </div>
          ))}
      </div>
    </main>
  );
}
