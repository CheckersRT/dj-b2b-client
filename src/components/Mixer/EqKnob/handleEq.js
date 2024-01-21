import {eqCh1, eqCh2} from "../../../utils/audioNodeSetUp"

export default function handleEq(event, channel, param, sendReceive) {

    console.log(event.target.value)
    if(channel === 1) {
        eqCh1[param].value = event.target.value
        console.log(eqCh1[param].value)
    }
}