import Clock from "./Clock.js/Clock";
import Waveform from "./Waveform/Waveform";
import styles from "./Screen.module.css";
import styled from "styled-components";

export default function Screen({
  className,
  player1,
  player2,
  metaDataCh1,
  metaDataCh2,
  timeElapsedCh1,
  timeElapsedCh2,
}) {
  return (
    <Container className={className}>
      {/* <div className={styles.container}> */}
      <PlaybackLine className={className}></PlaybackLine>
      <Waveform
      className={className}
        player={player1}
        metaData={metaDataCh1}
        timeElapsed={timeElapsedCh1}
      />
      <Waveform
      className={className}
        player={player2}
        metaData={metaDataCh2}
        timeElapsed={timeElapsedCh2}
      />
      {/* </div> */}
      {/* <Clock player={player1} timeElapsed={timeElapsedCh1} />
      <Clock player={player2} timeElapsed={timeElapsedCh2} /> */}
    </Container>
  );
}

const Container = styled.div`
  height: 22%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid black;
  border-bottom: none;
  position: relative;
  overflow: hidden;
`;

const PlaybackLine = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  border-right: 3px solid white;
  z-index: 2;
`;
