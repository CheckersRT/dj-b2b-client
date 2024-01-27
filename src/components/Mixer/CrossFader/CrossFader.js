import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { useRef } from "react";
import handleCrossFader from "./handleCrossFader";
import styled from "styled-components"
import crossFaderHandle from "./level-meter-handle-vertical.svg"
import crossFaderNoHandle from "./level-meter-no-handle-horizontal.svg"

export default function Crossfader({className}) {
  const crossFaderRef = useRef();

  const getter = gsap.getProperty(crossFaderRef.current)

  Draggable.create(crossFaderRef.current, {
    type: "x",
    inertia: false,
    dragResistance: 0.7,
    // bounds: {top: 14, left: 0, height: 268},
    bounds: "#volBounds",
    onDrag: (value) => {
      // console.log(value.offsetY);
      const x = getter("x");
      console.log(-x);
      handleCrossFader(-x, "send")
    },
  });
  return (
      <Container className={className}>
          <HandleBounds id="volBounds">

              <StyledHandle ref={crossFaderRef} alt="knob" src={crossFaderHandle}></StyledHandle>
          </HandleBounds>
      </Container>
  )
}

const Container = styled.div`
width: 100%;
height: auto;
padding: 0px 0px;
background-image: url(${crossFaderNoHandle});
background-repeat: no-repeat;
background-size: contain;
background-position: center;
border: 1px green solid;
overflow: hidden;
display: flex;
justify-content: center;
`

const HandleBounds = styled.div`
// margin: 5% 0;
border: 2px solid pink;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
// height: 100%;
`

const StyledHandle = styled.img`
background-color: transparent;
border: blue 1px solid;
width: 20px;
height: 50px;
`