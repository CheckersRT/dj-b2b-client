export default function handlePlayPause(
  player,
  sendReceive,
  timeOnPlay,
  setTimeOnPlay,
  timeElapsed,
  setTimeElapsed,
) {
  //   if (sendReceive === "receive") {
  //     console.log("success");
  //   }

  //   if (sendReceive === "send") {
  //     socket.emit("send_playPause", { player: player.current.name });
  //   }

  if (player.state === "stopped") {
    setTimeOnPlay(player.immediate());
    console.log(timeElapsed)

    // clock.start()
    player.start(0, timeElapsed);
  } else if (player.state === "started") {
    // clock.pause(player.immediate())

    player.stop();
    setTimeElapsed(timeElapsed + (player.immediate() - timeOnPlay));
    console.log(timeElapsed + (player.immediate() - timeOnPlay));
  }
}
