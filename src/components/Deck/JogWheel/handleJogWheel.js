import * as Tone from "tone"
import transport from "./position"

export default function handleJogWheel(event, sendReceive, player) {
    // player.seek(`+${event.target.value}`, 0)

    console.log(event.target.value)

    const positionSetter = transport()

    positionSetter.setPosition(event.target.value)
    
    const newTicks = positionSetter.getTicks()

    const now = Tone.now() + 10

}