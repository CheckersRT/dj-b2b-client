export async function onChange(event, setFileData) {
    const file = event.currentTarget.files[0]

    if(file) {
        setFileData(file)
    }
}

export async function onSubmit(event, fileData) {
    
}