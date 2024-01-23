// import GainKnob from "../GainKnob/GainKnob";
import EqKnob from "../EqKnob/EqKnob";
import GainKnob from "../GainKnob/GainKnob";
import VolumeFader from "../VolumeFader/VolumeFader";

// import VolumeFader from "../VolumeFader/VolumeFader";
import styles from "./Channel.module.css";

export default function Channel({ channel }) {
  return (
    <div className={styles.container}>
      <GainKnob channel={channel} />
      <EqKnob channel={channel} param={"high"} />
      <EqKnob channel={channel} param={"mid"} />
      <EqKnob channel={channel} param={"low"} />
      {/* <FilterKnob channel={1} mixerArray={mixerArray}/> */}
      <VolumeFader channel={channel} />
    </div>
  );
}
