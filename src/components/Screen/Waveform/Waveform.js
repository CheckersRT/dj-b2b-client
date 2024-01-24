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
  const to = "-17700px";
  const from = "40vw";

  return (
    <StyledDiv
    $to={to}
    $from={from}
      $duration={duration}
      // className={`${styles.waveform} ${isWaveformScrolling && styles.scroll}`}
    >
      <img src={imageSrc} alt="waveform"></img>
    </StyledDiv>
  );
}

const scroll = keyframes`
// from {left: ${(props) => props.$from};}
from {left: 40vw;}

// to {left: -17700px;}
to {left: ${(props) => props.$to};}
`;

const StyledDiv = styled.div`
  position: relative;
  left: 40vw;
  background-color: blue;

  animation-name: ${scroll};
  animation-duration: ${(props) => props.$duration};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;
