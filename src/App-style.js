import styled from "styled-components";

const AppStyle = styled.div`
height: ${props => props.windowHeight}px;
display:flex;
flex-direction: row;
justify-content: center;
`
const color1 = '#5ca0f2';
const color2 = '#f5f7f6';

const insetShadow = 'inset 0px 0px 2px 3px #5ca0f2'

export {AppStyle, color1, color2, insetShadow}