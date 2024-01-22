import TrackView from "../TrackView/TrackView";
import { handleClick } from "./functions";
import { useState } from "react";

export default function Library({ playlistsArray }) {
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
                  playlistName={playlist.attributes.Name}
                  tracksArray={tracksArray}
                />
              ) : null}
            </li>
          ))
        : null}
    </ul>
  );
}
