import {config} from "./consts.js"

const url = config.url

export default async function getMetaData(formData) {
  try {
    const response = await fetch(`${url}/routes/getMetaData`,
      // "http://localhost:3030/routes/getMetaData",
      // "https://dj-b2b-server-production.up.railway.app/routes/getMetaData",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
