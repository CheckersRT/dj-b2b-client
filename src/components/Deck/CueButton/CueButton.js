import handleCue from "./handleCue";

export default function CueButton({
  player,
}) {
  return (
    <button
      onClick={() => handleCue(player) }
    >
      Cue
    </button>
  );
}
