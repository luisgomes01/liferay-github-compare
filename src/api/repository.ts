import Api from ".";

export const getRepository = async (
  urlEnding: string
): Promise<IRepository> => {
  const response = await Api.get(`repos/${urlEnding}`);
  return response.data;
};

export const getAllOrganizationRepositories = async (
  organization: string
): Promise<IRepository> => {
  const response = await Api.get(`orgs/${organization}/repos`);
  return response.data;
};

export const getAllUserRepositories = async (
  user: string
): Promise<IRepository> => {
  const response = await Api.get(`users/${user}/repos`);
  return response.data;
};
