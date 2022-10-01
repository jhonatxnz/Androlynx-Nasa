import './Menu.css';
// import Logo from './Logo'

export default function Menu(props) {

  return (
    <nav>
      <div className="engloba">
        <div className="logo">
          {/* <Logo /> */}
          <h2>Androlynx</h2>
        </div>
        
        <div className="links">
          <a className="link" href="/figma">Figma</a>
          <a className="link" href="/trailer">Trailer</a>
          <a className="link" href="/colaboradores"><span>Colaboradores</span></a>
        </div>
      </div>
    </nav>
  )
}