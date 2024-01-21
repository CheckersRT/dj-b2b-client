import * as Tone from "tone";

const gainCh1 = new Tone.Gain({
  gain: 0,
  units: "decibels",
  maxValue: 10,
  minValue: -40,
});

const gainCh2 = new Tone.Gain({
  gain: 0,
  units: "decibels",
  maxValue: 10,
  minValue: -40,
});

const eqCh1 = new Tone.EQ3();
const eqCh2 = new Tone.EQ3();

const volCh1 = new Tone.Volume()
const volCh2 = new Tone.Volume()

const crossFader = new Tone.CrossFade();
crossFader.toDestination();

export {gainCh1, gainCh2, eqCh1, eqCh2, volCh1, volCh2, crossFader}