import Channel from "./Channel/Channel";
// import styles from "./Mixer.module.css";
import Crossfader from "./CrossFader/CrossFader";
import styled from "styled-components"

export default function Mixer({ className, params }) {
  return (
    <StyledMixer className={className}>
      <StyledChannels className={className}>
        <Channel channel={1} />
        <Channel channel={2} />
      </StyledChannels>
      <Crossfader />
    </StyledMixer>
  );
}

const StyledMixer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100%;
height: 100%;
border: 1px solid green;
`
const StyledChannels = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-auto-flow: column;
border: 1px solid purple;
height: 80%;
`