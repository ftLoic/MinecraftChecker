import { useQuery } from "react-query";

async function fetchData(username: string) {
  const result = await fetch(
    "https://playerdb.co/api/player/minecraft/" + username
  );
  const json = await result.json();
  return json;
}

export function usePlayers(username: string) {
  return useQuery(["player", username], () => fetchData(username));
}
