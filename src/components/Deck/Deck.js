import { getMetaData, onChange } from "./functions";
import { useState, useEffect } from "react";
import uploadAudio from "./uploadAudio";
import styles from "./Deck.module.css"

export default function Deck({ player, metaData, setMetaData, setTimeOnPlay }) {
  const [isTrackLoading, setIsTrackLoading] = useState(false);
  const [fileData, setFileData] = useState("");
  const [playerUrl, setPlayerUrl] = useState("");

  function play() {
    player.start();
    setTimeOnPlay(player.immediate())
    // cannot press play unless buffer has loaded
  }

  console.log(player.loaded);
  // console.log(metaData)


  async function onSubmit(event, fileData) {
    event.preventDefault();
    setIsTrackLoading(true);

    const playerUrl = await uploadAudio(fileData);
    // await loadTrack(fileData)

    if (playerUrl) {
      const metaData = await getMetaData(playerUrl);
      setMetaData(metaData);
      setPlayerUrl(playerUrl);
    }
  }

  useEffect(() => {
    if (playerUrl !== "") {
      console.log("playerUrl in useEffect:", playerUrl);

      player.load(playerUrl);
      console.log(player.loaded);
      setIsTrackLoading(false);
    }
  }, [playerUrl]);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
            <h3>Player</h3>
            <p>
            Billy Hologram (Original Mix)
            </p>
            <p>Milanese</p>
            <p>fabric presents Overmono</p>
            <p>8</p>
          </div>
      <form name="uploadForm" onSubmit={(event) => onSubmit(event, fileData)}>
        <label htmlFor="upload">Upload</label>
        <input
          type="file"
          name="upload"
          onChange={(event) => onChange(event, setFileData)}
        ></input>
        <button type="submit">Load</button>
      </form>
      <p>{isTrackLoading && "Loading..."}</p>
      <button onClick={play} disabled={isTrackLoading ? true : false}>
        Play
      </button>
    </div>
  );
}
