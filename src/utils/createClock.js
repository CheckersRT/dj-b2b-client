import * as Tone from "tone"

export default function createClock() {

    const clock = new Tone.Clock(time => {
        console.log(time);
    }, 1);
    clock.start();

    return clock;
}