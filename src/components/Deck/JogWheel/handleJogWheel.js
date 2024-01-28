import * as Tone from "tone"
// import transport from "./position"

export default function handleJogWheel(rotation, sendReceive, player, waveform) {
    // player.seek(`+${event.target.value}`, 0)

    console.log("Rotation: ", rotation)

    const newPlaybackRate = 1 + (rotation / 200) * player.playbackRate;
    console.log("newPlaybackRate: ", newPlaybackRate)
    player.playbackRate = newPlaybackRate;
    waveform.timeScale(newPlaybackRate)
    

    setTimeout(()=> {
        player.playbackRate = 1
        waveform.timeScale(1)

    }, 500)

    // console.log(event.target.value)

    // const positionSetter = transport()

    // positionSetter.setPosition(event.target.value)1
    
    // const newTicks = positionSetter.getTicks()

    // const now = Tone.now() + 10

}