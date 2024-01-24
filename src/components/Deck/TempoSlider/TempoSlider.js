import handleTempoChange from "./handleTempoChange"

export default function TempoSlider({player}) {
    return (
        <>
            <label htmlFor="tempoSlider">Tempo</label>
            <input name="tempoSlider" min={-0.06} max={0.06} step={0.01} defaultValue={0} type="range" onChange={(event) => handleTempoChange(event.target.value, player)} ></input>
        </>
    )
}

