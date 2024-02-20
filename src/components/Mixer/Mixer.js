import CrossFader from "./CrossFader/CrossFader";
import styled from "styled-components";

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
  justify-items: center;
  border-top: 1px gray solid;
  border-bottom: 1px gray solid;
  // height: 100%;
  width: 100%;
  padding: 3% 0;
  row-gap: 2%;
`;

const StyledChannel1 = styled(ChannelMk2)`
  grid-area: a;
`;
const StyledChannel2 = styled(ChannelMk2)`
  grid-area: b;
`;

const StyledCrossFader = styled(CrossFader)`
  grid-area: c;
  // border: 1px pink solid;
`;
