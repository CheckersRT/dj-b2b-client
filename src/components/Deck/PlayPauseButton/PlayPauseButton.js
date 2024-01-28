import handlePlayPause from "./handlePlayPause";
import styles from "./PlayPauseButton.module.css";
import styled, { css, keyframes } from "styled-components";
import PlayPause from "./playPause.svg";

export default function PlayPauseButton({
  player,
  timeOnPlay,
  setTimeOnPlay,
  timeElapsed,
  setTimeElapsed,
  isPlayerLoading,
  className,
  waveform,
}) {
  console.log("Player.state: ", player.state);

  return (
    <StyledDiv className={className}>
      <StyledButton
        className={className}
        onClick={() =>
          handlePlayPause(
            player,
            "send",
            timeOnPlay,
            setTimeOnPlay,
            timeElapsed,
            setTimeElapsed,
            waveform
          )
        }
        disabled={isPlayerLoading ? true : false}
      >
        <RingLight
          $playing={player.state === "started" ? true : false}
        ></RingLight>
      </StyledButton>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 100%;
  // height: 100%;
  // border: 1px solid black;
`;
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
`;
const RingLight = styled.div`
  width: 72%;
  height: 85%;
  margin-top: 7%;
  margin-left: auto;
  margin-right: auto;
  border: #9cfa9b 6px solid;
  border-radius: 50%;
  // background-color: transparent;

  ${(props) =>
    props.$playing &&
    css`
      animation: ${flash} 1s steps(2, start) infinite;
    `}
`;

const flash = keyframes`

    from {
      visibility: visible;
    }
  to {
    visibility: hidden;
  }

`;
