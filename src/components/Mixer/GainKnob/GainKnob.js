import handleGain from "./handleGain";
import styled from "styled-components"

export default function GainKnob({className, channel}) {

  return (
    <Container className={className}>
      <label htmlFor={`ch${channel}-gain`}>gain</label>
      <input
        name={`ch${channel}-gain`}
        id={`ch${channel}-gain`}
        type="range"
        min={-20}
        max={20}
        defaultValue={0}
        onChange={(event) => handleGain(event,"send", channel)}
      />
    </Container>
  );
}

const Container = styled.div`

`