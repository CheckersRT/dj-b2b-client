import handleCrossFader from "./handleCrossFader";
import styled from "styled-components"

export default function Crossfader({className}) {
  return (
    <Container className={className}>
      <label htmlFor="chAll-crossFader-fade">Crossfader</label>
      <StyledInput
        name="chAll-crossFader-fade"
        id="chAll-crossFader-fade"
        type="range"
        min={0}
        max={1}
        step={0.01}
        defaultValue={0.5}
        onChange={(event) => handleCrossFader(event, "send")}
      />
    </Container>
  );
}

const Container = styled.div`
  border: pink 1px solid;
  width: 100%;
`

const StyledInput = styled.input`
width: 100%;
`