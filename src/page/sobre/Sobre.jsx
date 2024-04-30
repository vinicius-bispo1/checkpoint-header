import React from 'react'
import Header from '../../components/Header'
import * as S from "./styled"
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import js from "../../assets/js.png"
import react from "../../assets/react.png"
import styled from "../../assets/styled.png"


export default function Sobre() {
  return (
 <S.Main>
      <Header/>
      <S.BoxSobre>
        <S.Texto>
         <h2>Sobre mim</h2>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellendus libero repudiandae quas possimus architecto quaerat ut nobis in maiores impedit, quibusdam expedita necessitatibus placeat reiciendis quo quidem molestias reprehenderit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus labore magni voluptatum deserunt consequuntur quae possimus at ab fugiat, deleniti, modi molestias aut ullam quasi blanditiis nesciunt veniam nisi. Enim.
         </p>
        </S.Texto>
        <S.Habilidade>
          <h2>Habilidades</h2>
          <figure>
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
            <img src={react} alt="" />
            <img src={styled} alt="" />
          </figure>
        </S.Habilidade>
      </S.BoxSobre>
    </S.Main>
  )
}
