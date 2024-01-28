export async function handleSubmit(event, xmlFile,setPlaylistsArray) {
    event.preventDefault();
    if (!xmlFile) return;

    const data = await saveXML(event, xmlFile);
    console.log(data);
    if (data.message === "success") {
      getPlaylists(setPlaylistsArray);
    }
  }

 export async function saveXML(event, xmlFile) {
    const contentType = xmlFile.type;
    console.log(contentType);

    console.log(xmlFile);
    try {
      const response = await fetch("http://localhost:3030/saveXML", {
        method: "POST",
        headers: {
          "Content-Type": contentType,
        },
        body: xmlFile,
      });
      const data = await response.json();
      console.log(data);

      return data;
    } catch (error) {
      console.log(error);
    }
  }

 export async function getPlaylists(setPlaylistsArray) {
    try {
      const response = await fetch("http://localhost:3030/getPlaylists", {
        method: "GET",
      });
      const data = await response.json();
      console.log(data);
      setPlaylistsArray(data);

      return data;
    } catch (error) {
      console.log(error);
    }
  }