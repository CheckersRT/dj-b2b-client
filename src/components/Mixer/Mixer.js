import Channel from "./Channel/Channel";
// import styles from "./Mixer.module.css";
import Crossfader from "./CrossFader/CrossFader";
import styled from "styled-components";
import EqKnob from "./EqKnob/EqKnob";
import GainKnob from "./GainKnob/GainKnob";
import VolumeFader from "./VolumeFader/VolumeFader";

export default function Mixer({ className, params }) {
  return (
    <StyledMixer className={className}>
      <StyledChannel1 className={className} channel={1} />
      <StyledChannel2 className={className} channel={2} />
      <StyledCrossfader className={className} />
    </StyledMixer>
  );
}

const StyledMixer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-areas:
    "a b"
    "c c";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 5fr 2fr;
  border: 1px gray solid;
`;

const StyledChannel1 = styled(Channel)`
  grid-area: a;
`;
const StyledChannel2 = styled(Channel)`
  grid-area: b;
`;

const StyledCrossfader = styled(Crossfader)`
  grid-area: c;
`;
