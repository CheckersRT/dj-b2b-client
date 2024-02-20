// import styles from "./Waveform.module.css";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { calculateWaveFormWidth } from "../../Library/getWaveformImageUrl";
import { gsap } from "gsap";

export default function Waveform({
  metaData,
  waveform,
  setWaveform,
  tempoChangePercentage,
}) {
  const [imageSrc, setImageSrc] = useState("");
  const [waveformWidth, setWaveformWidth] = useState(0);
  const [waveformTotalWidth, setWaveformTotalWidth] = useState(0)

  const imgRef = useRef();

useEffect(() => {
  const imageUrl = metaData.waveformURL;
  setImageSrc(imageUrl);
  const waveformTotalWidth = calculateWaveFormWidth(metaData.totalTime);
  setWaveformTotalWidth(waveformTotalWidth)

  const waveformAnimation = gsap.to(imgRef.current, {
    duration: metaData.totalTime,
    x: -waveformTotalWidth,
    paused: true,
    ease: "none",
  });
  setWaveform(waveformAnimation);

}, [metaData, setWaveform])

  useEffect(() => {
      
      setTimeout(() => {
      const waveformWidthAdjustedForTempo =
      waveformTotalWidth + waveformTotalWidth * -tempoChangePercentage;

      setWaveformWidth(waveformWidthAdjustedForTempo);
    }, 500)


  }, [tempoChangePercentage, waveformTotalWidth]);

  return (
    // <>
    <StyledDiv
      ref={imgRef}
      // onClick={() => waveform.paused(!waveform.paused())}
    >
      {imageSrc ? (
        <StyledWaveformImg
          src={imageSrc}
          alt="waveform"
          $width={waveformWidth}
        ></StyledWaveformImg>
      ) : null}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  position: relative;
  left: 50%;
  // border: 1px pink solid;
`;

const StyledWaveformImg = styled.img`
  width: ${(props) => props.$width}px;
`;

