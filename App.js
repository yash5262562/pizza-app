
import './App.css';
// import { Instagram } from '@mui/icons-material';
// import Footer from "./components/Footer"
import { BrowserRouter,Routes,Route  } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
// import { Home } from '@mui/icons-material'
import Home from "./components/Home"
import Menu from './components/Menu';
import Contact from './components/Contact';
import About from './components/About'


function App() {
  return (
    <div className="App">
    <BrowserRouter>

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/menu" element={<Menu/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
  
</Routes>

</BrowserRouter>
     

    </div>
  );
}

export default App;
