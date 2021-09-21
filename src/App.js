import Navbar from './componet/Navbar';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './componet/home';
import Hadith from './componet/hadith';

function App() {
  return (
    <div className="App">
      <BrowserRouter>  <Navbar></Navbar></BrowserRouter>
   <Home></Home>
   <Hadith></Hadith>
    </div>
  );
}

export default App;
