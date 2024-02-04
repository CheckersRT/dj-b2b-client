export async function onChange(event, setFileData) {
    const file = event.target.files[0]

    console.log(file)

    if(file) {
        setFileData(file)
    }
}

export async function loadTrack(fileData) {
    const fileName = fileData.name
    try {
      const response = await fetch(
        // "http://localhost:3030/loadTrack"
        "https://dj-b2b-server.vercel.app/loadTrack"
        , {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name: fileName}),
      })
       const data = await response.json()
       console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

export async function onSubmit(event, setPlayerUrl) {
    event.preventDefault()
    setPlayerUrl("/8096989_Rub_(Original Mix).mp3")
}