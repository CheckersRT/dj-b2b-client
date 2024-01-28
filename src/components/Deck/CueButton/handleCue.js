export default function handleCue(player, setTimeElapsed, timeElapsed, waveform) {
  //   if (sendReceive === "receive") {
  //     console.log("success");
  //   }

  //   if (sendReceive === "send") {
  //     socket.emit("send_playPause", { player: player.current.name });
  //   }
  player.stop().restart(0, 0, 0)
  setTimeElapsed(0)
  waveform.restart().pause()
  console.log("timeElapsed set", timeElapsed)
}