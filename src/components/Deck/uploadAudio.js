
const CLOUD_NAME = "dm1n4kfee";
const UPLOAD_PRESET = "y0myraqm";

const uploadAudio = async (fileData) => {

    if (!fileData) return;

    const formData = new FormData();
    formData.append("file", fileData);
    formData.append("upload_preset", UPLOAD_PRESET);
    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/video/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      const url = data.secure_url;
      console.log(url);
      return url;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  export default uploadAudio;