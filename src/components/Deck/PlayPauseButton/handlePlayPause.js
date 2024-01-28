export default function handlePlayPause(
  player,
  sendReceive,
  timeOnPlay,
  setTimeOnPlay,
  timeElapsed,
  setTimeElapsed,
  waveform,
) {
  //   if (sendReceive === "receive") {
  //     console.log("success");
  //   }

  //   if (sendReceive === "send") {
  //     socket.emit("send_playPause", { player: player.current.name });
  //   }

  console.log(player.context.state)
  if(player.context.state === "suspended") {
    player.start()
  }

  if (player.state === "stopped") {

    setTimeOnPlay(player.immediate());
    console.log(timeElapsed)

    // clock.start()
    player.start(0, timeElapsed);
    waveform.play() || waveform.resume();

  } else if (player.state === "started") {
    // clock.pause(player.immediate())

    player.stop();
    setTimeElapsed(timeElapsed + (player.immediate() - timeOnPlay));
    console.log(timeElapsed + (player.immediate() - timeOnPlay));
    waveform.pause()
  }
}
