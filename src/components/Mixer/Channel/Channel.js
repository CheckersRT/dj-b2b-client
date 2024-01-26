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
  // display: flex;
  // flex-direction: column;
  // width: 100%;
  // border: 2px solid black;
  `;

// const StyledGainKnob = styled(GainKnob)`
// flex-grow: 1;

// `;

// const StyledEqKnob = styled(EqKnob)`
// flex-grow: 1;

// `;

// const StyledVolumeSlider = styled(VolumeFader)`
// flex-grow: 3;

// `;
