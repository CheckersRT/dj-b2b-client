import Clock from "./Clock.js/Clock";
import Waveform from "./Waveform/Waveform";
import styles from "./Screen.module.css";

export default function Screen({
  player1,
  player2,
  metaDataCh1,
  metaDataCh2,
  timeOnPlayCh1,
  timeOnPlayCh2,
}) {

  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.waveform}>
          <Waveform metaData={metaDataCh1} />
        </div>
        <div className={styles.waveform}>
          <Waveform metaData={metaDataCh2} />
        </div>
      </div>
      <Clock player={player1} timeOnPlay={timeOnPlayCh1} />
      <Clock player={player2} timeOnPlay={timeOnPlayCh2} />
    </>
  );
}
