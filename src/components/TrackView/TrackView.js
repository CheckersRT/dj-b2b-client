import { handleClickTrack, handleLoadDeck1 } from "../Library/functions";

export default function TrackView({ playlistName, tracksArray }) {



  return (
    <ul>
      {tracksArray
        ? tracksArray.playlistName === playlistName &&
          tracksArray.trackList.map((track) => (
            <div key={track}>
              <li
                name={track}
                onClick={(event) => handleClickTrack(event)}
              >
                {track}
              </li>
              <button name={track} onClick={(event) => handleLoadDeck1(event)}>Deck 1</button>
            </div>
          ))
        : null}
    </ul>
  );
}
