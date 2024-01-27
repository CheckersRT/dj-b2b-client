import handleGain from "./handleGain";
import BasicKnob from "../BasicKnob/BasicKnob";

export default function GainKnob({ className, channel }) {

  const param = "GAIN"
  return (
    <BasicKnob className={className} handleRotation={handleGain} channel={channel} param={param}/>
  );
}



