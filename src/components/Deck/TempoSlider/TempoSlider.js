import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { useRef, useEffect, useState } from "react";
import handleTempoSlider from "./handleTempoSlider";
import styled from "styled-components";
import tempoSlider from "./TempoControl-no-handle.svg";
import tempoHandle from "./TempoControl-handle.svg";
import { debounce } from "lodash";


gsap.registerPlugin(Draggable);

export default function TempoSlider({ className, channel, player, metaData, setTempoChangePercentage }) {
  const [maxY, setMaxY] = useState(0)
  const sliderRef = useRef();
  const tempoBoundsRef = useRef()

  
  useEffect(()=> {
    setMaxY(getMaxY(tempoBoundsRef, sliderRef))
    const getter = gsap.getProperty(sliderRef.current)
    Draggable.create(sliderRef.current, {
      type: "y",
      inertia: false,
      dragResistance: 0.7,
      bounds: "#div",
      onDrag: (value) => {
        const y = getter("y");
        handleTempoSlider(y, "send", player, maxY, setTempoChangePercentage)
      },
  
    });
  }, [tempoBoundsRef, sliderRef, maxY, player, setTempoChangePercentage])


  return (
    <StyledDiv className={className}>
      <HandleBounds ref={tempoBoundsRef} id="div">
        <StyledSlider
          ref={sliderRef}
          alt="tempo slider"
          src={tempoHandle}
        ></StyledSlider>
      </HandleBounds>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
min-width: 100px;
  width: 74%;
  padding: 0px 0px;
  background-image: url(${tempoSlider});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: 1px green solid;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const HandleBounds = styled.div`
  margin-top: 10%;
  margin-bottom: 27%;
  border: 2px solid pink;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledSlider = styled.img`
  border: 1px solid green;
  background-color: transparent;
  position: relative;
  left: 3%;
  margin: auto;
  height: auto;
  width: 41%;
`;

function getMaxY(tempoBoundsRef, sliderRef) {
  const {height: boundsBoxHeight} = tempoBoundsRef.current.getBoundingClientRect()
  console.log("BoundsBoxHeight: ", boundsBoxHeight)
  const {height: handleBoxHeight} = sliderRef.current.getBoundingClientRect()
  console.log("handleBoxHeight: ", handleBoxHeight)
  const maxY = boundsBoxHeight - handleBoxHeight
  console.log("maxY: ", maxY)
  return maxY;
}
