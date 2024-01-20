export async function onChange(event, setFileData) {
    const file = event.currentTarget.files[0]

    if(file) {
        setFileData(file)
    }
}

export async function onSubmit(event, setPlayerUrl) {
    event.preventDefault()
    setPlayerUrl("/8096989_Rub_(Original Mix).mp3")
}