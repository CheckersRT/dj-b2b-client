import uploadMultipleTracks from "../../../api/uploadMultipleTracks";
import getMetaData from "../../../api/getMetaData";

export async function handleChange(event, setFileData) {
  const files = event.target.files;
  console.log("Files: ", files);

  setFileData(files);
}

export async function handleSubmit(
  event,
  fileData,
  setTrackList,
  setCollection,
  setFileData,
  setIsTrackUploading
) {
  event.preventDefault();

  const formData = new FormData();
  for (let i = 0; i < fileData.length; i++) {
    formData.append("files", fileData[i]);
  }
  console.log("FileData from handleSubmit: ", fileData);

  setIsTrackUploading(["Loading"])

  // send to server to get metadata from temp saved files
  const newTracksMetaData = await getMetaData(formData);
  setTrackList((prevTrackList) => [
    ...prevTrackList,
    ...newTracksMetaData.metaData,
  ]);

  setIsTrackUploading(newTracksMetaData.metaData.map((track) => track.name));

  // sends data to server for processing, returns array of full track docs from db
  const { tracks } = await uploadMultipleTracks(formData);
  console.log("Tracks: ", tracks);

  setTrackList((prevTrackList) =>
    prevTrackList.map((track) => {
      const matchingTrack = tracks.find((t) => t.name === track.name);
      if (matchingTrack) {
        return {
          ...track,
          kind: matchingTrack.kind,
          size: matchingTrack.size,
          totalTime: matchingTrack.totalTime,
          dateAdded: matchingTrack.dateAdded,
          bitRate: matchingTrack.bitRate,
          url: matchingTrack.url,
          publicID: matchingTrack.publicID,
          waveformURL: matchingTrack.waveformURL,
          coverArt: matchingTrack.coverArt,
        };
      }
      return track;
    })
  );
  // setCollection(trackList.tracks)
  setIsTrackUploading([]);
  event.target.reset();
  setFileData([]);
}
