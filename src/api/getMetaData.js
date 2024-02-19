export default async function getMetaData(formData) {
  try {
    const response = await fetch(
      "http://localhost:3030/routes/getMetaData",
      // "https://dj-b2b-server.vercel.app/routes/getMetadata"
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
