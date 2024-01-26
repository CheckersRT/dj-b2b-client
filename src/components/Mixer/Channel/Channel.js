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

const StyledGainKnob = styled(GainKnob)`
// flex-grow: 1;
`
const StyledVolumeFader = styled(VolumeFader)`
// flex-grow: 2;
`
const StyledEqKnob = styled(EqKnob)`
// flex-grow: 1;
`
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid green;

> ${StyledGainKnob} {
  border: 1px pink solid;
  flex-grow: 1;
}
> ${StyledEqKnob} {
  border: 1px pink solid;
  flex-grow: 1;

}
> ${StyledVolumeFader} {
  // margin-top: 10%;
  border: 1px brown solid;
  flex-grow: 5;
  width: 75%;
  // height: 100%;
}

`;

