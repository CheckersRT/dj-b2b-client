import { waveformCh1, waveformCh2 } from "../../../utils/audioNodeSetUp";
import styles from "./Waveform.module.css";
import { useEffect, useState } from "react";

export default function Waveform({ player, metaData }) {
  const [isWaveformScrolling, setIsWavefromScrolling] = useState(false);

console.log(player.state)

  const baseUrl = "https://res.cloudinary.com/dm1n4kfee/video/upload/";
  const waveformSettings = "c_scale,h_50,w_14000/b_white,co_black,fl_waveform/";
  const fileName = "zunql45o377mo2hobplr";

  const imageSrc = baseUrl + waveformSettings + fileName + ".png";
  const cloudinaryApiKey = process.env.CLOUDINARY_API_KEY;
  console.log(cloudinaryApiKey);
  // getMetaData()
  useEffect(() => {

      if (player.state === "started") {
        setIsWavefromScrolling(true);
        console.log("state changed")
      } else if (player.state === "stopped") {
        setIsWavefromScrolling(false);
      }
  }, [player.state])

  return (
    <div className={`${styles.waveform} ${isWaveformScrolling && styles.scroll}`}>
      <img src={imageSrc} alt="waveform"></img>
    </div>
  );
}

async function getMetaData() {
  const response = await fetch(
    `https://${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}@api.cloudinary.com/v1_1/resources/video/upload/zunql45o377mo2hobplr?image_metadata=true`
  );

  const data = response.json();
  console.log(data);
}
