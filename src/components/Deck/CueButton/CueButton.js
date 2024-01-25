import handleCue from "./handleCue";
// import styles from "./CueButton.module.css"
import styled from "styled-components"
import Cue from "./cue.svg"

export default function CueButton({
  player,
  setTimeElapsed,
  className
}) {
  return (
    <StyledDiv className={className}>
      <StyledButton
        className={className}
        onClick={() => handleCue(player, setTimeElapsed) }
      ></StyledButton>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
width: 100%;
height: 100%;
border: 1px solid purple;
`

const StyledButton = styled.button`
padding: 0;
margin: auto;
height: 100%;
width: 100%;
border: none;
background-image: url(${Cue});
background-repeat: no-repeat;
background-size: contain;
background-position: center;
background-color: white;
`