import { handleLoadDeck } from "../functions";
import styled from "styled-components"
import styles from "./TrackRow.module.css"
import { useEffect, useState } from "react";

export default function TrackRow({
  track,
  setPlayerUrlCh1,
  setPlayerUrlCh2,
  setMetaDataCh1,
  setMetaDataCh2,
  isPlayer1Loading,
  isPlayer2Loading,
  setIsPlayer1Loading,
  setIsPlayer2Loading,
  playlist,
  waveformCh1,
  waveformCh2,
  playerCh1,
  playerCh2,

}) {
  const [isDeck1Clicked, setIsDeck1Clicked] = useState(false)
  const [isDeck2Clicked, setIsDeck2Clicked] = useState(false)
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
        {isDeck1Clicked ? 

        <StyledButton
          name={track.Name}
          $Clicked
          onClick={(event) => {
            setIsDeck1Clicked(!isDeck1Clicked)
            handleLoadDeck(
              event,
              setPlayerUrlCh1,
              setIsPlayer1Loading,
              setMetaDataCh1,
              track,
              waveformCh1
            )
          }
          }
        >
          Deck 1
        </StyledButton>
        :
        <StyledButton
          name={track.Name}
          onClick={(event) => {
            setIsDeck1Clicked(!isDeck1Clicked)
            handleLoadDeck(
              event,
              setPlayerUrlCh1,
              setIsPlayer1Loading,
              setMetaDataCh1,
              track,
              waveformCh1
            )
          }
          }
        >
          Deck 1
        </StyledButton>
        }
      </StyledCell>
      <StyledCell>
        {isDeck2Clicked ? 
        <StyledButton
          name={track.Name}
          $Clicked
          onClick={(event) => {
            setIsDeck2Clicked(!isDeck2Clicked)
            handleLoadDeck(
              event,
              setPlayerUrlCh2,
              setIsPlayer2Loading,
              setMetaDataCh2,
              track,
              waveformCh2
            )
          }
          }
        >
          Deck 2
        </StyledButton>
        :
        <StyledButton
          name={track.Name}
          onClick={(event) => {
            setIsDeck2Clicked(!isDeck2Clicked)
            handleLoadDeck(
              event,
              setPlayerUrlCh2,
              setIsPlayer2Loading,
              setMetaDataCh2,
              track,
              waveformCh2
            )
          }
          }
        >
          Deck 2
        </StyledButton>
        }
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

${props => props.$Clicked ? 
"background-color: #9cfa9b" :
null }
`