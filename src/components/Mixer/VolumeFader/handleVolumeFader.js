import {volCh1, volCh2} from "../../../utils/audioNodeSetUp"

export default function handleVolumeFader(event, sendReceive, channel) {

    if(channel === 1) {
        volCh1.volume.value = event.target.value
    } else if(channel === 2) {
        volCh2.volume.value = event.target.value
    }

}