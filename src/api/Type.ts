import Api from ".";

export const checkTypeOfUser = async (user: string) => {
  const response = await Api.get(`users/${user}`);
  return response.data.type;
};
