import { Link } from "react-router-dom";
import linkedin from "../assets/link.png"
import git from "../assets/git.png"
import face from "../assets/face.png"
import * as S from "./styled"


export default function Header() {
  return (
    <S.Header>
        <div>
            <img src="https://a91mcico4j0e.avataruol.com.br/avatar.jpg" alt="" />
            <h2>Izabel Mattos</h2>
            <p>Front-end Developer</p>
        </div>
              <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/sobre">Sobre mim</Link></li>
                    <li><Link to="/projetos">Projetos</Link></li>
                </ul>
              </nav>
              <div>
                <a href=""> <img src={linkedin} alt="" /> </a>
                <a href=""> <img src={git} alt="" /> </a>
                <a href=""> <img src={face} alt="" /> </a>
              </div>
    </S.Header>
  )
}
