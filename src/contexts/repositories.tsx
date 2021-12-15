import React, { createContext, useState, useContext } from "react";
import * as Api from "../api/repository";

const RepositoryContext = createContext({} as RepositoryContext);

export const RepositoryProvider: React.FC = ({ children }) => {
  const [repositories, setRepositories] = useState<IRepository[]>([]);
  const [urlEnding, setUrlEnding] = useState("");

  const addRepository = async () => {
    const response = await Api.getRepository(urlEnding);
    setRepositories([...repositories, response]);
    setUrlEnding("");

    return response.data;
  };

  const addAllUserRepositories = async () => {
    const response = await Api.getAllUserRepositories(urlEnding);
    // setRepositories([...repositories, response]);
    setUrlEnding("");

    return response;
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
      }}
    >
      {children}
    </RepositoryContext.Provider>
  );
};

export const useRepositories = () => useContext(RepositoryContext);
