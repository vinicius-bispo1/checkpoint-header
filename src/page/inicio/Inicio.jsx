import Header from '../../components/Header'
import * as S from "./styled"



export default function Inicio() {
  return (
    <S.Main>
      <Header/>
      <S.Container>
        <S.BoxInicio>
          <div>
            <h2>Bom dia</h2>
          <h1>Olá meu nome e vinicius sou dev front-end</h1>
          <p>Não é a linguagem de programação que define o programador, mas sim sua lógica.</p>
         </div>
          <img src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369991.png" alt="" />
        </S.BoxInicio>
      </S.Container>
    </S.Main>
  )
}
