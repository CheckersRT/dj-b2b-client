
export default function handleTempoSlider(yValue, sendReceive, channel, player) {

  let percentage = 0; 

  percentage = yValue / 63 * 0.06;

    const newPlaybackRate = 1 + percentage * player.playbackRate;
    player.playbackRate = newPlaybackRate;
    // console.log(newPlaybackRate);
  }