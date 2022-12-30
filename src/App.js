import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import TicketPage from './pages/TicketPage'
import Nav from './Components/Nav'
import Login from './pages/Login';

const API = "http://localhost:4000";


const App = () => {

  // const [mobiles, setMobiles] = useState([]);

  // const getMobiles = () => {

  //   fetch(`${API}/mobiles`)
  //   .then ((data) => data.json())
  //   .then ((data) => console.log(data))
  //   .then ((mbs) => setMobiles(mbs));
  // };
  
  // useEffect(() => { 
  //   getMobiles();
  // }, [] );
  
  // console.log(mobiles);

  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
      <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/ticket' element={<TicketPage/>}/>
        <Route path='/ticket/:id' element={<TicketPage editmode={true}/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
