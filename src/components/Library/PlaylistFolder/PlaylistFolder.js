import Playlist from "../Playlist/Playlist";
import { useState } from "react";

export default function PlaylistFolder({
  playlistFolder,
  playlistSelected,
  setPlaylistSelected,
  setTracksArray,
  setPlaylist,
}) {
  const [revealPlaylist, setRevealPlaylist] = useState(false);

  return (
    <ul onClick={() => setRevealPlaylist(!revealPlaylist)}>
      {playlistFolder.attributes.Name}
      {revealPlaylist &&
        playlistFolder.elements.map((playlist) => (
            <Playlist
              playlist={playlist}
              playlistSelected={playlistSelected}
              setPlaylistSelected={setPlaylistSelected}
              setTracksArray={setTracksArray}
              setPlaylist={setPlaylist}
            />
        ))}
    </ul>
  );
}
