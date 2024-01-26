import EqKnob from "../EqKnob/EqKnob";
import GainKnob from "../GainKnob/GainKnob";
import VolumeFader from "../VolumeFader/VolumeFader";
import styled from "styled-components";

export default function Channel({ className, channel }) {
  return (
    <Container className={className}>
      <StyledGainKnob className={className} channel={channel} />
      <StyledEqKnob className={className} channel={channel} param={"high"} />
      <StyledEqKnob className={className} channel={channel} param={"mid"} />
      <StyledEqKnob className={className} channel={channel} param={"low"} />
      {/* <FilterKnob channel={1} mixerArray={mixerArray}/> */}
      <StyledVolumeFader className={className} channel={channel} />
    </Container>
  );
}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
// border: 1px solid green;

`;

const StyledVolumeFader = styled(VolumeFader)`
flex-grow: 2;
`
const StyledGainKnob = styled(GainKnob)`
flex-grow: 1;
`
const StyledEqKnob = styled(EqKnob)`
flex-grow: 1;
`
