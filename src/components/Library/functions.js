import uploadTrack from "../../api/uploadTrack";
import saveToDb from "../../api/saveToDb";
import isTrackInDb from "../../api/isTrackInDb";
import getWaveformImageUrl from "./getWaveformImageUrl";
import {config} from "../../api/consts.js"

export async function handleClick(
  event,
  playlistSelected,
  setPlaylistSelected,
  setTracksArray,
  playlist
) {
  event.stopPropagation();
  const name = event.target.getAttribute("name");
  console.log(event.target.getAttribute("name"));

  setPlaylistSelected(!playlistSelected);

  try {
    const response = await fetch(`${config.url}/routes/getTracksInPlaylist`,
      // "http://localhost:3030/routes/getTracksInPlaylist",
      // "https://dj-b2b-server.vercel.app/routes/getTracksInPlaylist",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ playlistName: name }),
      }
    );

    const data = await response.json();
    console.log("Playlist from server: ", data);
    setTracksArray(data);
  } catch (error) {}
}

export async function handleClickTrack(event) {
  event.stopPropagation();
  const name = event.target.getAttribute("name");

  console.log(name);
}

export async function handleLoadDeck(
  event,
  setPlayerUrl,
  setIsPlayerLoading,
  setMetaData,
  track,
  waveform,
  setIsDeckClicked
) {
  event.stopPropagation();
  const name = event.target.getAttribute("name");
  setIsDeckClicked({ track: track.Name || track.name, isLoading: true });
  setIsPlayerLoading(true);

  if (track.name) {
    setPlayerUrl(track.url);
    setMetaData(track)

    if (waveform) {
      console.log("this is coming through yay");
      waveform.restart().pause();
      // waveform.kill()
    }

  } else {
    const trackInDb = await isTrackInDb(track.TrackID || track.Name);

    if (waveform) {
      console.log("this is coming through yay");
      waveform.restart().pause();
      // waveform.kill()
    }

    if (trackInDb) {
      setPlayerUrl(trackInDb.url);
      setMetaData(trackInDb);
      setIsDeckClicked({ track: track.Name, isLoading: false });
      console.log(trackInDb);
    } else if (trackInDb === false) {
      const data = await uploadTrack(name);
      if (data.error) {
        setIsPlayerLoading(false);
        return;
      }
      const url = data.url;
      const publicID = data.public_id;
      const waveformImageUrl = await getWaveformImageUrl(
        data.public_id,
        track.TotalTime
      );

      setPlayerUrl(url);

      const metaData = {
        trackID: track.TrackID,
        name: track.Name,
        artist: track.Artist,
        composer: track.Composer,
        album: track.Album,
        grouping: track.Grouping,
        genre: track.Genre,
        kind: track.Kind,
        size: track.Size,
        totalTime: track.TotalTime,
        discNumber: track.DiscNumber,
        trackNumber: track.TrackNumber,
        year: track.Year,
        bpm: track.AverageBpm,
        dateAdded: track.DateAdded,
        bitRate: track.BitRate,
        sampleRate: track.SampleRate,
        comments: track.Comments,
        playCount: track.PlayCount,
        rating: track.Rating,
        location: track.Location,
        remixer: track.Remixer,
        tonality: track.Tonality,
        label: track.Label,
        mix: track.Mix,
        url: url,
        publicID: publicID,
        waveformURL: waveformImageUrl,
      };

      console.log("metadata", metaData);
      setMetaData(metaData);
      saveToDb(metaData);
      setIsDeckClicked({ track: track.Name || track.name, isLoading: false });
    }
  }
}
