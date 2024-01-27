import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { useRef } from "react";
import styled from "styled-components"
import volumeFaderNoHandle from "./level-meter-no-handle.svg"
import volumeFaderHandle from "./level-meter-handle.svg"
import handleVolumeFader from "./handleVolumeFader";

gsap.registerPlugin(Draggable);

export default function VolumeFaderMk2({className, channel}) {
    const volumeRef = useRef();

    const getter = gsap.getProperty(volumeRef.current)
  
    Draggable.create(volumeRef.current, {
      type: "y",
      inertia: false,
      dragResistance: 0.7,
      // bounds: {top: 14, left: 0, height: 268},
      bounds: "#volBounds",
      onDrag: (value) => {
        // console.log(value.offsetY);
        const y = getter("y");
        console.log(-y);
        handleVolumeFader(-y, "send", channel)
      },
    });
    return (
        <Container className={className}>
            <HandleBounds id="volBounds">

                <StyledHandle ref={volumeRef} alt="knob" src={volumeFaderHandle}></StyledHandle>
            </HandleBounds>
        </Container>
    )
}

const Container = styled.div`
width: 70%;
height: 100%;
padding: 0px 0px;
background-image: url(${volumeFaderNoHandle});
background-repeat: no-repeat;
background-size: contain;
background-position: center;
// border: 1px green solid;
overflow: hidden;
display: flex;
// justify-content: center;
`

const HandleBounds = styled.div`
margin: 5% 0;
// border: 2px solid pink;
display: flex;
justify-content: center;
align-items: start;
width: 100%;
`

const StyledHandle = styled.img`
background-color: transparent;
// position: relative;
// margin: auto;
width: 81%;
height: auto;
// border: blue 1px solid;

`