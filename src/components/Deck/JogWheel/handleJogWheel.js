import * as Tone from "tone"
// import transport from "./position"

export default function handleJogWheel(rotation, sendReceive, player, waveform, tempoChangePercentage) {
    // player.seek(`+${event.target.value}`, 0)

    console.log("Rotation: ", rotation)
    const originalPlaybackRate = 1 + tempoChangePercentage

    const newPlaybackRate = player.playbackRate + (rotation / 1000) * player.playbackRate;
    console.log("newPlaybackRate: ", newPlaybackRate)
    player.playbackRate = newPlaybackRate;
    waveform.timeScale(newPlaybackRate)
    

    setTimeout(()=> {
        player.playbackRate = originalPlaybackRate
        waveform.timeScale(1)

    }, 400)

    // console.log(event.target.value)

    // const positionSetter = transport()

    // positionSetter.setPosition(event.target.value)1
    
    // const newTicks = positionSetter.getTicks()

    // const now = Tone.now() + 10

}