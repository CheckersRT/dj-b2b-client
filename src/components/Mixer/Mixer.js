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
      <Crossfader className={className}/>
    </StyledMixer>
  );
}

const StyledMixer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
width: 100%;
height: 100%;
border: 1px solid green;
gap: 15%;
`
const StyledChannels = styled.div`
display: flex;
flex-direction: rows;
border: 1px solid purple;
`

// const StyledCrossfader = styled(Crossfader)`

// `