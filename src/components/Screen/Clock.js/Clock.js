import { useState } from "react";

export default function Clock({ player, timeOnPlay }) {
  const [clock, setClock] = useState(0);

  
    setInterval(() => {
      const currentTime = player.immediate().toFixed(2)

      const startTime = (currentTime - timeOnPlay).toFixed(2)

      player.state === "started" && setClock(startTime);
    }, 100);

  return (
    <>
      <p>{clock}</p>
    </>
  );
}
