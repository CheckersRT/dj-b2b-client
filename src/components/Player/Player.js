import { onChange, onSubmit } from "./functions";
import { useState, useEffect, useRef } from "react";
import { Player } from "tone";

const player = new Player({
  url: "/8096989_Rub_(Original Mix).mp3",
  onload: () => {
    console.log("loaded");
  },
}).toDestination();

export default function Players({ channel }) {
  const [fileData, setFileData] = useState("");
  const [playerUrl, setPlayerUrl] = useState("");

  const playerRef = useRef(player);

  function play() {
    playerRef.current.start();
  }

  function onSubmit(event) {
    event.preventDefault();
    setPlayerUrl("/8096985_Sheen_(Original Mix).mp3");
  }

  useEffect(() => {
    if(playerUrl !== "") {
      console.log("playerUrl in useEffect:", playerUrl);
      playerRef.current.load(playerUrl);
    }
  }, [playerUrl]);

  return (
    <>
      <p>Player</p>
      <form name="uploadForm" onSubmit={(event) => onSubmit(event)}>
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
