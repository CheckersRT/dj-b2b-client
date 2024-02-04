import styled from "styled-components"
import TrackLoadButton from "../TrackLoadButton/TrackLoadButton";

export default function TrackRow({
  track,
  setPlayerUrlCh1,
  setPlayerUrlCh2,
  setMetaDataCh1,
  setMetaDataCh2,
  isDeck1Clicked,
  isDeck2Clicked,
  setIsDeck1Clicked,
  setIsDeck2Clicked,
  setIsPlayer1Loading,
  setIsPlayer2Loading,
  waveformCh1,
  waveformCh2,
  $clicked1,
  $clicked2,
}) {

  // const [styleDeck1, setStyleDeck1] = useState("")

  console.log("isDeck1Clicked: ", isDeck1Clicked)

  // useEffect(() => {

  
  //   if (playerCh1.state === "stopped") {
  //     setStyleDeck1("cueColor")
  //   } else if (playerCh1.state === "started") {
  //     setStyleDeck1("playColor")
  //   } else if (isPlayer1Loading === true) {
  //     setStyleDeck1("loading")
  //   }

  // }, [playerCh1.state, playerCh2.state, isPlayer1Loading, isPlayer2Loading])

  return (
    <StyledRow key={track.Name}>
      <StyledCell name={track.Name}>{track.Name}</StyledCell>
      <StyledCell>{track.Artist}</StyledCell>
      <StyledCell>{track.AverageBpm}</StyledCell>
      <StyledCell>{track.Tonality}</StyledCell>
      <StyledCell>
        <TrackLoadButton
          $clicked={$clicked1 ? true : false}
          track={track}
          setIsDeckClicked={setIsDeck1Clicked}
          isDeckClicked={isDeck1Clicked}
          setPlayerUrl={setPlayerUrlCh1}
          setIsPlayerLoading={setIsPlayer1Loading}
          setMetaData={setMetaDataCh1}
          waveform={waveformCh1}
        />
      </StyledCell>
      <StyledCell>
        <TrackLoadButton
          $clicked={$clicked2 ? true : false}
          track={track}
          setIsDeckClicked={setIsDeck2Clicked}
          isDeckClicked={isDeck2Clicked}
          setPlayerUrl={setPlayerUrlCh2}
          setIsPlayerLoading={setIsPlayer2Loading}
          setMetaData={setMetaDataCh2}
          waveform={waveformCh2}
        />
      </StyledCell>
    </StyledRow>
  );
}

const StyledRow = styled.tr`
font-size: 0.8em;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
width: 100%;
height: 20px;
`

const StyledCell = styled.td`
padding-right: 5px;
`
