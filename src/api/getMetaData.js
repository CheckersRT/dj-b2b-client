import {config} from "./consts.js"

const url = config.url

export default async function getMetaData(formData) {
  try {
    const response = await fetch(`${url}/routes/getMetaData`,
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
