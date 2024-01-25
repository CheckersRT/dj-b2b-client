import { gainCh1, gainCh2 } from "../../../utils/audioNodeSetUp";

export default function handleGain(rotation, sendReceive, channel) {
  let gainValue;
  if (rotation >= 0) {
    const percentage = rotation / 150;
    gainValue = percentage * 9
  } else if (rotation < 0) {
    const percentage = rotation / 150;
    gainValue = (percentage * 50);
    
  }

  if (channel === 1) {
    gainCh1.gain.value = gainValue;
  } else if (channel === 2) {
    gainCh2.gain.value = gainValue;
  }
}
