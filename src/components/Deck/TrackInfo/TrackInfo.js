// import styles from "./TrackInfo.module.css";
import styled from "styled-components"

export default function TrackInfo({ className, metaData, isPlayerLoading }) {
  return (
    <StyledDiv className={className}>
      <p>{metaData && metaData.name}</p>
      <p>{metaData && metaData.artist}</p>
      <p>{metaData && metaData.album}</p>
      <p>{metaData && metaData.track}</p>
      <p>{metaData && metaData.duration}</p>
      <p>{metaData && metaData.bpm}</p>
      <p>{metaData && metaData.tonality}</p>
      <p>{isPlayerLoading && "Loading..."}</p>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
width: 100%;
height: 100%;
border: 1px red solid;
`
