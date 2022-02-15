import React, { createContext, useContext, useCallback } from "react";
import { useRepositories } from "./repositories";

const SortContext = createContext({} as SortContext);

export const SortProvider: React.FC = ({ children }) => {
  const { repositories, setRepositories } = useRepositories();

  const sortByRepositoryStars = useCallback(() => {
    const newRepositories = [...repositories];
    setRepositories(
      newRepositories.sort((a, b) => {
        return b.stargazers_count - a.stargazers_count;
      })
    );
  }, [repositories, setRepositories]);

  const sortByRepositoryForks = useCallback(() => {
    const newRepositories = [...repositories];
    setRepositories(
      newRepositories.sort((a, b) => {
        return b.forks - a.forks;
      })
    );
  }, [repositories, setRepositories]);

  const sortByRepositoryOpenIssues = useCallback(() => {
    const newRepositories = [...repositories];
    setRepositories(
      newRepositories.sort((a, b) => {
        return b.open_issues_count - a.open_issues_count;
      })
    );
  }, [repositories, setRepositories]);

  const sortByRepositoryAge = useCallback(() => {
    const newRepositories = [...repositories];
    setRepositories(
      newRepositories.sort((a, b) => {
        const aCreatedAt = new Date(a.created_at);
        const bCreatedAt = new Date(b.created_at);
        return aCreatedAt.getTime() - bCreatedAt.getTime();
      })
    );
  }, [repositories, setRepositories]);

  const sortByRepositoryLastCommit = useCallback(() => {
    const newRepositories = [...repositories];
    setRepositories(
      newRepositories.sort((a, b) => {
        const aUpdatedAt = new Date(a.pushed_at);
        const bUpdatedAt = new Date(b.pushed_at);
        return bUpdatedAt.getTime() - aUpdatedAt.getTime();
      })
    );
  }, [repositories, setRepositories]);

  return (
    <SortContext.Provider
      value={{
        sortByRepositoryStars,
        sortByRepositoryForks,
        sortByRepositoryOpenIssues,
        sortByRepositoryAge,
        sortByRepositoryLastCommit,
      }}
    >
      {children}
    </SortContext.Provider>
  );
};

export const useSorts = () => useContext(SortContext);
