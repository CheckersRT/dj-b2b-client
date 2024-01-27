import handlePlayPause from "./handlePlayPause";
import styles from "./PlayPauseButton.module.css"
import styled from "styled-components"
import PlayPause from "./playPause.svg"

export default function PlayPauseButton({
  player,
  timeOnPlay,
  setTimeOnPlay,
  timeElapsed,
  setTimeElapsed,
  isPlayerLoading,
  className,
}) {
  return (
    <StyledDiv className={className}>
      <StyledButton
        className={className}
        onClick={() => handlePlayPause( player, "send", timeOnPlay, setTimeOnPlay, timeElapsed, setTimeElapsed)}
        disabled={isPlayerLoading ? true : false}
      ></StyledButton>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
width: 100%;
// height: 100%;
// border: 1px solid yellow;

`
const StyledButton = styled.button`
padding: 0;
margin: auto;
border: none;
height: 100%;
width: 100%;

background-image: url(${PlayPause});
background-repeat: no-repeat;
background-size: contain;
background-position: center;
background-color: white;
`