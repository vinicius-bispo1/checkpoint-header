import styled, { css } from "styled-components";

const center = css`
display: flex;
justify-content: center;
align-items: center;
`

export const Main = styled.main`
border: solid 2px red;
height: 100vh;
display: flex;
@media (max-width: 500px){
    flex-direction: column;
}
`
export const BoxSobre = styled.section`
width: 100%;
border: solid 2px green;
background-color: #839697;
${center}
flex-direction: column;
justify-content: space-around;

`
export const Texto = styled.div`
/* border: solid 2px red; */
width: 60%;
height: 43vh;
color: white;
display: flex;
flex-direction: column;
justify-content: space-between;
h2{
    text-align: center;
    font-size: 2.5rem;
}
p{
    font-size: 1.7rem;
}
`
export const Habilidade = styled.div`
/* border: solid 2px yellow; */
text-align: center;
width: 50%;
height: 25vh;
color: white;
display: flex;
flex-direction: column;
justify-content: space-between;
h2{
  font-size: 2.5rem;  
}
figure{
  ${center}
  justify-content: space-evenly;
}
`
