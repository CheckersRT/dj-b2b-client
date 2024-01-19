import { onChange, onSubmit } from "./functions";

export default function Player({ fileData, setFileData }) {
  return (
    <>
      <p>Player</p>
      <form name="uploadForm" onSubmit={(event) => onSubmit(event, fileData)}>
        <label htmlFor="upload">Upload</label>
        <input type="file" name="upload" onChange={(event) => onChange(event, setFileData)}></input>
      </form>
    </>
  );
}
