const URL_API = process.env.URL_API;

export const getAllPost = async () => {
  const data = await fetch(`${URL_API}/articles`);

  if (data) {
    return data.json();
  } else return [];
};
