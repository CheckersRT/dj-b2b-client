import { handleClick } from "../functions";

export default function Playlist({
  playlist,
  playlistSelected,
  setPlaylistSelected,
  setTracksArray,
  setPlaylist,
  setCollection,
  collection,
}) {
  return (
    <li
      onClick={(event) => {
        event.stopPropagation();
        setPlaylist(playlist);
      }}
      key={playlist.attributes.Name}
      name={playlist.attributes.Name}
    >
      {playlist.attributes.Name}
    </li>
  );
}
