const URL_API = process.env.URL_API;
import { parseCookies, destroyCookie } from "nookies";

export const getAllPlan = async (params: any) => {
  const { user } = params.queryKey[1];
  const data = await fetch(`${URL_API}/plans/GetPlanByUserId/${user}`);

  if (data) {
    return data.json();
  } else return [];
};

export const createPlan = async (params: any) => {
  const { date, time, budget, username, locationid } = params;

  const data = await fetch(`${URL_API}/plans/AddToPlan`, {
    method: "post",
    headers: {
      Authorization: `Bearer ${parseCookies().jwt}`,

      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      date,
      time,
      budget,
      locationid,
      username,
    }),
  });

  return data;
};

export const updatePlan = async (params: any) => {
  const { date, time, budget, username, locationid, id } = params;

  const data = await fetch(`${URL_API}/plans/${id}`, {
    method: "put",
    headers: {
      Authorization: `Bearer ${parseCookies().jwt}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      date,
      time,
      budget,
      locationid,
      username,
    }),
  });

  return data;
};
