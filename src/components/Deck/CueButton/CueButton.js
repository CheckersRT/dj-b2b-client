import handleCue from "./handleCue";

export default function CueButton({
  player,
  setTimeElapsed,
}) {
  return (
    <button
      onClick={() => handleCue(player, setTimeElapsed) }
    >
      Cue
    </button>
  );
}
