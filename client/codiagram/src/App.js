import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Sidebar from './components/sidebar';
import Home from './components/home';

function App() {
  return (
      <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Sidebar/>}>
            <Route index element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
