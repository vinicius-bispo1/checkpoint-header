import styled from "styled-components";

export const Main = styled.main`
border: solid 2px red;
height: 100vh;
display: flex;
@media (max-width: 500px){
    flex-direction: column;
}
`
export const Container = styled.section`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: #839697;
@media (max-width: 500px){
    border: solid 1px;
    height: 100%;
}
`

export const BoxInicio = styled.div`
display: flex;
align-items: center;
width: 80vw;
border: solid 1px;
h1{
    font-size: 4vw;  
    width: 48vw;
}
p{
    font-size: 2vw;
}
img{
    width: 30vw;
}
@media (max-width: 500px){
   height: 90%;
   flex-direction: column-reverse;
   justify-content: space-around;
}
`