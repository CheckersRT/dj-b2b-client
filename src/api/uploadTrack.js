export default async function uploadTrack(name) {

    try {
        const response = await fetch("http://localhost:3030/routes/uploadTrack", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ trackName: name }),
          });
        
          const data = await response.json()
          console.log(data)
          return data
        
    } catch (error) {
        
    }
}