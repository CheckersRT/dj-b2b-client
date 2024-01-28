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
  waveformCh1,
  waveformCh2,
  setWaveformCh1,
  setWaveformCh2,
  tempoChangePercentageCh1,
  tempoChangePercentageCh2,
}) {
  return (
    <Container className={className}>
      {/* <div className={styles.container}> */}
      <PlaybackLine className={className}></PlaybackLine>
      <Waveform
        className={className}
        waveform={waveformCh1}
        setWaveform={setWaveformCh1}
        metaData={metaDataCh1}
        tempoChangePercentage={tempoChangePercentageCh1}
      />
      <Waveform
        className={className}
        waveform={waveformCh2}
        setWaveform={setWaveformCh2}
        metaData={metaDataCh2}
        tempoChangePercentage={tempoChangePercentageCh2}
      />
      {/* </div> */}
      {/* <Clock player={player1} timeElapsed={timeElapsedCh1} />
      <Clock player={player2} timeElapsed={timeElapsedCh2} /> */}
    </Container>
  );
}

const Container = styled.div`
  height: 22%;
  width: 100%;
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
