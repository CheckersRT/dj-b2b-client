export default function handleTempoSlider(
  yValue,
  sendReceive,
  player,
  maxY,
  setTempoChangePercentage
) {


  const percentageOfSlide = (yValue / maxY).toFixed(3)

  console.log("percentageOfSlide", percentageOfSlide)


  // const test = yValue

  const percentageOfTempo = percentageOfSlide * 12 / 100;
  console.log("percentage of tempo", percentageOfTempo)
  const tempoTwoDecimal = percentageOfTempo.toFixed(4)
  console.log("Tempo two decimal places", tempoTwoDecimal)

  // setTempoChangePercentage(tempoTwoDecimal);
  setTempoChangePercentage(tempoTwoDecimal);
  const newPlaybackRate = 1 + percentageOfTempo;
  console.log("NEW PLAYBACK RATE: ", newPlaybackRate)

  //  * trackBPM;

  // needs averageTempo of track
  player.playbackRate = newPlaybackRate;
  // console.log(newPlaybackRate);
}
