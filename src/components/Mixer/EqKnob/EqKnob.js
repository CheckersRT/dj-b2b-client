import handleEq from "./handleEq";

export default function EqKnob({channel, param}) {

  return (
    <>
      <label htmlFor={`ch${channel}-eq-${param}`}>{param}</label>
      <input
        name={`ch${channel}-eq-${param}`}
        id={`ch${channel}-eq-${param}`}
        type="range"
        min={-20}
        max={20}
        defaultValue={0}
        onChange={(event) => handleEq(event, channel, param, "send")}
      />
    </>
  );
}
