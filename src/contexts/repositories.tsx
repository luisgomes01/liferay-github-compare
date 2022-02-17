import React, { createContext, useState, useContext, useEffect } from "react";
import * as Api from "../api/repository";
import { checkTypeOfUser } from "../api/Type";

const RepositoryContext = createContext({} as RepositoryContext);

export const RepositoryProvider: React.FC = ({ children }) => {
  const [repositories, setRepositories] = useState<IRepository[]>([]);
  const [urlEnding, setUrlEnding] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [apiFeedback, setApiFeedback] = useState<any>(undefined);
  const [isFavorite, setIsFavorite] = useState(false);

  const addRepository = async () => {
    try {
      const response = await Api.getRepository(urlEnding);
      setRepositories([response, ...repositories]);
      localStorage.setItem(
        "repositories",
        JSON.stringify([response].concat(repositories))
      );
      setUrlEnding("");
      setApiFeedback(undefined);
    } catch (error) {
      const errorMessage = (error as Error).message;
      setApiFeedback(errorMessage);
    }
  };

  const addAllUserRepositories = async () => {
    try {
      const type = await checkTypeOfUser(urlEnding);
      if (type === "User") {
        const response = await Api.getAllUserRepositories(urlEnding);
        setRepositories([...response, ...repositories]);
        localStorage.setItem(
          "repositories",
          JSON.stringify([...response, ...repositories])
        );
        setUrlEnding("");
        setApiFeedback(undefined);
      }
      if (type === "Organization") {
        const response = await Api.getAllOrganizationRepositories(urlEnding);
        setRepositories([...response, ...repositories]);
        localStorage.setItem(
          "repositories",
          JSON.stringify([...response, ...repositories])
        );
        setUrlEnding("");
        setApiFeedback(undefined);
      }
    } catch (error) {
      const errorMessage = (error as Error).message;
      setApiFeedback(errorMessage);
    }
  };

  const deleteRepository = (id: number) => {
    const filteredRepositoryArray = repositories.filter((e) => e.id !== id);
    setRepositories(filteredRepositoryArray);
    localStorage.setItem(
      "repositories",
      JSON.stringify(filteredRepositoryArray)
    );
  };

  const getRepositories = () => {
    setRepositories(JSON.parse(localStorage.getItem("repositories") || "[]"));
  };

  useEffect(() => {
    getRepositories();
  }, []);

  const favoriteRepositories = (id: number) => {
    setRepositories(
      repositories.map((repository) => {
        if (repository.id === id) {
          repository.favorite = !repository.favorite;
        }
        return repository;
      })
    );
  };

  return (
    <RepositoryContext.Provider
      value={{
        repositories,
        setRepositories,
        urlEnding,
        setUrlEnding,
        addRepository,
        addAllUserRepositories,
        deleteRepository,
        searchTerm,
        setSearchTerm,
        apiFeedback,
        setApiFeedback,
        isFavorite,
        setIsFavorite,
        favoriteRepositories,
      }}
    >
      {children}
    </RepositoryContext.Provider>
  );
};

export const useRepositories = () => useContext(RepositoryContext);
