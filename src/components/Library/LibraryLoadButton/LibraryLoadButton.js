import { handleSubmit } from "./functions";
import styled from "styled-components";

export default function LibraryLoadButton({
  xmlFile,
  setXmlFile,
  setPlaylistsArray,
  setCollection,
}) {
  return (
    <Container>
      <StyledForm
        onSubmit={(event) => handleSubmit(event, xmlFile, setPlaylistsArray, setCollection)}
      >
        <label htmlFor="xmlUpload">Load Library</label>
        <StyledInput
          id="xmlUpload"
          name="file"
          type="file"
          onChange={(event) => setXmlFile(event.target.files[0])}
        />
        <StyledButton type="submit">Load</StyledButton>
      </StyledForm>
    </Container>
  );
}

const Container = styled.div`
  width: 50%;
  margin: auto;
  //   border: 1px solid gray;
  text-align: center;
  padding: 20px;
`;

const StyledForm = styled.form`
  margin: auto;
`;

const StyledInput = styled.input`
  // width: 80%;
  margin: auto;
  padding-left: 10px;
`;

const StyledButton = styled.button`
  //   visibility: hidden;
`;
