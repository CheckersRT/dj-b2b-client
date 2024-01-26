import Channel from "./Channel/Channel";
// import styles from "./Mixer.module.css";
import CrossFader from "./CrossFader/CrossFader";
import styled from "styled-components";
import EqKnob from "./EqKnob/EqKnob";
import GainKnob from "./GainKnob/GainKnob";
import VolumeFader from "./VolumeFader/VolumeFader";
import BasicKnob from "./BasicKnob/BasicKnob";
import VolumeFaderMk2 from "./VolumeFaderMk2/VolumeFaderMk2";
import ChannelMk2 from "./ChannelMk2/ChannelMk2";

export default function Mixer({ className, params }) {
  return (
    <StyledMixer className={className}>
      <StyledChannel1 className={className} channel={1}>
      </StyledChannel1>
      <StyledChannel2 className={className} channel={2}>
      </StyledChannel2>
      <StyledCrossFader className={className} />
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
  grid-template-rows: 6fr 1fr;
  border: 1px gray solid;
  max-height: 100%;
  width: 100%;
  // padding: 5% 0;
`;

const StyledChannel1 = styled(ChannelMk2)`
  grid-area: a;

`;
const StyledChannel2 = styled(ChannelMk2)`
  grid-area: b;

`;

const StyledCrossFader = styled(CrossFader)`
  grid-area: c;
  border: 1px pink solid;
  width: 100%;
`;
