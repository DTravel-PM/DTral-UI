const URL_API = process.env.URL_API;

export const getOneLocation = async (params: any) => {
  const { id } = params.queryKey[1];

  const data = await fetch(`${URL_API}/locations/${id}`);

  if (data) {
    return data.json();
  } else return [];
};

export const getAllLocation = async () => {
  const data = await fetch(`${URL_API}/locations`);

  if (data) {
    return data.json();
  } else return [];
};
