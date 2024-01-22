import Channel from "./Channel/Channel";
import styles from "./Mixer.module.css"

export default function Mixer({params}) {
    return (
        <div className={styles.container}>
            <Channel channel={1}/>
            <Channel channel={2}/>
        </div>
    )
}