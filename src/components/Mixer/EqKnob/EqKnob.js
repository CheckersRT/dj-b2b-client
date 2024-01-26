import handleEq from "./handleEq";
import {gsap} from "gsap"
import {Draggable} from "gsap/Draggable"
import {useRef} from "react"
import styled from "styled-components"
import BasicKnob from "../BasicKnob/BasicKnob";

gsap.registerPlugin(Draggable)

export default function EqKnob({channel, param, className}) {

  return (
    <StyledBasicKnob className={className} param={param} channel={channel} handleRotation={handleEq}/>
  );
}

const StyledBasicKnob = styled(BasicKnob)`
width: 75%;
// border: 1px solid pink;

`