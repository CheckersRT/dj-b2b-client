import styled from "styled-components";
import TrackLoadButton from "../TrackLoadButton/TrackLoadButton";

export default function TrackRow({
  isTrackUploading,
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

  return (
    <StyledRow key={track.Name || track.name}>
      <StyledCell name={track.Name || track.name}>
        {track.Name || track.name}
      </StyledCell>
      <StyledCell>{track.Artist || track.artist}</StyledCell>
      <StyledCell>{track.AverageBpm || track.bpm}</StyledCell>
      <StyledCell>{track.Tonality || track.tonality}</StyledCell>
      {isTrackUploading ? (
        <StyledCell>...loading...</StyledCell>
      ) : (
        <>
          <StyledCell>
            <TrackLoadButton
              deck={1}
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
              deck={2}
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
        </>
      )}
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
`;

const StyledCell = styled.td`
  // padding-right: 5px;
`;
