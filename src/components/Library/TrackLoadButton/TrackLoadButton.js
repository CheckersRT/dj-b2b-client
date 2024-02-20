import { handleLoadDeck } from "../functions";
import styled from "styled-components"

export default function TrackLoadButton({
  deck,
  $clicked,
  track,
  setIsDeckClicked,
  isDeckClicked,
  setPlayerUrl,
  setIsPlayerLoading,
  setMetaData,
  waveform,
}) {
  return (
    <StyledButton
      $clicked={$clicked ? true : false}
      name={track.Name || track.name}
      onClick={(event) => {
        handleLoadDeck(
          event,
          setPlayerUrl,
          setIsPlayerLoading,
          setMetaData,
          track,
          waveform,
          setIsDeckClicked
        );
      }}
    >
      Deck {deck}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  font-size: 0.7em;
  appearance: none;
  outline: none;
  background-color: transparent;
  border: 0.8px solid black;
  padding: 3px;
  box-shadow: 0 0.5px #999;

  &:active {
    box-shadow: 0 0px #999;
    transform: translateY(1px);
  }

  ${(props) => (props.$clicked ? "background-color: #9cfa9b" : "background-color: transparent")}
  `;
