import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import List from './pages/List';
import Hotel from './pages/Hotel';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/hotels" element={<List/>}></Route>
          <Route path="/hotel" element={<Hotel/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
