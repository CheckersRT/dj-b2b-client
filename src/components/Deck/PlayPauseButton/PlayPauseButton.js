import handlePlayPause from "./handlePlayPause";
import styles from "./PlayPauseButton.module.css"

export default function PlayPauseButton({
  player,
  timeOnPlay,
  setTimeOnPlay,
  timeElapsed,
  setTimeElapsed,
  isPlayerLoading,
}) {
  return (
    <button
      className={styles.button}
      onClick={() => handlePlayPause( player, "send", timeOnPlay, setTimeOnPlay, timeElapsed, setTimeElapsed)}
      disabled={isPlayerLoading ? true : false}
    >
      Play/Pause
    </button>
  );
}
