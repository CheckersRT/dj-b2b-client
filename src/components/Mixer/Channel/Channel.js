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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  // width: 100%;
  // height: 100%;
  gap: 10%;
  background-color: blue;
`;

// const StyledGainKnob = styled(GainKnob)`
//   width: 100%;
//   height: 15%;
//   // background-color: blue;
// `;

// const StyledEqKnob = styled(EqKnob)`
//   width: 100%;
//   height: 15%;
// `;

// const StyledVolumeSlider = styled(VolumeFader)`
//   width: 80%;
//   background-color: red;
//   height: 40%;
// `;
