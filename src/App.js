import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Home from "./pages/home";
import Voting from "./pages/Voting";
import Breed from "./pages/breed";
import Gallery from "./pages/gallery";


function App() {
  return(
    
    <Router>
      <Routes>
        <Route path='/' element={<Home/> }></Route>
        <Route path='/Voting' element={<Voting/> }></Route>
        <Route path='/Breeds' element={<Breed/>}></Route>
        <Route path='/Gallery' element={<Gallery/>}></Route>
      </Routes>
     
    </Router> 
  
  ) 
}

export default App
