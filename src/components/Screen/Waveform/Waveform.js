import { waveformCh1, waveformCh2 } from "../../../utils/audioNodeSetUp"
import styles from "./Waveform.module.css"

export default function Waveform({metaData}) {

    const baseUrl = "https://res.cloudinary.com/dm1n4kfee/video/upload/"
    const waveformSettings = "c_scale,h_50,w_14000/b_white,co_black,fl_waveform/"
    const fileName = "zunql45o377mo2hobplr"

    const imageSrc = baseUrl + waveformSettings + fileName + ".png"
    

    return (
        <img src={imageSrc}></img>
    )
}