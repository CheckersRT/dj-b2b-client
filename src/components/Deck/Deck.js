import { getMetaData, loadTrack, onChange } from "./functions";
import { useState, useEffect } from "react";
import uploadAudio from "./uploadAudio";

export default function Deck({ player, setMetaData }) {
  const [isTrackLoading, setIsTrackLoading] = useState(false);
  const [fileData, setFileData] = useState("");
  const [playerUrl, setPlayerUrl] = useState("");

  function play() {
    player.start();
  }

  async function onSubmit(event, fileData) {
    event.preventDefault();

    const playerUrl = await uploadAudio(fileData);
    setIsTrackLoading(true);
    // await loadTrack(fileData)
    
    if (playerUrl) {
      const metaData = await getMetaData(playerUrl);
      setMetaData(metaData);
      setPlayerUrl(playerUrl);
      setIsTrackLoading(false);

    }
  }

  useEffect(() => {
    if (playerUrl !== "") {
      console.log("playerUrl in useEffect:", playerUrl);
    }
  }, [playerUrl]);

  return (
    <>
      <p>Player</p>
      <form name="uploadForm" onSubmit={(event) => onSubmit(event, fileData)}>
        <label htmlFor="upload">Upload</label>
        <input
          type="file"
          name="upload"
          onChange={(event) => onChange(event, setFileData)}
        ></input>
        <button type="submit">Load</button>
      </form>
      <button onClick={play}>Play</button>
    </>
  );
}
