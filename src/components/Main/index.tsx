import EmptyState from "../Emptystate";
import "./Main.scss";
import { useRepositories } from "../../contexts/repositories";

import RepositoryCard from "../RepositoryCard";
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
      {repositories.map((repository, key) => (
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
        />
      ))}
    </main>
  );
}
