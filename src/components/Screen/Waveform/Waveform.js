// import styles from "./Waveform.module.css";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { calculateWaveFormWidth } from "../../Library/getWaveformImageUrl";

export default function Waveform({ player, metaData }) {
  const [isWaveformScrolling, setIsWavefromScrolling] = useState(false);
  const [leftPositionOfWaveform, setLeftPositionOfWaveform] = useState()
  const imageSrc = metaData.waveformURL;

  const imgRef = useRef();

  useEffect(() => {
    if (player.state === "started") {
      setIsWavefromScrolling(true);
      console.log("state changed");
    } else if (player.state === "stopped") {
      setIsWavefromScrolling(false);
    }
  }, [player.state]);

  const totalTime = metaData.totalTime;
  const duration = `${totalTime}s`;
  const waveformWidth = calculateWaveFormWidth(totalTime);
  const to = waveformWidth;

  // const value = imgRef.current.getComputedStyle();

  useEffect(()=> {

    if(isWaveformScrolling === false) {

      console.log(imgRef.current.getBoundingClientRect());
      // console.log(imgRef.current.getComputedStyle());
      const {left} = imgRef.current.getBoundingClientRect()
      console.log("left: ", left)
  

      console.log(window.getComputedStyle(imgRef.current).getPropertyValue("animation"));
      // console.log(imgRef.current.onanimationcancel());

      setLeftPositionOfWaveform(left)
    }

  }, [isWaveformScrolling])

  function handleCancel(event) {
    console.log(event)
  }

  return (
    <StyledDiv
      ref={imgRef}
      $leftPosition={leftPositionOfWaveform}
      $animation={isWaveformScrolling}
      $to={to}
      $duration={duration}
      onAnimationCancel={(() => console.log("hi"))}
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
  // left: 495px;
  // left: ${props => props.$animation === false ? props => `${props.$leftPosition}px` : null};
  // left: ${props => props.$animation === false ? props => "300px" : null};
  background-color: blue;
  animation: ${(props) =>
    props.$animation === true ? scroll(props.$from, props.$to) : null} ${(
  props
) => props.$duration};
  // tranform: translateX(400px)
  // tranform: translateX(${props => props.$leftPosition})
  // tranform: ${(props => props.$animation === false ? `translateX(${props.$leftPosition})` : null)}
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
