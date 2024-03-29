import TrackRow from "../TrackRow/TrackRow";
import styles from "./TrackList.module.css";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import MusicLoadButton from "../MusicLoadButton/MusicLoadButton";
import useLocalStorageState from "use-local-storage-state";

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
  const [trackList, setTrackList] = useLocalStorageState("trackList", { defaultValue: []});
  const [isDeck1Clicked, setIsDeck1Clicked] = useState({
    track: "",
    isOn: false,
  });
  const [isDeck2Clicked, setIsDeck2Clicked] = useState(false);
  const [isTrackUploading, setIsTrackUploading] = useState([]);
  const tableRef = useRef();

  useEffect(() => {
    if (playlist) {
      console.log("Playlist: ", playlist);

      // console.log("Playlist to get: ", playlistToGet.elements);
      const trackKeys = playlist.elements.map((track) => track.attributes.Key);
      console.log("trackKeys: ", trackKeys);

      const trackList = [];
      for (let i = 0; i < trackKeys.length; i++) {
        const track = collection.find(
          (track) => track.attributes.TrackID === trackKeys[i]
        );
        trackList.push(track.attributes);
      }
      console.log(trackList);
      setTrackList(trackList);
    }
  }, [playlist, collection]);

  console.log("Tracklist in TrackList component: ", trackList);
  console.log("IsTrackUploading?: ", isTrackUploading);

  return (
    <div className={styles.container}>
      <MusicLoadButton
        setTrackList={setTrackList}
        setIsTrackUploading={setIsTrackUploading}
        isTrackUploading={isTrackUploading.length > 0 ? true : false}
      />
      {trackList ? (
        <table className={styles.table} ref={tableRef}>
          <StyledHeaderRow>
            <StyledColTitle
            // onClick={() => sortTable(tableRef)}
            >
              Title
            </StyledColTitle>
            <StyledColArtist>Artist</StyledColArtist>
            <StyledColBpm>BPM</StyledColBpm>
            <StyledColKey>Key</StyledColKey>
            <StyledButton1></StyledButton1>
            <StyledButton2></StyledButton2>
          </StyledHeaderRow>
          {trackList.map((track) => (
            <TrackRow
              key={track.Name || track.name}
              track={track}
              isTrackUploading={isTrackUploading.includes(track.name)}
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
              $clicked1={track.name === isDeck1Clicked.track ? true : false}
              $clicked2={track.name === isDeck2Clicked.track ? true : false}
            />
          ))}
        </table>
      ) : null}
    </div>
  );
}

const StyledHeaderRow = styled.tr`
  text-align: left;
  font-size: 0.8em;
`;

const StyledColTitle = styled.th`
  width: 50%;
`;
const StyledColArtist = styled.th`
  width: 20%;
`;
const StyledColBpm = styled.th`
  width: 10%;
`;
const StyledColKey = styled.th`
  width: 10%;
`;
const StyledButton1 = styled.th`
  width: 5%;
`;
const StyledButton2 = styled.th`
  width: 5%;
`;
