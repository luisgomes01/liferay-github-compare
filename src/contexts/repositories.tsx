import React, { createContext, useState, useContext, useEffect } from "react";
import * as Api from "../api/repository";
import { checkTypeOfUser } from "../api/Type";

const RepositoryContext = createContext({} as RepositoryContext);

export const RepositoryProvider: React.FC = ({ children }) => {
  const [repositories, setRepositories] = useState<IRepository[]>([]);
  const [urlEnding, setUrlEnding] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const addRepository = async () => {
    const response = await Api.getRepository(urlEnding);
    setRepositories([...repositories, response]);
    localStorage.setItem("repositories", JSON.stringify([response]));
    setUrlEnding("");
  };

  const addAllUserRepositories = async () => {
    const type = await checkTypeOfUser(urlEnding);
    if (type === "User") {
      const response = await Api.getAllUserRepositories(urlEnding);
      setRepositories(repositories.concat(response));
      localStorage.setItem(
        "repositories",
        JSON.stringify(repositories.concat(response))
      );
    }
    if (type === "Organization") {
      const response = await Api.getAllOrganizationRepositories(urlEnding);
      setRepositories(repositories.concat(response));
      localStorage.setItem(
        "repositories",
        JSON.stringify(repositories.concat(response))
      );
    }
    setUrlEnding("");
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
      }}
    >
      {children}
    </RepositoryContext.Provider>
  );
};

export const useRepositories = () => useContext(RepositoryContext);
