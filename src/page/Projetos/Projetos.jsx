import React from 'react'
import Header from '../../components/Header'
import * as S from "./styled"
import Carrosel from "react-elastic-carousel"

export default function Projetos() {
  return (
   <S.Main>
      <Header/>
    <S.BoxProjetos>
        <S.BoxImg>
        <Carrosel itemsToShow={2}>
          <S.Card>
         <a href='https://styled-components.com/' target='blank'> <img src="https://static.vecteezy.com/ti/vetor-gratis/p3/2275818-avatar-feminino-mulher-perfil-icone-para-rede-vetor.jpg" alt="" /></a>
          <h2>macDonalds</h2>
          <a className='git' href="">GitHub</a>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
         </S.Card>
          <img src="https://i.pinimg.com/736x/59/74/d0/5974d04323d9efbaf170c72cfdb07b44.jpg" alt="" />
          <img src="https://static.vecteezy.com/ti/vetor-gratis/p1/2275847-avatar-masculino-perfil-icone-de-homem-caucasiano-sorridente-vetor.jpg" alt="" />
          <img src="https://static.vecteezy.com/system/resources/previews/011/675/367/non_2x/man-avatar-image-for-profile-png.png" alt="" />
       </Carrosel>
        </S.BoxImg>
      </S.BoxProjetos>
    </S.Main>
  )
}
