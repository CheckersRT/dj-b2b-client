import { Player } from "tone";
import {
  waveformCh1,
  waveformCh2,
  gainCh1,
  gainCh2,
  eqCh1,
  eqCh2,
  volCh1,
  volCh2,
  crossFader,
} from "./audioNodeSetUp";

export default function createPlayer(channel) {
  let url;

  if (channel === 1) {
    url = "https://res.cloudinary.com/dm1n4kfee/video/upload/v1706094686/DJ%20b2b/16509589_Machines__Original.mp3";
  } else if (channel === 2) {
    url = "https://res.cloudinary.com/dm1n4kfee/video/upload/v1706094686/DJ%20b2b/16509589_Machines__Original.mp3";
  }

  const player = new Player({
    url: url,
    onload: () => {
      console.log("loaded");
      //   setIsTrackLoading(false)
    },
  });
  //   await player.load(url)

  // sets up audio chain with imported nodes
  if (channel === 1) {
    player.chain(waveformCh1, gainCh1, eqCh1, volCh1, crossFader.a);
  } else if (channel === 2) {
    player.chain(waveformCh2, gainCh2, eqCh2, volCh2, crossFader.b);
  }

  return player;
}
