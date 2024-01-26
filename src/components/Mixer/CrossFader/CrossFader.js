import handleCrossFader from "./handleCrossFader";
import styled from "styled-components"

export default function Crossfader(className) {
  return (
    <Container className={className}r>
      <label htmlFor="chAll-crossFader-fade">Crossfader</label>
      <input
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
// height: 100%;
border: 1px solid gray;
`