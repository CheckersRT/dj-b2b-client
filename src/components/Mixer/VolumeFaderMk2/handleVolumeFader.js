import { volCh1, volCh2 } from "../../../utils/audioNodeSetUp";

export default function handleVolumeFader(yValue, sendReceive, channel) {
  if (channel === 1) {
    volCh1.volume.value = yValue / 2
  } else if (channel === 2) {
    volCh2.volume.value = yValue / 2
  }
}
