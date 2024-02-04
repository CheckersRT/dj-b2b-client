import TrackRow from "../TrackRow/TrackRow";
import styles from "./TrackList.module.css";
import styled from "styled-components"
import {useEffect, useRef, useState} from "react"


export default function TrackList({
  collection,
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
  const [trackList, setTrackList] = useState([])
  const [isDeck1Clicked, setIsDeck1Clicked] = useState({track: "", isOn: false})
  const [isDeck2Clicked, setIsDeck2Clicked] = useState(false)
  const tableRef = useRef()

  useEffect(() => {
    if(playlist) {

      console.log("Playlist: ", playlist);
    
      // console.log("Playlist to get: ", playlistToGet.elements);
      const trackKeys = playlist.elements.map(
        (track) => track.attributes.Key
        );
        console.log("trackKeys: ", trackKeys);
    
      const trackList = [];
      for (let i = 0; i < trackKeys.length; i++) {
        const track = collection.find(
          (track) => track.attributes.TrackID === trackKeys[i]
        );
        trackList.push(track.attributes);
      }
      console.log(trackList)
      setTrackList(trackList)
    }

  }, [playlist, collection])

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
        {trackList
          && trackList.map((track) => (
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
              isDeck1Clicked={isDeck1Clicked}
              isDeck2Clicked={isDeck2Clicked}
              setIsDeck1Clicked={setIsDeck1Clicked}
              setIsDeck2Clicked={setIsDeck2Clicked}
              $clicked1={track.Name === isDeck1Clicked.track ? true : false}
              $clicked2={track.Name === isDeck2Clicked.track ? true : false}
              />
            ))
          }
      </table>
    </div>
  );
}

const StyledHeaderRow = styled.tr`
text-align: left;
font-size: 0.8em;
`