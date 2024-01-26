import handleGain from "./handleGain";
import BasicKnob from "../BasicKnob/BasicKnob";
import styled from "styled-components"

export default function GainKnob({ className, channel }) {

  const param = "gain"
  return (
    <StyledBasicKnob className={className} handleRotation={handleGain} channel={channel} param={param}/>
  );
}

const StyledBasicKnob = styled(BasicKnob)`
width: 75%;
`

