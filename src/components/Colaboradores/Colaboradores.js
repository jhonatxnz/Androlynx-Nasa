import './Colaboradores.css';

import Img1 from "./img1.png"
import Img2 from "./img2.png"
import Img3 from "./img3.png"
import Img4 from "./img4.png"
import Img5 from "./img5.png"
import Img6 from "./img6.png"
// import Logo from './Logo'

export default function Colaboradores(props) {

  return (
    <div className='jumbotron'>
      <div className='Meio2'>
        <div className='paginaDesenvolvedores'>
          <div id="titulo">
            <h1>Developers</h1>
          </div>
          <div className='conteudoDeImagens'>

            <div className='imgComTexto'>
              <img src={Img1} className='img' alt="imagem"/>
              <h1 className='nome'>Guilherme</h1>
            </div>
            <div className='imgComTexto'>
              <img src={Img2} className='img' alt="imagem"/>
              <h1 className='nome'>Nicolas</h1>
            </div>
            <div className='imgComTexto'>
              <img src={Img3} className='img' alt="imagem"/>
              <h1 className='nome'>João Guilherme</h1>
            </div>
            <div className='imgComTexto'>
              <img src={Img4} className='img' alt="imagem"/>
              <h1 className='nome'>Jhonatan</h1>
            </div>
            <div className='imgComTexto'>
              <img src={Img5} className='img' alt="imagem"/>
              <h1 className='nome'>Matheus Traiba</h1>
            </div>
            <div className='imgComTexto'>
              <img src={Img6} className='img' alt="imagem"/>
              <h1 className='nome'>João Vitor</h1>
            </div>
          </div>
          <div id="titulo2">
            <h1>Who are we and why did we develop this project?</h1>
          </div>
          <div id="quemSomos">
          <p>Our goal is to show not only the quality of photos that James Webb can capture, but also to bring people an interactive and fun way to understand how the telescope works. In addition to showing the beauty of our universe with some photos recorded by both Webb and other telescopes</p>

          </div>

        </div>
      </div>

    </div>

  )
}