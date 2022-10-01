import './Main.css';
// import Logo from './Logo'

export default function Menu(props) {

  return (
    <div className='jumbotron'>
      <div className='Meio'>
        <div className='texto'>
          <h1>James Webb</h1>
        </div>

        <h2>Já ouviu falar do Telescópio James Webb? Atualmente é o maior e mais poderoso do mundo e devido a sua estrutura e potência ele precisa operar no espaço, além de contar com mais de dezoito espelhos, nos quais captura as imagens do cosmos. E para explicar o funcionamento desse aparelho desenvolvemos um jogo. Em "NOME" o jogador se passa por um cientista contratado pela NASA para operá-lo, com o objetivo de encontrar novas galáxia, planetas, constelações etc… E todo o seu funcionamento e funções será explicado no jogo, trazendo a sensação de um cientista e explorador espacial mais real, além da possibilidade de descobrimos mais sobre o espaço e sobre James Webb.</h2>

        <div className='texto'>
          <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" title='bla'></iframe>
        </div>

      </div>
    </div>
  )
}