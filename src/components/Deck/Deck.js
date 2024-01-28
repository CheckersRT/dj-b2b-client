import { onChange } from "./functions";
import { useState, useEffect } from "react";
import uploadAudio from "./uploadAudio";
import styles from "./Deck.module.css";
import getMetaData from "../../api/getMetaData";
import PlayPauseButton from "./PlayPauseButton/PlayPauseButton";
import JogWheel from "./JogWheel/JogWheel";
import CueButton from "./CueButton/CueButton";
import TempoSlider from "./TempoSlider/TempoSlider";
import TrackInfo from "./TrackInfo/TrackInfo";
import styled from "styled-components";

export default function Deck({
  // clock,
  className,
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
  waveform,
}) {
  // const [fileData, setFileData] = useState("");
  // const [playerUrl, setPlayerUrl] = useState("");

  console.log(player.loaded);
  // console.log(metaData)

  // async function onSubmit(event, fileData) {
  //   event.preventDefault();
  //   setIsPlayerLoading(true);

  //   const playerUrl = await uploadAudio(fileData);
  //   // await loadTrack(fileData)

  //   if (playerUrl) {
  //     const metaData = await getMetaData(playerUrl);
  //     setMetaData(metaData);
  //     setPlayerUrl(playerUrl);
  //   }
  // }

  useEffect(() => {
    if (playerUrl !== "") {
      console.log("playerUrl in useEffect:", playerUrl);
      player.load(playerUrl);
      setTimeElapsed(0);
      console.log(player.loaded);
      setIsPlayerLoading(false);
    }
  }, [playerUrl, setTimeElapsed, setIsPlayerLoading]);

  return (
    <Container className={className}>
      <TrackInfoGridA
        className={className}
        metaData={metaData}
        isPlayerLoading={isPlayerLoading}
      />
      <JogWheelGridB className={className} player={player} waveform={waveform}/>
      <TempoSliderGridC className={className} player={player} waveform={waveform}/>
      <CueButtonGridD
        className={className}
        player={player}
        setTimeElapsed={setTimeElapsed}
        timeElapsed={timeElapsed}
        waveform={waveform}
      />
      <PlayPauseButtonGridE
        className={className}
        timeOnPlay={timeOnPlay}
        setTimeOnPlay={setTimeOnPlay}
        timeElapsed={timeElapsed}
        setTimeElapsed={setTimeElapsed}
        player={player}
        isPlayerLoading={isPlayerLoading}
        waveform={waveform}
      />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-areas:
    "a a a a a a"
    "b b b b b b"
    ". . . . . c"
    "d . . . . c"
    "e . . . . c";
  grid-template-rows: 1fr 6fr 1fr 2fr 2fr;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 2fr;
  height: 75vh;
  padding: 2% 3% 2% 3%;
  border: 1px gray solid;
`;

const TrackInfoGridA = styled(TrackInfo)`
  grid-area: a;
  // grid-row: 1;
  // grid-column: 1 / -1;
`;
const JogWheelGridB = styled(JogWheel)`
  grid-area: b;
  // grid-row: 2;
  // grid-column: 1 / -1;
`;
const TempoSliderGridC = styled(TempoSlider)`
  grid-area: c;
  // grid-row: 3 / -1;
  // grid-column: 5 / 6:
`;
const CueButtonGridD = styled(CueButton)`
  grid-area: d;
  // grid-row: 4;
  // grid-column: 1;
`;
const PlayPauseButtonGridE = styled(PlayPauseButton)`
  grid-area: e;
  // grid-row: 5;
  // grid-column: 1;
`;
