import styled,{createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
}
`

export const Header = styled.header`
border: solid 2px;
background-color:#4A5051;
width: 15vw;
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-evenly;
`