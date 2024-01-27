// import styles from "./TrackInfo.module.css";
import styled from "styled-components"

export default function TrackInfo({ className, metaData, isPlayerLoading }) {
  return (
    <StyledDiv className={className}>
      <TrackName>{metaData && metaData.name}</TrackName>
      <Artist>{metaData && metaData.artist}</Artist>
      <Tempo>{metaData && metaData.bpm}</Tempo>
      <Key>{metaData && metaData.tonality}</Key>
      <TimeRemaining>{metaData && metaData.totalTime}</TimeRemaining>
      <TimeCurrent>{metaData && metaData.totalTime}</TimeCurrent>
      <p>{isPlayerLoading && "Loading..."}</p>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
width: 100%;
// border: 1px red solid;
display: grid;
grid-template-columns: 4fr 1fr 1fr 1fr 2fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
`

const TrackName = styled.h3`
font-size: 0.8em;
grid-column: 1 / 6;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
`

const Artist = styled.p`
font-size: 0.7em;
grid-row: 2;
grid-column: 1;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
`

const Tempo = styled.p`
font-size: 0.7em;
grid-row: 2;
grid-column: 3;
`
const Key = styled.p`
font-size: 0.7em;
grid-row: 2;
grid-column: 4;
`

const TimeRemaining = styled.p`
font-size: 0.9em;
grid-row: 2;
grid-column: 6;
justify-self: center;
`
const TimeCurrent = styled.p`
font-size: 0.9em;
grid-row: 2;
grid-column: 7;
justify-self: center;
`