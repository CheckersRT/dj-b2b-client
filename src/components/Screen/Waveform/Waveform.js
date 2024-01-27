// import styles from "./Waveform.module.css";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { calculateWaveFormWidth } from "../../Library/getWaveformImageUrl";
import { gsap } from "gsap";

export default function Waveform({ player, metaData, timeElapsed }) {
  const [waveform, setWaveform] = useState();
  const [imageSrc, setImageSrc] = useState("")
  const imgRef = useRef();

  useEffect(() => {
    const imageSrc = metaData.waveformURL;
    setImageSrc(imageSrc);
    const waveformWidth = calculateWaveFormWidth(metaData.totalTime);
    const duration = metaData.totalTime

    const waveform = gsap.to(imgRef.current, {
      duration: duration,
      x: -waveformWidth,
      paused: true,
      ease: "none",
    });
    setWaveform(waveform);
  }, [imgRef, metaData]);

  useEffect(() => {
    if (player.state === "started") {
      waveform.play() || waveform.resume();
    } else if (waveform && player.state === "stopped" && timeElapsed !== 0) {
      console.log(waveform);
      waveform.pause();
    } else if (waveform && player.state === "stopped" && timeElapsed === 0) {

      waveform.restart().pause()
    }
  }, [player.state, waveform, timeElapsed]);

  return (    
      <StyledDiv ref={imgRef} onClick={() => waveform.paused(!waveform.paused())}>
        {imageSrc ? <img src={imageSrc} alt="waveform"></img> : null}
      </StyledDiv>
  );
}

const StyledDiv = styled.div`
position: relative;
left: 50%;
// border: 1px pink solid;
`
