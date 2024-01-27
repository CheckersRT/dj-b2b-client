import { crossFader } from "../../../utils/audioNodeSetUp";

export default function handleCrossFader(xValue, sendReceive, maxX) {
  // crossfader starting position = 0.5 between 0 and 1

  // animation position = 0 between  -width/2 and +width/2
  const fadePercentage = xValue / maxX;
  // x value / width
  console.log("fadePercentage: ", fadePercentage);
  // 0.5 + percentage(negative or positive)
  const crossFaderValue = 0.5 + fadePercentage;
  if (crossFaderValue <= 0) {
    crossFader.fade.value = 0;
  } else if (crossFaderValue >= 0.99){
    crossFader.fade.value = 1;
  } else {
    crossFader.fade.value = crossFaderValue;
  }
  console.log(crossFaderValue);
}
