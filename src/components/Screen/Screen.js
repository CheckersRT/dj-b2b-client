import Clock from "./Clock.js/Clock";
import Waveform from "./Waveform/Waveform";
import styles from "./Screen.module.css";

export default function Screen({
  player1,
  player2,
  metaDataCh1,
  metaDataCh2,
  timeElapsedCh1,
  timeElapsedCh2,
}) {

  
  return (
    <>
      <div className={styles.container}>
          <Waveform player={player1} metaData={metaDataCh1} />
          <Waveform player={player2} metaData={metaDataCh2} />
      </div>
      <Clock player={player1} timeElapsed={timeElapsedCh1} />
      <Clock player={player2} timeElapsed={timeElapsedCh2} />
    </>
  );
}
