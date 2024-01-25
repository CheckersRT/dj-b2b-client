import EqKnob from "../EqKnob/EqKnob";
import GainKnob from "../GainKnob/GainKnob";
import VolumeFader from "../VolumeFader/VolumeFader";
import styled from "styled-components"


export default function Channel({ className, channel }) {
  return (
    <Container className={className}>
      <GainKnob channel={channel} />
      <EqKnob channel={channel} param={"high"} />
      <EqKnob channel={channel} param={"mid"} />
      <EqKnob channel={channel} param={"low"} />
      {/* <FilterKnob channel={1} mixerArray={mixerArray}/> */}
      <VolumeFader channel={channel} />
    </Container>
  );
}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
`