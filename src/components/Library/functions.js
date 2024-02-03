import uploadTrack from "../../api/uploadTrack";
import saveToDb from "../../api/saveToDb";
import isTrackInDb from "../../api/isTrackInDb";
import getWaveformImageUrl from "./getWaveformImageUrl";

export async function handleClick(
  event,
  playlistSelected,
  setPlaylistSelected,
  setTracksArray
) {
  const name = event.target.getAttribute("name");
  console.log(event.target.getAttribute("name"));

  setPlaylistSelected(!playlistSelected);

  try {
    const response = await fetch("http://localhost:3030/getTracksInPlaylist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ playlistName: name }),
    });

    const data = await response.json();
    console.log(data);
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
  waveform
) {
  event.stopPropagation();
  const name = event.target.getAttribute("name");
  setIsPlayerLoading(true);

  const trackInDb = await isTrackInDb(track.TrackID);

  if (waveform) {
    console.log("this is coming through yay");
    waveform.restart().pause();
    // waveform.kill()
  }

  if (trackInDb) {
    setPlayerUrl(trackInDb.url);
    setMetaData(trackInDb);
    console.log(trackInDb);
  } else if (trackInDb === false) {
    const data = await uploadTrack(name);
    if(data.error) {
      setIsPlayerLoading(false);
      return
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
  }
}
