

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

}