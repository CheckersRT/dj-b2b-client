import {eqCh1, eqCh2} from "../../../utils/audioNodeSetUp"

export default function handleEq(rotation, sendReceive, channel, param) {

    let gainValue;
    if (rotation >= 0) {
      const percentage = rotation / 150;
      gainValue = percentage * 6
    } else if (rotation < 0) {
      const percentage = rotation / 150;
      gainValue = percentage * 26;
      
    }




    if(channel === 1) {
        eqCh1[param].value = gainValue
        console.log(eqCh1[param].value)
    } else if(channel === 2) {
        eqCh2[param].value = gainValue
        console.log(eqCh2[param].value)
    }
}
