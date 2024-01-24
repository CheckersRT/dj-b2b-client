import handleJogWheel from "./handleJogWheel";

export default function JogWheel({ player }) {
  return (
      <input
        name={`ch${player.name}-jogWheel`}
        id={`ch${player.name}-jogWheel`}
        type="range"
        min={-1}
        max={1}
        step={0.1}
        defaultValue={0}
        onChange={(event) => handleJogWheel(event, "send", player)}
      />
  );
}
