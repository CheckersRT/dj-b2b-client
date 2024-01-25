// import styles from "./Waveform.module.css";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { calculateWaveFormWidth } from "../../Library/getWaveformImageUrl";
import { gsap } from "gsap";

export default function Waveform({ player, metaData }) {
  const [isWaveformScrolling, setIsWavefromScrolling] = useState(false);
  const [leftPositionOfWaveform, setLeftPositionOfWaveform] = useState();
  const [waveform, setWaveform] = useState();
  const imgRef = useRef();
  // const imageSrc = metaData.waveformURL;
  const imageSrc =
    "https://res.cloudinary.com/dm1n4kfee/video/upload/c_scale,h_50,w_9036/b_white,co_black,fl_waveform/16730547_Love_Letter_feat._The_Knocks_feat._The_Knocks__Original_Mix.png";

  // const waveformWidth = calculateWaveFormWidth(metaData.totalTime);
  const waveformWidth = calculateWaveFormWidth(253);

  console.log(player.state)

  useEffect(() => {
    const waveform = gsap.to(imgRef.current, {
      // duration: metaData.totalTime,
      duration: 20,
      x: -400,
      paused: true,
      ease: "none",
    });
    console.log("Paused?: ", waveform.vars.paused);

    setWaveform(waveform);
  }, [imgRef]);

  useEffect(() => {
    if (player.state === "started") {
      waveform.play() || waveform.resume();
    } else if (waveform && player.state === "stopped") {
      console.log(waveform);
      waveform.pause();
    }
  }, [player.state, waveform]);

  return (
    <>
      <div ref={imgRef} onClick={() => waveform.paused(!waveform.paused())}>
        <img src={imageSrc} alt="waveform"></img>
      </div>
    </>
  );
}

