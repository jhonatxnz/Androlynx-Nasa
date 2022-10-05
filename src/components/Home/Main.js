import './Main.css';
// import Logo from './Logo'

export default function Menu(props) {

  return (
    <div className='jumbotron'>
      <div className='Meio'>
        <div className='texto'>
          <h1>James Webb</h1>
        </div>
        <h2>Ever heard of the James Webb Telescope? It is currently the largest and most powerful in the world and due to its structure and power it needs to operate in space, in addition to having more than eighteen mirrors, in which it captures images of the cosmos. And to explain how this device works, we developed a game. In "Androlynx" the player poses as a scientist hired by NASA to operate it, with the aim of finding new galaxies, planets, constellations etc... And all its functioning and functions will be explained in the game, bringing the feeling of a scientist and more real space explorer, plus the possibility of finding out more about space and about James Webb.</h2>

        <div className='texto'>
             <iframe src="https://www.youtube.com/embed/AP_Xkga4ov8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

      </div>
    </div>
  )
}