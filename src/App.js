import './App.css';
import Menu from './components/Home/Menu';
import Rodape from './components/Home/Rodape';

import { BrowserRouter } from 'react-router-dom';
import Rotas from './Routes';
function App() {
  return (
    <BrowserRouter>
        <div className="app">
          {/* MENU */}
            <Menu/>
            <Rotas/>
            {/* <Main/> */}
            <Rodape/>
            
        </div>
    </BrowserRouter>
  );
}

export default App;
