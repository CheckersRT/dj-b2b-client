import handleVolumeFader from "./handleVolumeFader";

export default function VolumeFader({ channel }) {
  return (
    <>
      <label htmlFor={`ch${channel}-player-volume`}>Volume</label>
      <input
        name={`ch${channel}-player-volume`}
        id={`ch${channel}-player-volume`}
        type="range"
        min={-30}
        max={0}
        defaultValue={-2}
        onChange={(event) => handleVolumeFader(event, "send", channel)}
      />
    </>
  );
}
