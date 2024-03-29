import handleCue from "./handleCue";
import styled from "styled-components"
import Cue from "./cue.svg"
import { useEffect, useState } from "react";

export default function CueButton({
  player,
  timeElapsed,
  setTimeElapsed,
  className,
  waveform,
}) {
const [playOnHold, setPlayOnHold] = useState(false)

useEffect(() => {

  if(player.state === "stopped" && playOnHold) {
      player.start(0,0)
      waveform.play()
    }
}, [playOnHold, player, waveform])

  return (
    // <StyledDiv className={className}>
      <StyledButton
        className={className}
        onClick={() => handleCue(player, setTimeElapsed, timeElapsed, waveform) }
        onMouseDown={() => setPlayOnHold(true)}
        onMouseUp={() => setPlayOnHold(false)}
      >
        <RingLight></RingLight>
      </StyledButton>
    // </StyledDiv>
  );
}

const StyledDiv = styled.div`
width: 100%;
// height: 100%;
// border: 1px solid purple;
`

const StyledButton = styled.button`
padding: 0;
margin: auto;
height: 100%;
width: 100%;
min-width: 100px;
min-height: 100px;
border: none;
background-image: url(${Cue});
background-repeat: no-repeat;
background-size: contain;
background-position: center;
background-color: white;
`

const RingLight = styled.div`
width: 94px;
height: 94px;
  margin: auto auto auto auto;
  border: #fadc5a 5.5px solid;
  border-radius: 50%;
  // background-color: transparent;
`;