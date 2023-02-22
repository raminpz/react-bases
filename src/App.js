
import './App.css';

import { BrowserRouter as Router , Routes, Route, Link} from 'react-router-dom';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <header className='App-header'>

      <Router>
        <div>
          <ul>
            <li>
             <Link to ="/">Home</Link> 
            </li>
            <li>
             <Link to ="/contact">Contacto</Link> 
            </li>
          </ul>
        </div>
        <Routes>
          <Route path='/contac' element={<Contact />} />
        </Routes>
      </Router>


      </header>
    </div>
  );
}

export default App;
