import { handleLoadDeck } from "../functions";
import styled from "styled-components"

export default function TrackRow({
  track,
  setPlayerUrlCh1,
  setPlayerUrlCh2,
  setMetaDataCh1,
  setMetaDataCh2,
  setIsPlayer1Loading,
  setIsPlayer2Loading,
  playlist,
  waveformCh1,
  waveformCh2,
}) {
  return (
    <StyledRow key={track.Name}>
      <StyledCell name={track.Name}>{track.Name}</StyledCell>
      <StyledCell>{track.Artist}</StyledCell>
      <StyledCell>{track.AverageBpm}</StyledCell>
      <StyledCell>{track.Tonality}</StyledCell>
      <StyledCell>
        <StyledButton
          name={track.Name}
          onClick={(event) =>
            handleLoadDeck(
              event,
              setPlayerUrlCh1,
              setIsPlayer1Loading,
              setMetaDataCh1,
              track,
              waveformCh1
            )
          }
        >
          Deck 1
        </StyledButton>
      </StyledCell>
      <StyledCell>
        <StyledButton
          name={track.Name}
          onClick={(event) =>
            handleLoadDeck(
              event,
              setPlayerUrlCh2,
              setIsPlayer2Loading,
              setMetaDataCh2,
              track,
              waveformCh2
            )
          }
        >
          Deck 2
        </StyledButton>
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

const StyledButton = styled.button`
font-size: 0.7em;
appearance: none;
outline: none;
background-color: transparent;
border: 0.8px solid black;
padding: 8%;
box-shadow: 0 0.5px #999;

&:active {
    box-shadow: 0 0px #999;
    transform: translateY(1px);
}
`