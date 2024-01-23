import {crossFader} from "../../../utils/audioNodeSetUp"

export default function handleCrossFader(event, sendReceive) {

        crossFader.fade.value = event.target.value

}