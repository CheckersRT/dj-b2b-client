import {config} from "./consts.js"

const url = config.url

export default async function uploadMultipleTracks(formData) {
  try {
    const response = await fetch(`${url}/routes/uploadMultipleTracks`,
    //   "https://dj-b2b-server-production.up.railway.app/routes/uploadMultipleTracks",
    //   "http://localhost:3030/routes/uploadMultipleTracks",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    console.log("Data from uploadMulTracks: ", data);
    return data;
  } catch (error) {
    console.error("Error in uploadMultipleTracks: ", error);
    alert(`Something's gone wrong: ${error}`)
  }
}
