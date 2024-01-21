export default function Screen({player1, player2, metaDataCh1, metaDataCh2}) {

    console.log(player1)

    return (
        <>
            <p>Screen</p>
            <p>{metaDataCh1.title}</p>
            <p>{metaDataCh1.artist}</p>
        </>
    )
}