import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavbarComponent from './Components/Navbar/NavbarComponent';
import HomePageComponent from './Components/Home/HomePageComponent';
import 'bootstrap/dist/css/bootstrap.min.css'
import RiotGamesPageComponent from './Components/RiotGames/RiotGamesPageComponent';
import NvidiaPageComponent from './Components/Nvidia/NvidiaPageComponent';
import UnityPageComponent from './Components/Unity/UnityPageComponent';
import IntelPageComponent from './Components/Intel/IntelPageComponent';
import TeslaPageComponent from './Components/Tesla/TeslaPageComponent';
function App() {
  return (
    <BrowserRouter>
    <NavbarComponent/>
      <Routes>
        <Route path='/' element={<HomePageComponent/>}/>
        <Route path='/riotgames' element={<RiotGamesPageComponent/>}/>
        <Route path='/nvidia' element={<NvidiaPageComponent/>}/>
        <Route path='/unity' element={<UnityPageComponent/>}/>
        <Route path='/intel' element={<IntelPageComponent/>}/>
        <Route path='/tesla' element={<TeslaPageComponent/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
