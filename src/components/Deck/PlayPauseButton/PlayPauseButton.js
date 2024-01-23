import handlePlayPause from "./handlePlayPause";

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
      onClick={() => handlePlayPause(player, "send", timeOnPlay, setTimeOnPlay, timeElapsed, setTimeElapsed)}
      disabled={isPlayerLoading ? true : false}
    >
      Play/Pause
    </button>
  );
}
