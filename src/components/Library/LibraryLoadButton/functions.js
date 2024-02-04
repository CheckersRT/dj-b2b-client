export async function handleSubmit(event, xmlFile, setPlaylistsArray, setCollection) {
    event.preventDefault();
    if (!xmlFile) return;

    const formData = new FormData()
    formData.append("file", event.target.file.files[0])

    const data = await saveXML(formData);
    if (data) {
      console.log(data.file)
      setPlaylistsArray(data.playlists);
      setCollection(data.collection)
    }
  }

 export async function saveXML(formData) {

    try {
      const response = await fetch("http://localhost:3030/routes/saveXML", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data);

      if(data.status === "success") {
        alert("Upload successful")
        return data
      } else {
        console.log(data.message)
        alert(data.message)
      }

    } catch (error) {
      console.log(error);
      console.log("SaveXML response message: ", error.message)
      alert("Error uploading Xml")
    }
  }

 export async function getPlaylists(setPlaylistsArray) {
    try {
      const response = await fetch("http://localhost:3030/routes/getPlaylists", {
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