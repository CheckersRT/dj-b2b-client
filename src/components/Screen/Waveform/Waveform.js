// import styles from "./Waveform.module.css";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { calculateWaveFormWidth } from "../../Library/getWaveformImageUrl";
import { gsap } from "gsap";

export default function Waveform({
  metaData,
  waveform,
  setWaveform,
}) {
  const [imageSrc, setImageSrc] = useState("");
  const imgRef = useRef();

  useEffect(() => {
    const imageSrc = metaData.waveformURL;
    setImageSrc(imageSrc);
    const waveformWidth = calculateWaveFormWidth(metaData.totalTime);
    const duration = metaData.totalTime;

    // if(waveform) {
    //   waveform.kill();
    // }

    const waveformAnimation = gsap.to(imgRef.current, {
      duration: duration,
      x: -waveformWidth,
      paused: true,
      ease: "none",
    });
    setWaveform(waveformAnimation);
  }, [imgRef, metaData, setWaveform]);

  return (
    // <>
    <StyledDiv ref={imgRef} 
    // onClick={() => waveform.paused(!waveform.paused())}
    >
      {imageSrc ? <img src={imageSrc} alt="waveform"></img> : null}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  position: relative;
  left: 50%;
  // border: 1px pink solid;
`;
