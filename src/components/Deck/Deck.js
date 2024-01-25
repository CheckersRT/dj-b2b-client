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
      // clock.stop()
      console.log(player.loaded);
      setIsPlayerLoading(false);
    }
  }, [playerUrl]);

  return (
    <Container>
      <TrackInfoGridA metaData={metaData} isPlayerLoading={isPlayerLoading} />
      <JogWheelGridB player={player} />
      <TempoSliderGridC player={player} />
      <CueButtonGridD player={player} setTimeElapsed={setTimeElapsed} />
      <PlayPauseButtonGridE
        timeOnPlay={timeOnPlay}
        setTimeOnPlay={setTimeOnPlay}
        timeElapsed={timeElapsed}
        setTimeElapsed={setTimeElapsed}
        player={player}
        isPlayerLoading={isPlayerLoading}
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
  grid-template-rows: 10% 50% 10% 15% 15%;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 2fr;
  height: 100%;
`;

const TrackInfoGridA = styled(TrackInfo)`
  grid-area: a;
`;
const JogWheelGridB = styled(JogWheel)`
  grid-area: b;
`;
const TempoSliderGridC = styled(TempoSlider)`
  grid-area: c;
`;
const CueButtonGridD = styled(CueButton)`
  grid-area: d;
`;
const PlayPauseButtonGridE = styled(PlayPauseButton)`
  grid-area: e;
`;
