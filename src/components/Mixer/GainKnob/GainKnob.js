import handleGain from "./handleGain";

export default function GainKnob({channel}) {

  return (
    <>
      <label htmlFor={`ch${channel}-gain`}>gain</label>
      <input
        name={`ch${channel}-gain`}
        id={`ch${channel}-gain`}
        type="range"
        min={-20}
        max={20}
        defaultValue={0}
        onChange={(event) => handleGain(event,"send", channel)}
      />
    </>
  );
}
