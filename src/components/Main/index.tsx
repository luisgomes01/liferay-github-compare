import EmptyState from "../Emptystate";
import "./Main.scss";
import { useRepositories } from "../../contexts/repositories";

import RepositoryCard from "../RepositoryCard";
export default function Main() {
  const { repositories, searchTerm } = useRepositories();

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
    <main className="container-fluid">
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
              />
            </div>
          ))}
      </div>
    </main>
  );
}
