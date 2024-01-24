import handleCrossFader from "./handleCrossFader";

export default function Crossfader() {
  return (
    <>
      <label htmlFor="chAll-crossFader-fade">Crossfader</label>
      <input
        name="chAll-crossFader-fade"
        id="chAll-crossFader-fade"
        type="range"
        min={0}
        max={1}
        step={0.01}
        defaultValue={0.5}
        onChange={(event) => handleCrossFader(event, "send")}
      />
    </>
  );
}
