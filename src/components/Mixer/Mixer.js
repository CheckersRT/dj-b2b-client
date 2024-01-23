import Channel from "./Channel/Channel";
import styles from "./Mixer.module.css";
import Crossfader from "./CrossFader/CrossFader";

export default function Mixer({ params }) {
  return (
    <div className={styles.container}>
      <div className={styles.channels}>
        <Channel channel={1} />
        <Channel channel={2} />
      </div>
      <Crossfader />
    </div>
  );
}
