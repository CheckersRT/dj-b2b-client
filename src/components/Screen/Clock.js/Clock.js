import { useState, useEffect } from "react";

export default function Clock({ player, timeOnPlay, timeElapsed }) {
  const [clock, setClock] = useState(0);
  useEffect(() => {
    let intervalClock;
    if (player.state === "started") {
      intervalClock = setInterval(
        () => setClock((clock + 1)),
        10
      );
    }
    return () => clearInterval(intervalClock);
  }, [player.state, clock]);

//   const milliseconds = clock;

// const seconds = Math.floor((milliseconds / 1000) % 60);

// const minutes = Math.floor((milliseconds / 1000 / 60) % 60);

// const formattedTime = [
//   minutes.toString().padStart(2, "0"),
//   seconds.toString().padStart(2, "0")
// ].join(":");
  // const currentTime = player.immediate().toFixed(2)
  // if(player.state === "started") {
  //   const timeOnPlay = player.immediate()
  //   setClock(timeOnPlay);
  // } else if (player.state === "stopped") {
  //   const
  // }
  // displayTime = currenTime - pausedTime
  // totalPausedTime = pauseTime  (Total - timeOnPause)

  return (
    <>
      <p>{clock}</p>
    </>
  );
}
