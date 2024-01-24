import * as Tone from "tone";

// export default function position() {

//     const now = Tone.now();
//     const ticks = Tone.Clock().getTicksAtTime(now)
//     new Tone.TicksClass(Tone.Context(), ticks).toBarsBeatsSixteenths()

export default function transport(initialTicks = 0) {
    let ticks = initialTicks;
  
    function toTicks(time) {
      const now = Tone.now() + time;
      const convertedTicks = Tone.Transport.getTicksAtTime(now);
      return convertedTicks;
    }
  
    function setPosition(progress) {
      const newTicks = toTicks(progress);
      ticks = newTicks;
    }
  
    function getTicks() {
      return ticks;
    }
  
    return {
      setPosition,
      getTicks,
    };
  }

