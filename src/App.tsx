import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Sorting from './pages/Sorting';
import Pathfinding from './pages/Pathfinding';
import Graph from './pages/Graph';
import DynamicProgramming from './pages/DynamicProgramming';
import Searching from './pages/Searching';

import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <div className='py-7'>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/sorting' element={<Sorting/>}></Route>
        <Route path='/pathfinding' element={<Pathfinding/>}></Route>
        <Route path='/graph' element={<Graph/>}></Route>
        <Route path='/dynamic-programming' element={<DynamicProgramming/>}></Route>
        <Route path='/searching' element={<Searching/>}></Route>
      </Routes>
      </div>
    </>
  )
}

export default App
