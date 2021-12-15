import Api from '.'

export const getRepository = async (urlEnding: string): Promise<IRepository> => {
  const response = await Api.get(`repos/${urlEnding}`);
  console.log(response.data);
  return response.data;
};

export const getAllUserRepositories = async (
  user: string,
): Promise<IRepository[]> => {
  const response = await Api.get<IRepositoryList>(
    `search/repositories?q=${user}`,
  );
  return response.data.items;
};