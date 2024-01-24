// import styles from "./Waveform.module.css";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { calculateWaveFormWidth } from "../../Library/getWaveformImageUrl";

export default function Waveform({ player, metaData }) {
  const [isWaveformScrolling, setIsWavefromScrolling] = useState(false);
  const imageSrc = metaData.waveformURL;

  useEffect(() => {
    if (player.state === "started") {
      setIsWavefromScrolling(true);
      console.log("state changed");
    } else if (player.state === "stopped") {
      setIsWavefromScrolling(false);
    }
  }, [player.state]);

  const totalTime = metaData.totalTime;
  console.log(totalTime);
  const duration = `${totalTime}s`;
  console.log(duration);
  const waveformWidth = calculateWaveFormWidth(totalTime);
  console.log(waveformWidth);
  // const waveformprop = `calc(-${waveformWidth}px + 40vw)`
  // console.log(waveformprop);
  const to = waveformWidth;

  return (
    <StyledDiv
      $animation={isWaveformScrolling ? true : false}
      $to={to}
      $duration={duration}
      // className={`${styles.waveform} ${isWaveformScrolling && styles.scroll}`}
    >
      <img src={imageSrc} alt="waveform"></img>
    </StyledDiv>
  );
}


const scroll = (from, to) => keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-${to}px + 40vw));
  }
`;

const StyledDiv = styled.div`
  position: relative;
  left: 40vw;
  background-color: blue;

  animation: ${props => props.animation ? 
    props => scroll(props.$from, props.$to) : null} ${(props) => props.$duration}
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

// const scrollingWaveform = (from, to) => keyframes`
//   from {
//     left: ${from}vw
//   }
//   to {
//     left: ${to}px
//   }
// `;
