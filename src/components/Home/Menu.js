import './Menu.css';
// import Logo from './Logo'

export default function Menu(props) {

  return (
    <nav>
      <div className="engloba">
        <div className="logo">
          {/* <Logo /> */}
          <h2>
            <a href='/' >Androlynx</a>
          </h2>
        </div>
        
        <div className="links">
          <a className="link" href="https://www.figma.com/file/7rQkXe62DQ33x7La8Dm4tD/Androlynx---game?node-id=0%3A1">Figma</a>
          <a className="link" href="https://www.youtube.com/watch?v=AP_Xkga4ov8">Trailer</a>
          <a className="link" href="/colaboradores"><span>Collaborators</span></a>
        </div>
      </div>
    </nav>
  )
}