import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GridComponent from './Component/GridComponent';
import InsertComponent from './Component/InsertComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<GridComponent />} />
          <Route path='/insert' element={<InsertComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
