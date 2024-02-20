const production = {
  url: "https://dj-b2b-server-production.up.railway.app",
};
const development = {
  url: "http://localhost:3030",
};
export const config =
  process.env.NODE_ENV === "development" ? development : production;
