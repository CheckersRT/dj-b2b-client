
export default function handleTempoChange(percentage, player) {
    const newPlaybackRate = 1 + percentage * player.playbackRate;
    player.playbackRate = newPlaybackRate;
    console.log(newPlaybackRate);
  }