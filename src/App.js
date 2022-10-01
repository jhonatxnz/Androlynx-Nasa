import './App.css';
import Menu from './components/Home/Menu';
import Main from './components/Home/Main'
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
            
        </div>
    </BrowserRouter>
  );
}

export default App;
