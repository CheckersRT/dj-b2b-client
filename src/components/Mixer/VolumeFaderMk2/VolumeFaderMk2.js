import styled from "styled-components"
import volumeFaderNoHandle from "./level-meter-no-handle.svg"
import volumeFaderHandle from "./level-meter-handle.svg"

export default function VolumeFaderMk2({className}) {
    return (
        <Container className={className}>
                <StyledHandle alt="knob" src={volumeFaderHandle}></StyledHandle>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
padding: 0px 0px;
background-image: url(${volumeFaderNoHandle});
background-repeat: no-repeat;
background-size: contain;
background-position: center;
border: 1px green solid;
overflow: hidden;
display: flex;
justify-content: center;
`

const StyledHandle = styled.img`
margin: auto;
position: relative;
width: 40%;
height: 20%
background-color: transparent;

`