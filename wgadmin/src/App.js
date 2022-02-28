import { Routes } from 'react-router-dom';
import './App.css';
import AdminHome from './wgadminPages/AdminHome';
import NewUser from './wgadminPages/NewUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AdminHome/>}/>
        <Route path="/NewUser" element={<NewUser/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
