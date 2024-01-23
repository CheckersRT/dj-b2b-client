import { onChange } from "./functions";
import { useState, useEffect } from "react";
import uploadAudio from "./uploadAudio";
import styles from "./Deck.module.css";
import getMetaData from "../../api/getMetaData";
import PlayPauseButton from "./PlayPauseButton/PlayPauseButton";
import JogWheel from "./JogWheel/JogWheel";
import CueButton from "./CueButton/CueButton";

export default function Deck({
  player,
  metaData,
  setMetaData,
  timeOnPlay,
  setTimeOnPlay,
  timeElapsed,
  setTimeElapsed,
  playerUrl,
  setPlayerUrl,
  isPlayerLoading,
  setIsPlayerLoading,
}) {
  const [fileData, setFileData] = useState("");
  // const [playerUrl, setPlayerUrl] = useState("");

  function play() {
    player.start();
    setTimeOnPlay(player.immediate());
    // cannot press play unless buffer has loaded
  }

  console.log(player.loaded);
  // console.log(metaData)

  async function onSubmit(event, fileData) {
    event.preventDefault();
    setIsPlayerLoading(true);

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
      setIsPlayerLoading(false);
    }
  }, [playerUrl]);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h3>Player</h3>
        <p>{metaData && metaData.title}</p>
        <p>{metaData && metaData.artist}</p>
        <p>{metaData && metaData.album}</p>
        <p>{metaData && metaData.track}</p>
        <p>{metaData && metaData.duration}</p>
        <p>{metaData && metaData.bpm}</p>
        <p>{metaData && metaData.tonality}</p>
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
      <p>{isPlayerLoading && "Loading..."}</p>
      <JogWheel player={player}/>
      <CueButton player={player}/>
      <PlayPauseButton
        timeOnPlay={timeOnPlay}
        setTimeOnPlay={setTimeOnPlay}
        timeElapsed={timeElapsed}
        setTimeElapsed={setTimeElapsed}
        player={player}
        isPlayerLoading={isPlayerLoading}
      />
    </div>
  );
}
