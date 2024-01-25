import handleGain from "./handleGain";
import BasicKnob from "../BasicKnob/BasicKnob";

export default function GainKnob({ className, channel }) {

  const param = "gain"
  return (
    <BasicKnob handleRotation={handleGain} channel={channel} param={param}/>
  );
}

