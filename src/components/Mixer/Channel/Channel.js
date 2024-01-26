import EqKnob from "../EqKnob/EqKnob";
import GainKnob from "../GainKnob/GainKnob";
import VolumeFader from "../VolumeFader/VolumeFader";
import styled from "styled-components";

export default function Channel({ className, channel }) {
  return (
    <Container className={className}>
      <GainKnob className={className} channel={channel} />
      <EqKnob className={className} channel={channel} param={"high"} />
      <EqKnob className={className} channel={channel} param={"mid"} />
      <EqKnob className={className} channel={channel} param={"low"} />
      {/* <FilterKnob channel={1} mixerArray={mixerArray}/> */}
      <VolumeFader className={className} channel={channel} />
    </Container>
  );
}

const Container = styled.div`

border: 1px solid green;
  `;