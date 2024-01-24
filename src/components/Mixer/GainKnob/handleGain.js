import { gainCh1, gainCh2 } from "../../../utils/audioNodeSetUp";

export default function handleGain(event, sendReceive, channel) {
  let gainValue;
  if (event.target.value >= 0) {
    gainValue = event.target.value / 2;
  } else if (event.target.value < 0) {
    gainValue = event.target.value * 2;
  }

  if (channel === 1) {
    gainCh1.gain.value = gainValue;
  } else if (channel === 2) {
    gainCh2.gain.value = gainValue;
  }
}
