import styled from "styled-components";

export const Main = styled.main`
border: solid 2px red;
height: 100vh;
display: flex;
@media (max-width: 500px){
    flex-direction: column;
}
`
export const BoxProjetos = styled.section`
width: 100%;
`

export const BoxImg = styled.div`
border: solid 2px red;
width: 50vw;
img{
    width: 20vw;
}
`
export const Card = styled.figure`
border: solid 2px yellow;
height: 60vh;
display: flex; 
flex-direction: column;
align-items: center;
justify-content: space-evenly;
  .git{
    padding: 10px 20px;
    background-color: gray;
    color: white;
  }
  p{
    width: 80%;
  }
`