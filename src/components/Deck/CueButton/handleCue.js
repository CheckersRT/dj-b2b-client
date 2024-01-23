export default function handleCue(player) {
  //   if (sendReceive === "receive") {
  //     console.log("success");
  //   }

  //   if (sendReceive === "send") {
  //     socket.emit("send_playPause", { player: player.current.name });
  //   }
  player.stop().restart(0, 0, 0)
}