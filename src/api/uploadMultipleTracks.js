export default async function uploadMultipleTracks(formData) {

    try {
        const response = await fetch("http://localhost:3030/routes/uploadMultipleTracks", {
            method: "POST",
            body: formData,
        })
        const data = await response.json()
        console.log("Data from uploadMulTracks: ", data)
        return data

    } catch (error) {
     console.error("Error in uploadMultipleTracks: ", error)   
    }

}