const URL_API = process.env.URL_API;

export const getAllPost = async () => {
  const data = await fetch(`${URL_API}/articles`);

  if (data) {
    return data.json();
  } else return [];
};

export const searchPost = async (params: any) => {
  if (params && params.queryKey) {
    const text = params.queryKey[1];

    const data = await fetch(`${URL_API}/articles/search?text=${text}`);

    if (data) {
      return data.json();
    }
  }

  return [];
};

export const createPost = async (params: any) => {
  const { title, content, location, username } = params;
  console.log("haha", title, content, location);

  const data = await fetch(`${URL_API}/articles`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: title,
      content: content,
      location: location,
      uploaddate: new Date(),
      username: username,
    }),
  });

  return data;
};
