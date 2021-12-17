import Api from ".";

export const getRepository = async (
  urlEnding: string
): Promise<IRepository> => {
  const response = await Api.get(`repos/${urlEnding}`);
  return response.data;
};

export const getAllUserRepositories = async (user: string) => {
  const response = await Api.get(`search/repositories?q=${user}`);
  return response.data.items;
};
