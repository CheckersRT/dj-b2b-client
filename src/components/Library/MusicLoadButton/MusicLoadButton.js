import { handleChange, handleSubmit } from "./functions";
import { useState } from "react";
import styled from "styled-components";

export default function MusicLoadButton({
  setTrackList,
  setCollection,
  setIsTrackUploading,
  isTrackUploading,
}) {
  const [fileData, setFileData] = useState();

  return (
    <StyledForm
      onSubmit={(event) =>
        handleSubmit(
          event,
          fileData,
          setTrackList,
          setCollection,
          setFileData,
          setIsTrackUploading
        )
      }
    >
      <label htmlFor="musicfiles">Add tracks: </label>
      <input
        type="file"
        id="musicfiles"
        name="musicfiles"
        multiple
        onChange={(event) => handleChange(event, setFileData)}
      ></input>
      <StyledButton type="submit">{isTrackUploading ? "...loading" : "Load"}</StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  text-align: center;
`;

const StyledButton = styled.button`
  padding: 0 20px;
`;
