import TrackView from "../TrackView/TrackView";
import { handleClick } from "./functions";
import { useState } from "react";

export default function Library({
  playlistsArray,
  setPlayerUrlCh1,
  setPlayerUrlCh2,
  setIsPlayer1Loading,
  setIsPlayer2Loading,
  setMetaDataCh1,
  setMetaDataCh2
}) {
  const [tracksArray, setTracksArray] = useState();
  const [playlistSelected, setPlaylistSelected] = useState(false);

  return (
    <ul>
      {playlistsArray
        ? playlistsArray.map((playlist) => (
            <li
              onClick={(event) =>
                handleClick(
                  event,
                  playlistSelected,
                  setPlaylistSelected,
                  setTracksArray
                )
              }
              key={playlist.attributes.Name}
              name={playlist.attributes.Name}
            >
              {playlist.attributes.Name}
              {playlistSelected ? (
                <TrackView
                  setIsPlayer1Loading={setIsPlayer1Loading}
                  setIsPlayer2Loading={setIsPlayer2Loading}
                  setPlayerUrlCh1={setPlayerUrlCh1}
                  setPlayerUrlCh2={setPlayerUrlCh2}
                  playlistName={playlist.attributes.Name}
                  tracksArray={tracksArray}
                  setMetaDataCh1={setMetaDataCh1}
                  setMetaDataCh2={setMetaDataCh2}
                />
              ) : null}
            </li>
          ))
        : null}
    </ul>
  );
}
