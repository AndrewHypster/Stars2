import styled from "styled-components";

export const stars = styled.h1`
  font-size: 3.5vw;
  color: transparent;
  background: linear-gradient(to right, red 0% ${props => props.theme.rating==='null%'? `0%` : props.theme.rating}, black ${props => props.theme.rating==='null%'? `0%` : props.theme.rating} 100%);
  -webkit-background-clip: text;
  cursor: pointer;
`

export const rating = styled.h1`
  text-align: center;
`