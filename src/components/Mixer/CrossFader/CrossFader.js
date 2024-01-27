import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { useRef, useEffect, useState } from "react";
import handleCrossFader from "./handleCrossFader";
import styled from "styled-components"
import crossFaderHandle from "./level-meter-handle-vertical.svg"
import crossFaderNoHandle from "./level-meter-no-handle-horizontal.svg"

export default function Crossfader({className}) {
const [maxX, setMaxX] = useState(0)

  const crossFaderRef = useRef();
  const boundsRef = useRef();

  const getter = gsap.getProperty(crossFaderRef.current)

  useEffect(() => {
    setMaxX(getMaxX(boundsRef, crossFaderRef))
  }, [boundsRef, crossFaderRef])


  Draggable.create(crossFaderRef.current, {
    type: "x",
    inertia: false,
    dragResistance: 0.7,
    bounds: "#crossFaderBounds",
    onDrag: (value) => {
      const x = getter("x");
      handleCrossFader(x, "send", maxX)
    },

  });
  return (
      <Container className={className}>
          <HandleBounds  ref={boundsRef} id="crossFaderBounds">
              <StyledHandle ref={crossFaderRef} alt="knob" src={crossFaderHandle}></StyledHandle>
          </HandleBounds>
      </Container>
  ) 
}

const Container = styled.div`
width: 47%;
height: auto;
padding: 0px 0px;
background-image: url(${crossFaderNoHandle});
background-repeat: no-repeat;
background-size: contain;
background-position: center;
// border: 1px green solid;
overflow: hidden;
display: flex;
justify-content: center;
`

const HandleBounds = styled.div`
// margin: 5% 0;
// border: 2px solid pink;
display: flex;
justify-content: center;
align-items: center;
width: 94%;
// height: 100%;
`

const StyledHandle = styled.img`
background-color: transparent;
// border: blue 1px solid;
width: 18%;
height: auto;
`

function getMaxX(boundsRef, crossFaderRef) {
  const {width: boundsBoxWidth} = boundsRef.current.getBoundingClientRect()
  const {width: handleBoxWidth} = crossFaderRef.current.getBoundingClientRect()
  const maxX = boundsBoxWidth - handleBoxWidth
  console.log("maxX: ", maxX)
  return maxX;
}

