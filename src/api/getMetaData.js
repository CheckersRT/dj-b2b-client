export default async function getMetaData(url) {
    try {
        const response = await fetch(
          // "http://localhost:3030/routes/getMetadata"
          "https://dj-b2b-server.vercel.app/routes/getMetadata"
          , {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({url: url}),
        })
         const data = await response.json()
         console.log(data)
         return data
      } catch (error) {
        console.log(error)
      }
}