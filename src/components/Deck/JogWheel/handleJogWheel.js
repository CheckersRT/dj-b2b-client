// import * as Tone from "tone"
// import transport from "./position"

export default function handleJogWheel(rotation, sendReceive, player) {
    // player.seek(`+${event.target.value}`, 0)

    const newPlaybackRate = 1 + (rotation / 18) * player.playbackRate;
    player.playbackRate = newPlaybackRate;


    // console.log(event.target.value)

    // const positionSetter = transport()

    // positionSetter.setPosition(event.target.value)
    
    // const newTicks = positionSetter.getTicks()

    // const now = Tone.now() + 10

}