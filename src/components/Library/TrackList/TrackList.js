import { handleClickTrack, handleLoadDeck } from "../../Library/functions";
import TrackRow from "../TrackRow/TrackRow";
import styles from "./TrackList.module.css";
import styled from "styled-components"
import {useRef} from "react"
import sortTable from "../sortTable";
import LibraryLoadButton from "../LibraryLoadButton/LibraryLoadButton";

export default function TrackList({
  playlistName,
  tracksArray,
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
  xmlFile,
  setXmlFile,
  playerCh1,
  playerCh2,

}) {
  const tableRef = useRef()
  console.log("Playlist: ", playlist);

  return (
    <div className={styles.container}>
      <table className={styles.table} ref={tableRef}>
        <StyledHeaderRow>
          <th 
          // onClick={() => sortTable(tableRef)}
          >Track Title</th>
          <th>Artist</th>
          <th>BPM</th>
          <th>Key</th>
          <th></th>
          <th></th>
        </StyledHeaderRow>
        {tracksArray
          ? tracksArray.playlistName === playlist.attributes.Name &&
            tracksArray.trackList.map((track) => (
              <TrackRow   
              key={track.Name}
              track={track}
              setPlayerUrlCh1={setPlayerUrlCh1}
              setPlayerUrlCh2={setPlayerUrlCh2}
              setMetaDataCh1={setMetaDataCh1}
              setMetaDataCh2={setMetaDataCh2}
              isPlayer1Loading={isPlayer1Loading}
              isPlayer2Loading={isPlayer2Loading}
              setIsPlayer1Loading={setIsPlayer1Loading}
              setIsPlayer2Loading={setIsPlayer2Loading}
              waveformCh1={waveformCh1}
              waveformCh2={waveformCh2}
              playerCh1={playerCh1}
              playerCh2={playerCh2}
              />
            ))
          : null}
      </table>
    </div>
  );
}

const StyledHeaderRow = styled.tr`
text-align: left;
font-size: 0.8em;
`