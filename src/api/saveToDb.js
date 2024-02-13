export default async function saveToDb(metaData) {
    try {
        const response = await fetch(
          // "http://localhost:3030/routes/saveToDb"
          "https://dj-b2b-server-production.up.railway.app/routes/saveToDb"
        , {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({metaData: metaData}),
        })
         const data = await response.json()
         console.log(data)
         return data
      } catch (error) {
        console.log(error)
      }
}